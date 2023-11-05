import * as z from 'zod'

export const authSchema = z.object({
	email: z.string().email({
		message: 'Please enter a valid email address',
	}),
	password: z
		.string()
		.min(8, {
			message: 'Password must be at least 8 characters long',
		})
		.max(100)
		.regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/, {
			message:
				'Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character',
		}),
})

export const signupSchema = z.object({
	email: authSchema.shape.email,
	password: authSchema.shape.password,
	fullname: z
		.string()
		.regex(/^[a-zA-Z]+ [a-zA-Z]+$/, { message: 'Please enter a valid name' }),
})

export const verifyEmailSchema = z.object({
	code: z
		.string()
		.min(6, {
			message: 'Verification code must be 6 characters long',
		})
		.max(6),
})

export const profileFormSchema = z.object({
	username: z.string().optional(),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
})
