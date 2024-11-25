<?php

namespace App\Service;

use Symfony\Component\Form\FormInterface;

class FormConverter
{

    public static function getFormSchema(FormInterface $form): array
    {
        $schema = [];
        $schema['form'] = [
            'name' => $form->getName(),
            'action' => $form->getConfig()->getAction(),
            'method' => $form->getConfig()->getMethod(),

        ];
        foreach ($form as $child) {
            $schema['fields'][$child->getName()] = [
                'type' => $child->getConfig()->getType()->getBlockPrefix(),
                'required' => $child->getConfig()->getRequired(),
                'props' => [
                  'name' => $child->getConfig()->getName(),
                  'disabled' => $child->getConfig()->getDisabled(),
                ],
                'options' => $child->getConfig()->getOptions(),
                'label' => $child->getConfig()->getOptions()['label'],
            ];

            if ($child->getConfig()->getCompound()) {

            }
        }
        return $schema;
    }

    private static function getSubFields()
    {
        return [];
    }

}