// @project
import { landingMegamenu, pagesMegamenu } from '../../common-data';
import SvgIcon from '@/components/SvgIcon';
import { SECTION_PATH, ADMIN_PATH, BUY_NOW_URL, DOCS_URL, FREEBIES_URL } from '@/path';

/***************************  DEFAULT - NAVBAR  ***************************/

const linkProps = { target: '_blank', rel: 'noopener noreferrer' };
export const navbar = {
  customization: true,
  secondaryBtn: {
    children: <SvgIcon name="tabler-brand-github" color="white" size={18} />,
    href: "https://github.com/kacamata09",
    ...linkProps,
    sx: { minWidth: 40, width: 40, height: 40, p: 0 }
  },
  primaryBtn: { children: 'Hire Me', href: '#contact-me', ...linkProps },
  navItems: [
    // { id: 'home', title: 'Home', link: '/', color: "red" },
    { id: 'home', title: 'Home', link: '#hero-section', color: "red" },
    { id: 'aboutme', title: 'About Me', link: '#about-me', color: "red" },
    { id: 'projects', title: 'Projects', link: '#my-project', color: "red" },
    { id: 'contact-me', title: 'Contact', link: '#contact-me', color: "red" },
    // landingMegamenu,
    // { id: 'components', title: 'Blocks', link: SECTION_PATH,  color: "red" },
    // { id: 'dashboard', title: 'Dashboard', link: ADMIN_PATH, ...linkProps },
    // pagesMegamenu,
    // { id: 'docs', title: 'Docs', link: DOCS_URL, ...linkProps, icon: 'tabler-pin-invoke' }
  ]
};
