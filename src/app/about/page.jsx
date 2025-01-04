import { About9 } from "@/blocks/about";


const data = {
    title: 'About Me',
    description:
      "I'm a passionate software developer with a strong background in building scalable web applications. My expertise lies in backend development, database design, and creating intuitive user experiences.",
    skills: ['JavaScript', 'React.js', 'Node.js', 'NestJS', 'MySQL', 'TypeScript', 'Docker', 'Kubernetes'],
    imageUrl: 'https://via.placeholder.com/120', // Ganti dengan URL gambar profil kamu
  };
  
export default function About9Me() {
  return <About9 {...data} />;
}
