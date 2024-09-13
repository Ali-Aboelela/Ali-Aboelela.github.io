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
    //subscribe: {
    //    title: 'Subscribe to Dante Newsletter',
    //    text: 'One update per week. All the latest posts directly in your inbox.',
    //    formUrl: '#'
    //},
    postsPerPage: 8,
    itemsPerPage: 8
};

export default siteConfig;
