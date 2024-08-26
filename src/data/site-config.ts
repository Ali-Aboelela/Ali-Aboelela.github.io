export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    itemsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Ali Aboelela',
    subtitle: 'Personal portfolio and blog',
    description: '',
    //image: {
    //    src: '',
    //    alt: ''
    //},
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Career',
            href: '/career'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Tags',
            href: '/tags'
        }
    ],
    footerNavLinks: [
        //{
        //    text: 'About',
        //    href: '/about'
        //},
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'CV',
            href: '/aliCV.pdf'
        }
    ],
    socialLinks: [
        {
            text: 'Github',
            href: 'https://github.com/AliLovesTrees'
        },
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/ali-aboelela-32955a178/'
        }
    ],
    hero: {
        //title: 'Hi There & Welcome to My Corner of the Web!',
        text:
            `I'm **Ali Aboelela** (the sibling on the right). I’m a software engineer. I’m a problem driven person. I let problems I care about guide my long term professional and personal goals, as well as my decision making. Some of the problems I care about include food, energy security and sustainable cities more broadly as related to the climate crisis.<br><br>For more info on my technical skills and interests, please check out the careers tab. There you’ll also find articles detailing and reflecting on some of the important experiences I’ve had in my professional career. Outside of work I love the outdoors. Check out my blog for everything else.`,
        image: {
            src: '/hero.JPG',
            alt: 'A picture of ali with his siblings'
        }
        //actions: [
        //    {
        //        text: 'Get in Touch',
        //        href: '/contact'
        //    }
        //]
    },
    //subscribe: {
    //    title: 'Subscribe to Dante Newsletter',
    //    text: 'One update per week. All the latest posts directly in your inbox.',
    //    formUrl: '#'
    //},
    postsPerPage: 8,
    itemsPerPage: 8
};

export default siteConfig;
