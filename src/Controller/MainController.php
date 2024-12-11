<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class MainController extends AbstractController
{
    public function __construct(private readonly EntityManagerInterface $entityManager)
    {}

    #[Route('/{identifier}', name: 'app_index', priority: -1)]
    public function index(string $identifier): Response
    {
        $user = $this->entityManager
            ->getRepository(User::class)
            ->findOneBy([
                'identifier' => $identifier
            ]);

        return $this->render('main/index.html.twig');
    }
}
