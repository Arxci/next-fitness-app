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
	image: z
		.object({
			file: z.any().refine((files) => files?.length == 1, 'File is required.'),
		})
		.optional(),
	username: z
		.string()
		.min(1, {
			message: 'Username must be at least 1 character.',
		})
		.optional(),
	firstName: z
		.string()
		.min(1, {
			message: 'First name must be at least 1 character.',
		})
		.optional(),
	lastName: z
		.string()
		.min(2, {
			message: 'last name must be at least 1 character.',
		})
		.optional(),
	password: authSchema.shape.password,
})
