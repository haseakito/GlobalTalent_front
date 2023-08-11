import { z } from 'zod'

// Schema for sign up form
export const SignupFormSchema = z.object({    
    email: z.string().email({
        message: 'Does not match the email format'
    }).nonempty(),
    password: z.string().nonempty()
                        .min(8, { message: 'Password must be at least 8 characters long'})
                        .refine((value) => /[A-Z]/.test(value), {
                            message: 'Password must contain at least one uppercase letter'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Password must contain at least one number'
                        })
                        .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(value), {
                            message: 'Password must contain at least one special character'
                        }),                        
    confirmPassword: z.string().nonempty()
})
.refine((data) => data.password === data.confirmPassword, {
    message: 'Confirmation password does not match',
    path: ['confirmPassword'],
    
})


// Schema for login form
export const LoginFormSchema = z.object({
    email: z.string().email({
        message: 'Does not match the email format'
    }).nonempty(),
    password: z.string().nonempty()
                        .min(8, { message: 'Password must be at least 8 characters long'})
                        .refine((value) => /[A-Z]/.test(value), {
                            message: 'Password must contain at least one uppercase letter'
                        })
                        .refine((value) => /\d/.test(value), {
                            message: 'Password must contain at least one number'
                        })
                        .refine((value) => /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(value), {
                            message: 'Password must contain at least one special character'
                        })
})

// Schema for contact form
export const ContactFormSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email({
        message: 'Does not match the email format'
    }).nonempty(),
    organization: z.string().optional(),
    contact: z.string().min(10, {
        message: 'Contact must be longer than 10 characters'
    })
})