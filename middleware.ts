import { authMiddleware, redirectToSignIn } from '@clerk/nextjs'
import { NextResponse } from 'next/server'

export default authMiddleware({
	publicRoutes: ['/', '/sign-in(.*)', '/sign-up(.*)', '/sso-callback(.*)'],

	afterAuth(auth, req, evt) {
		// Redirect un authorized users navigating to private routes to the sign in
		if (!auth.userId && !auth.isPublicRoute) {
			return redirectToSignIn({ returnBackUrl: req.url })
		}

		// Redirect users that have signed in already from the below auth pages
		const authRoutes = ['/sign-in', '/sign-up', '/sign-up/verify-email']

		if (auth.userId && authRoutes.includes(req.nextUrl.pathname)) {
			return NextResponse.redirect(new URL('/', req.url))
		}
	},
})

export const config = {
	matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
