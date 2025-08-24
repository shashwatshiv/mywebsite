import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/#hero'),
    },
    {
      text: 'My Blogs',
      href: getBlogPermalink(),
      icon: 'tabler:notebook',
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Projects',
      href: '/#projects',
    },
    {
      text: 'Skills',
      href: '/#skills',
    },
  ],
  actions: [{ text: 'Get in Touch', href: getPermalink('/contact'), variant: 'primary' }],
};

export const socialMediaData = {
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/shashwatshiv', target: '_blank' },
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://instagram.com/shashwatshiv',
      target: '_blank',
    },
    {
      ariaLabel: 'LinkedIn',
      icon: 'tabler:brand-linkedin',
      href: 'https://linkedin.com/in/shashwatshiv',
      target: '_blank',
    },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/shashwatshiv', target: '_blank' },
  ],
};
