<?php

namespace App\Controller;

use App\Entity\User;
use App\Form\RegistrationFormType;
use App\Security\EmailVerifier;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bridge\Doctrine\Attribute\MapEntity;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Bundle\SecurityBundle\Security;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mime\Address;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Uid\Factory\UlidFactory;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Symfony\Contracts\Translation\TranslatorInterface;
use SymfonyCasts\Bundle\VerifyEmail\Exception\VerifyEmailExceptionInterface;
use function PHPUnit\Framework\isEmpty;

class RegistrationController extends AbstractController
{
    public function __construct(private EmailVerifier $emailVerifier)
    {
    }

    #[Route('/register', name: 'app_register')]
    public function register(Request $request, UserPasswordHasherInterface $userPasswordHasher, Security $security, EntityManagerInterface $entityManager): Response
    {
//        $user = new User();
//        $form = $this->createForm(RegistrationFormType::class, $user);
//        $form->handleRequest($request);
//
//
//        if ($form->isSubmitted() && $form->isValid()) {
//            /** @var string $plainPassword */
//            $plainPassword = $form->get('plainPassword')->getData();
//
//            // encode the plain password
//            $user->setPassword($userPasswordHasher->hashPassword($user, $plainPassword));
//
//            $entityManager->persist($user);
//            $entityManager->flush();
//
//            // generate a signed url and email it to the user
//            $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
//                (new TemplatedEmail())
//                    ->from(new Address('contact@nexteam.dev', 'Contact - NexTeam'))
//                    ->to((string) $user->getEmail())
//                    ->subject('Please Confirm your Email')
//                    ->htmlTemplate('registration/confirmation_email.html.twig')
//            );
//
//            // do anything else you need here, like send an email
//
//            return $security->login($user, 'form_login', 'main');
//        }

        return $this->render('registration/register.html.twig');
    }

    #[Route(path: '/create-account', name: 'app_create_account', methods: ['POST'])]
    public function createAccount(
        Request $request,
        UserPasswordHasherInterface $userPasswordHasher,
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator,
        UlidFactory $ulidFactory
    ): JsonResponse
    {
        $errorsList = [];
        /** @var object{
         *     email: string,
         *     name: string,
         *     password: string,
         *     confirmPassword: string,
         *     dateOfBirth: string,
         *     gender: string,
         *     csrfToken: string
         * } $data
         */
        $data = json_decode($request->getContent());

        // Validating the user's password. Since it cannot be directly be set to the
        // user entity, i set it firstly on a DTO then validate it using Symfony Assertions
        $userData = new \App\DTO\User();
        $userData->password = $data->password;
        $passwordErrors = $validator->validate($userData);

        if ($passwordErrors->count() > 0) {
            foreach ($passwordErrors as $passwordError) {
                $errorsList[] = $passwordError->getMessage();
            }
        }

        if ($data->password !== $userData->password) {
            $errorsList[] = "Passwords do not match";
        }

        $user = new User();

        // Set the data in the user object
        $user->setEmail($data->email);
        $user->setPassword($userPasswordHasher->hashPassword($user, $data->password));
        $user->setName($data->name);
        $user->setBornAt(new \DateTimeImmutable($data->dateOfBirth));
        $user->setGender($data->gender);
        $user->setIdentifier($ulidFactory->create());

        $errors = $validator->validate($user);

        if (!$this->isCsrfTokenValid('create-account', $data->csrfToken)) {
            return new JsonResponse([
                'errors' => ['Invalid CSRF token. Please try to resubmit the form.']
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        if ($errors->count() > 0) {
            foreach ($errors as $error) {
                $errorsList[] = $error->getMessage();
            }
        }

        if (!empty($errorsList)) {
            return new JsonResponse([
                'errors' => $errorsList,
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        $token = bin2hex(random_bytes(32));
        $user->setAuthToken($token);

        $entityManager->persist($user);
        $entityManager->flush();

        // generate a signed url and email it to the user
        $this->emailVerifier->sendEmailConfirmation('app_verify_email', $user,
            (new TemplatedEmail())
                ->from(new Address('contact@nexteam.dev', 'Contact - NexTeam'))
                ->to((string) $user->getEmail())
                ->subject('Please Confirm your Email')
                ->htmlTemplate('registration/confirmation_email.html.twig')
        );

        return new JsonResponse([
            'id' => $user->getId(),
            'token' => $token,
        ], 200);
    }

    #[Route(path: '/register/authenticate/{id}/{token}', name: 'app_register_authenticate')]
    public function authenticate(
        #[MapEntity(mapping: ['id' => 'id'])]
        ?User $user,
        string $token,
        Security $security,
        EntityManagerInterface $entityManager
    ): Response
    {
        if (!$user)
            return $this->redirectToRoute('app_login');

        if ($user->getAuthToken() !== $token)
            return $this->redirectToRoute('app_login');

        $user->setAuthToken(null);
        $entityManager->flush();
        $this->addFlash('info', 'Your account has been successfully created!');
        return $security->login($user, 'form_login', 'main');
    }

    #[Route('/verify/email', name: 'app_verify_email')]
    public function verifyUserEmail(Request $request, TranslatorInterface $translator): Response
    {
        $this->denyAccessUnlessGranted('IS_AUTHENTICATED_FULLY');

        // validate email confirmation link, sets User::isVerified=true and persists
        try {
            /** @var User $user */
            $user = $this->getUser();
            $this->emailVerifier->handleEmailConfirmation($request, $user);
        } catch (VerifyEmailExceptionInterface $exception) {
            $this->addFlash('verify_email_error', $translator->trans($exception->getReason(), [], 'VerifyEmailBundle'));

            return $this->redirectToRoute('app_register');
        }

        // @TODO Change the redirect on success and handle or remove the flash message in your templates
        $this->addFlash('success', 'Your email address has been verified.');

        return $this->redirectToRoute('app_register');
    }
}
