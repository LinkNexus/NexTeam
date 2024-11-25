<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\FormType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class HelloController extends AbstractController
{
    #[Route('/hello', name: 'app_hello')]
    public function index(): Response
    {
        $form = $this->createFormBuilder()
            ->add('name', TextType::class, [
                'label' => 'Name',
            ])
            ->add('message', TextareaType::class)
            ->add('terms', CheckboxType::class)
            ->add('submit', SubmitType::class)
            ->getForm();


        return $this->render('hello/index.html.twig', [
            'form' => $form,
        ]);
    }
}
