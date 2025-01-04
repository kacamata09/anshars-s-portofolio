'use client';

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Box, Typography, Chip, Stack, Avatar } from '@mui/material';

import ContainerWrapper from '@/components/ContainerWrapper';
import { SECTION_COMMON_PY } from '@/utils/constant';
import SvgIcon from '@/components/SvgIcon';

export default function AboutMe({
  title,
  description,
  skills,
  imageUrl,
  age,
  experience,
  location,
}) {
  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id='about-me' spacing={4} sx={{ alignItems: 'center' }}>
        {imageUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.1,
              ease: [0.215, 0.61, 0.355, 1],
            }}
          >
            <Avatar
              src={imageUrl}
              alt="Profile Picture"
              sx={{ width: 120, height: 120, boxShadow: 3, border: '2px solid', borderColor: 'grey.300' }}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <Typography fontFamily={'GoodbyeDespair, Arial, sans-serif'} fontWeight={"bold"} variant="h2" align="center">
            {title}
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <Typography variant="body1" align="center" sx={{ fontSize: '1.2rem', fontWeight:'bold', maxWidth: 800, color: 'white' }}>
            {description}
          </Typography>
        </motion.div>

        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
          <Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
            {skills.map((skill, index) => (
              <Chip key={index} label={skill} variant="outlined" sx={{ bgcolor: 'grey.100', py: 1, px: 2 }} />
            ))}
          </Stack>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.215, 0.61, 0.355, 1],
          }}
        >
<Stack direction="row" sx={{ gap: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
  <Chip
    label={`Age ${age}`}
    icon={<SvgIcon name="tabler-user-circle" color="inherit" />}
    variant="contained"
    sx={{
      bgcolor: '#DC143C',
      py: 1,
      px: 2,
      color: 'white',
      fontSize: '1rem', // Ukuran font yang lebih besar
      // fontWeight: 'bold', // Membuat teks bold
    }}
  />
  <Chip
    label={`Experience ${experience}`}
    variant="contained"
    icon={<SvgIcon name="tabler-briefcase" color="inherit" />}
    sx={{
      bgcolor: '#DC143C',
      color: 'white',
      py: 1,
      px: 2,
      fontSize: '1rem', // Ukuran font yang lebih besar
      // fontWeight: 'bold', // Membuat teks bold
    }}
  />
  <Chip
    label={`${location}`}
    icon={<SvgIcon name="tabler-map-pin" color="inherit" />}
    variant="contained"
    sx={{
      bgcolor: '#DC143C',
      color: 'white',
      py: 1,
      px: 2,
      fontSize: '1rem', // Ukuran font yang lebih besar
      // fontWeight: 'bold', // Membuat teks bold
    }}
  />
</Stack>

        </motion.div>
      </Stack>
    </ContainerWrapper>
  );
}

AboutMe.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  // skills: PropTypes.arrayOf(PropTypes.string),
  imageUrl: PropTypes.string,
  age: PropTypes.string,
  experience: PropTypes.string,
  location: PropTypes.string,
};
