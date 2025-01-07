// @mui
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import { SECTION_PATH } from '@/path';

export const hero = {
  chip: {
    label: (
      <>
        <Typography variant="subtitle2" sx={{ color: 'red',  }}>
        Keep moving forward, and never let yourself fall behind.
        </Typography>
        {/* <Chip
          label={
            <Typography variant="caption" sx={{ color: 'primary.main' }}>
              DESPAIR
            </Typography>
          }
          sx={{ height: 24, bgcolor: 'primary.lighter', mr: -1, ml: 0.75, '& .MuiChip-label': { px: 1.25 } }}
          icon={
            <CardMedia
              component="img"
              image="/assets/images/shared/celebration.svg"
              sx={{ width: 16, height: 16 }}
              alt="celebration"
              loading="lazy"
            />
          }
        /> */}
      </>
    )
  },
  image : "/assets/images/naegi.webp",
  headLine: 'Hi There, i am Anshar!!!',
  captionLine: 'Backend Developer | Software Engineer',
  primaryBtn: { children: 'Hire Me', href: '#contact-me' },
  secondaryBtn: { children: 'Download CV', href: 'https://drive.google.com/file/d/1Y4_QrZsB3YKoeu1we_Jnm4yksmSwU4Wa/view?usp=sharing', target: "_blank" },
  videoSrc: 'https://d2elhhoq00m1pj.cloudfront.net/saasable-intro.mp4',
  videoThumbnail: '/assets/videos/thumbnails/intro-thumbnail.png',
  listData: [
    { image: '/assets/images/shared/react.svg', title: 'React 18' },
    { image: '/assets/images/shared/next-js.svg', title: 'Next.js' },
    { image: '/assets/images/shared/material-ui.svg', title: 'Material UI v6' },
    { image: '/assets/images/shared/typescript.svg', title: 'TypeScript' },
    { image: '/assets/images/shared/javascript.svg', title: 'JavaScript' },
    { image: '/assets/images/shared/m3.svg', title: 'Material 3' },
    { image: '/assets/images/shared/figma.svg', title: 'Figma' }
  ]
};
