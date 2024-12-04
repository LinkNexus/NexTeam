import z from 'zod';

export const RegistrationSchema = z.object({
    email: z.string().email(),

    name: z.string().min(5, {
        message: 'Name must be at least 5 characters long'
    }).regex(/^[a-zA-Z]/, {
        message: 'Username must not contain special characters except hyphens and spaces'
    }).regex(/(?=.*[A-Za-z])/, {
        message: 'Username must contain at least a letter'
    }),

    password: z.string()
        .min(6, {
            message: "Password must be at least 6 characters long"
        })
        .regex(/[/!@#$%^&*(),.?":{}|<>\\]/g, {
            message: "Password must contain at least one special character"
        })
        .regex(/\d/, {
            message: "Password must contain at least one digit"
        })
        .regex(/[A-Z]/, {
            message: "Password must contain at least one uppercase character"
        }),

    confirmPassword: z.string(),

    dateOfBirth: z.date().optional(),

    termsAndConditions: z.boolean(),

    gender: z.enum(["male", "female", "other"], {
        message: "You need to select a gender",
    }),

    csrfToken: z.string()
})