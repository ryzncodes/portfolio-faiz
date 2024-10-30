export const navItems = [
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Testimonials', link: '#testimonials' },
	{ name: 'Contact', link: '#contact' },
];

export const gridItems = [
	{
		id: 1,
		title: 'I prioritize client collaboration, fostering open communication ',
		description: '',
		className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
		imgClassName: 'w-full h-full',
		titleClassName: 'justify-end',
		img: '/b1.svg',
		spareImg: '',
	},
	{
		id: 2,
		title: "I'm very flexible with time zone communications",
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '',
		spareImg: '',
	},
	{
		id: 3,
		title: 'My tech stack',
		description: 'I constantly try to improve',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
		imgClassName: '',
		titleClassName: 'justify-center',
		img: '',
		spareImg: '',
	},
	{
		id: 4,
		title: 'Tech enthusiast with a passion for development.',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-start',
		img: '/grid.svg',
		spareImg: '/b4.svg',
	},

	{
		id: 5,
		title: 'Making a loyalty web application for a company.',
		description: 'Current Project?',
		className: 'md:col-span-3 md:row-span-2',
		imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
		titleClassName: 'justify-center md:justify-start lg:justify-center',
		img: '/b5.svg',
		spareImg: '/grid.svg',
	},
	{
		id: 6,
		title: 'Do you want to start a project together?',
		description: '',
		className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
		imgClassName: '',
		titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
		img: '',
		spareImg: '',
	},
];

export const projects = [
	{
		id: 1,
		title: 'Netflix Clone',
		des: 'A responsive UI similar to Netflix, with sleek animations, carousel sliders, and interactive user experiences that mimic the original Netflix platform.',
		img: '/p1.svg',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg'],
		link: 'https://github.com/ryzncodes/netflix-clone',
	},
	{
		id: 2,
		title: 'Calculator Webapp',
		des: 'A simple calculator webapp that tracks submissions in real-time.',
		img: '/p2.svg',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg'],
		link: 'https://github.com/ryzncodes/calc-webapp',
	},
	{
		id: 3,
		title: 'NFT Collection DApp',
		des: 'A DApp that gives NFT drops to wallet and viewable in Opensea',
		img: '/p3.svg',
		iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
		link: 'https://github.com/ryzncodes/nft-collection-page',
	},
	{
		id: 4,
		title: 'Automating Twitter Data Extraction - ETL ',
		des: 'An ETL pipeline designed to extract data from Twitter API, transform it, and then load it into an S3 bucket using Airflow.',
		img: '/p4.svg',
		iconLists: ['/next.svg', '/tail.svg', '/ts.svg'],
		link: 'https://github.com/ryzncodes/twitter-airflow-etl',
	},
];

export const testimonials = [
	{
		quote: 'Working with Faiz was fantastic. He always delivered on time and exceeded expectations with his attention to detail. His input made a real difference in our website’s design and functionality.',
		name: 'Ahmad Zainal',
		title: 'Web Designer',
	},
	{
		quote: "Faiz is incredibly knowledgeable and easy to work with. He quickly understood our requirements and offered solutions that worked well for our business. I'd definitely work with him again.",
		name: 'Nurul Afiqah',
		title: 'Project Coordinator',
	},
	{
		quote: "Faiz's dedication to the project was clear from the start. He’s reliable, creative, and his development skills are top-notch. The results speak for themselves.",
		name: 'Zulkifli Rahman',
		title: 'Freelance Developer',
	},
	{
		quote: 'Faiz brought fresh ideas to the table and executed them flawlessly. His professionalism and communication throughout the project were impressive. I highly recommend him.',
		name: 'Siti Hajar',
		title: 'Startup Founder',
	},
	{
		quote: 'Faiz made the development process seamless. He was quick to respond to feedback and always kept us in the loop. The final product was better than we had envisioned.',
		name: 'Aiman Khalid',
		title: 'Marketing Executive',
	},
];

export const companies = [
	{
		id: 1,
		name: 'cloudinary',
		img: '/cloud.svg',
		nameImg: '/cloudName.svg',
	},
	{
		id: 2,
		name: 'appwrite',
		img: '/app.svg',
		nameImg: '/appName.svg',
	},
	{
		id: 3,
		name: 'HOSTINGER',
		img: '/host.svg',
		nameImg: '/hostName.svg',
	},
	{
		id: 4,
		name: 'stream',
		img: '/s.svg',
		nameImg: '/streamName.svg',
	},
	{
		id: 5,
		name: 'docker.',
		img: '/dock.svg',
		nameImg: '/dockerName.svg',
	},
];

export const workExperience = [
	{
		id: 1,
		title: 'Junior Digital Executive',
		desc: 'Assisted in the development of a landing pages using a skeleton with vanila JS, SCSS and HTML.',
		className: 'md:col-span-2',
		thumbnail: '/exp1.svg',
	},
	{
		id: 2,
		title: 'Website Developer',
		desc: 'Designed and developed e-commerce websites in Wordpress via Elementor',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp2.svg',
	},
	{
		id: 3,
		title: 'Freelance App Dev Project',
		desc: 'Led the dev of a web app for a client, from initial concept to deployment.',
		className: 'md:col-span-2', // change to md:col-span-2
		thumbnail: '/exp3.svg',
	},
	{
		id: 4,
		title: 'Web Master',
		desc: 'Maintained 50 websites via RunCloud and Vultr, making sure they are secured and optimized for speed.',
		className: 'md:col-span-2',
		thumbnail: '/exp4.svg',
	},
];

export const socialMedia = [
	{
		id: 1,
		img: '/git.svg',
		link: 'https://github.com/ryzncodes',
	},
	{
		id: 2,
		img: '/twit.svg',
		link: 'https://x.com/fzdev',
	},
	{
		id: 3,
		img: '/link.svg',
		link: 'https://www.linkedin.com/in/faizkasman/',
	},
];
