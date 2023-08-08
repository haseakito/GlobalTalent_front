import { z } from 'zod'

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