import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
	publicRoutes: ['/', '/sign-in(.*)', '/sign-up(.*)', '/sso-callback(.*)'],

	afterAuth(auth, req, evt) {
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url })
		}

		const authRoutes = ['/sign-in', '/sign-up', '/sign-up/verify-email']

		if (auth.userId && authRoutes.includes(req.nextUrl.pathname)) {
			return NextResponse.redirect(new URL('/', req.url))
		}
	},
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
