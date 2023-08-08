// type for sign up form
export type SignupFormProps = {    
    email: string,
    password: string,
    confirmPassword: string
}

// type for login form
export type LoginFormProps = {
    email: string,
    password: string
}

// type for contact form
export type ContactFormProps = {
    name: string,
    email: string,
    organization?: string,
    contact: string
}