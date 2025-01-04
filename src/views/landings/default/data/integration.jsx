// @project
import SvgIcon from '@/components/SvgIcon';
import { DOCS_URL } from '@/path';

export const integration = {
  headLine: 'My Professional Skill',
  captionLine: 'Pintar aku Gunakan',
  primaryBtn: {
    children: 'Documentation',
    startIcon: <SvgIcon name="tabler-help" color="background.default" />,
    href: DOCS_URL,
    target: '_blank',
    rel: 'noopener noreferrer'
  },
  tagList: [
    { label: 'Python', icon: 'tabler-brand-python' },
    { label: 'Golang', icon: 'tabler-brand-golang' },
    // { label: 'JavaScript', icon: 'tabler-brand-javascript' },
    { label: 'TypeScript', icon: 'tabler-brand-typescript' }, // Tidak ada ikon NestJS, Angular digunakan sebagai representasi framework terkait.
    { label: 'PHP', icon: 'tabler-brand-php' },
    { label: 'NodeJS', icon: 'tabler-brand-nodejs' },
    { label: 'ReactJS', icon: 'tabler-brand-react' }, // Tidak ada ikon NestJS, Angular digunakan sebagai representasi framework terkait.
    { label: 'ExpressJS', icon: 'tabler-brand-nodejs' }, // Tidak ada ikon NestJS, Angular digunakan sebagai representasi framework terkait.
    { label: 'Echo', icon: 'tabler-brand-golang' }, // Echo terkait erat dengan Golang.
    { label: 'Flask', icon: 'tabler-brand-python' }, // Flask memiliki ikon labu (flask) di Tabler.
    { label: 'Laravel', icon: 'tabler-brand-laravel' },
    { label: 'MySQL', icon: 'tabler-brand-mysql' }, // Tidak ada ikon langsung untuk MySQL, ikon database umum digunakan.
    { label: 'PostgreSQL', icon: 'tabler-database' },
    { label: 'MongoDB', icon: 'tabler-brand-mongodb' },
    { label: 'Linux', icon: 'tabler-brand-redhat' },
    { label: 'Git', icon: 'tabler-brand-git' },
    { label: 'CI/CD', icon: 'tabler-repeat' },
    { label: 'Jenkins', icon: 'tabler-old' },
    { label: 'Nginx', icon: 'tabler-server' },
    { label: 'Apache', icon: 'tabler-server' }, // Tidak ada ikon langsung untuk Apache, server digunakan sebagai representasi.
    { label: 'JMeter', icon: 'tabler-feather' } // Tidak ada ikon langsung untuk Apache, server digunakan sebagai representasi.
]

};
