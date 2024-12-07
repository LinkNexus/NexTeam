<?php

namespace App\DTO;

use Symfony\Component\Validator\Constraints as Assert;

class User
{
    #[Assert\Length(min: 5, max: 255)]
    #[Assert\Regex(pattern: '/[!@#$%^&*(),.?":{}|<>\\\]/', message: "Password must contain at least one special character")]
    #[Assert\NotBlank(message: "Password can't be empty")]
    #[Assert\Regex(pattern: '/\d/', message: "Password must contain at least one digit")]
    #[Assert\Regex(pattern: '/[A-Z]/', message: "Password must contain at least one uppercase character")]
    public ?string $password = null;
}