export const siteConfig: SiteConfig = {
	name: 'SkillJet',
	description:
		'Dive into diverse expert-led courses, a platform igniting learning journeys for knowledge and skill enhancement at your own pace.',
	navLinks: [
		{
			title: 'categories',
			items: [
				{
					title: 'Business',
					href: '#',
					description:
						'Explore Business Essentials: Strategy, Finance, Marketing, Management, Entrepreneurship, Sales, Economics.',
				},
				{
					title: 'Development',
					href: '#',
					description:
						'Discover Development: Coding, Web, App, Software, Design, UX/UI, Tech Skills, Programming.',
				},
				{
					title: 'Finance & Accounting',
					href: '#',
					description:
						'Master Finance & Accounting: Investments, Analysis, Budgeting, Financial Statements, Risk Management.',
				},
				{
					title: 'IT & Software',
					href: '#',
					description:
						'Explore IT & Software: Coding, Networks, Cybersecurity, Cloud Computing, Development Tools.',
				},
				{
					title: 'Design',
					href: '#',
					description:
						'Discover Design: Graphic, UX/UI, Product, Web, Creative Tools, Visual Communication.',
				},
				{
					title: 'Health & Fitness',
					href: '#',
					description:
						'Embrace Health & Fitness: Wellness, Exercise, Nutrition, Mental Health, Personal Development.',
				},
			],
		},
		{
			title: 'support',
			items: [
				{
					title: 'FAQ',
					href: '#',
					description:
						'Quick answers for navigating SkillJet. Support your fitness journey seamlessly.',
				},
				{
					title: 'Customer Service',
					href: '#',
					description: 'Get in contact with one of our representatives today.',
				},
			],
		},
	],
}

interface SiteConfig {
	name: string
	description: string
	navLinks: {
		title: string
		items: { title: string; href: string; description: string }[]
	}[]
}
