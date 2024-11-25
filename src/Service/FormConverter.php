<?php

namespace App\Service;

use Symfony\Component\Form\FormInterface;

class FormConverter
{

    public static function getFormSchema(FormInterface $form): array
    {
        $schema = [];
        foreach ($form as $child) {
            $schema[$child->getName()] = [
                'type' => $child->getConfig()->getType()->getBlockPrefix(),
                'required' => $child->getConfig()->getRequired(),
                'options' => $child->getConfig()->getOptions(),
            ];
        }
        return $schema;
    }

}