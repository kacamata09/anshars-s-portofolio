'use client';
import PropTypes from 'prop-types';

// @next
import NextLink from 'next/link';

// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import {
  Modal,
  Divider,
  IconButton
} from "@mui/material";

// @third-party
import { motion } from 'framer-motion';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Typeset from '@/components/Typeset';
import { GraphicsCard } from '@/components/cards';

import useFocusWithin from '@/hooks/useFocusWithin';
import { SECTION_COMMON_PY } from '@/utils/constant';
import GetImagePath from '@/utils/GetImagePath';
import { useState } from 'react';
import SvgIcon from '@/components/SvgIcon';

const ProjectDetailsModal = ({
  open = false,
  handleClose = () => {},
  projectName = "Unknown Project",
  company = "Unknown Project",
  dateFrom = "Not specified",
  dateTo = "Not specified",
  description = "No description available.",
  responsibility = ["No responsibilities listed."],
  teamSize = "Not specified",
  tools = ["No tools listed."],
}) => {
  // Framer Motion Variants
  const modalVariants = {
    hidden: { opacity: 0, y: 100, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25 
      },
    },
    exit: { opacity: 0, y: 100, scale: 0.95 },
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="project-details-title"
      aria-describedby="project-details-description"
      closeAfterTransition
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", md: "60%" },
          outline: "none",
        }}
      >
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate={open ? "visible" : "hidden"}
          exit="exit"
          transition={{ duration: 0.4 }}
        >
          <Box
            sx={{
              bgcolor: "#1c1c1c",
              // border: "1px solid #ccc",
              borderRadius: 9,
              boxShadow: 24,
              p: 4,
              position: "relative",
            }}
          >
            {/* Tombol Close */}
            <IconButton
              onClick={handleClose}
              sx={{
                position: "absolute",
                top: 9,
                right: 15,
                color: "red",
              }}
            >
            <SvgIcon name="tabler-x" color="red" stroke={6} />
              
            </IconButton>

            <Typography color={'crimsonred'} id="project-details-title" variant="h5" fontWeight="bold">
              {projectName}
            </Typography>
            {/* <Typography color={'white'} variant="subtitle1" sx={{ mb: 2 }}>
              {dateFrom} - {dateTo}
            </Typography> */}
            <Typography color={'white'} variant="subtitle1" sx={{ mb: 2 }}>
              at {company}
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Typography color={'white'} id="project-details-description" variant="h6" gutterBottom>
              Description:
            </Typography>
            <Typography color={'white'} variant="body1" sx={{ mb: 2 }}>
              {description}
            </Typography>

            {/* <Typography color={'white'} variant="h6" gutterBottom>
              Responsibility:
            </Typography> */}
            <Stack spacing={1} sx={{ mb: 2 }}>
              {responsibility.map((task, index) => (
                <Typography color={'white'} variant="body1" key={index}>
                  - {task}
                </Typography>
              ))}
            </Stack>

            <Typography color={'white'} variant="h6" gutterBottom>
              Team Size:
            </Typography>
            <Typography color={'white'} variant="body1" sx={{ mb: 2 }}>
              {teamSize}
            </Typography>

            <Typography color={'white'} variant="h6" gutterBottom>
              Tools:
            </Typography>
            <Stack spacing={1}>
              {tools.map((tool, index) => (
                <Typography color={'white'} variant="body1" key={index}>
                  {tool}
                </Typography>
              ))}
            </Stack>
          </Box>
        </motion.div>
      </Box>
    </Modal>
  );
};
export default function Other1({ heading, description, primaryBtn, sections }) {
  const [open, setOpen] = useState(false);
  const [dataProject, setDataProject] = useState()
  const handleOpen = (project) => {
    setOpen(true)
    setDataProject(project)
  };
  const handleClose = () => setOpen(false);
  
  const theme = useTheme();

  // Animasi untuk container grid
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger efek antar children
      },
    },
  };

  // Animasi untuk setiap item grid
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    show: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99], // Bezier curve untuk easing
      },
    },
    hover: { scale: 1.05 }, // Efek hover
  };

  return (
    <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
      <Stack id="my-project" sx={{ gap: { xs: 3, sm: 4 } }}>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          {/* <Typeset {...{ heading, stackProps: { sx: { textAlign: 'center' } } }} /> */}
          <Typography fontFamily={'GoodbyeDespair, Arial, sans-serif'} fontWeight={"bold"} variant="h2" align="center">
            {heading}
          </Typography>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Grid container spacing={1.5}>
            {sections.map((item, index) => (
              <Grid key={index} item xs={6} sm={4} md={4}>
                <motion.div
                  variants={itemVariants}
                  whileHover="hover"
                  style={{ height: '100%' }}
                >
<Box
  sx={{
    height: { xs: 300, sm: 350 },
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: theme.shadows[3],
    position: 'relative',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    '&:hover': {
      transform: 'translateY(-5px)',
      boxShadow: theme.shadows[6],
    },
  }}
>
  {/* Gambar dengan overlay */}
  <Box
    sx={{
      position: 'relative',
      height: '60%',
      overflow: 'hidden',
    }}
  >
    <CardMedia
      component="img"
      image={GetImagePath(item.image)}
      alt={item.projectName}
      sx={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
        transition: 'transform 0.3s ease',
        '&:hover': { transform: 'scale(1.05)' },
      }}
    />
    <Box
      onClick={()=> {
        handleOpen(item)
      }
      }

      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%)',
      }}
    />
  </Box>

  {/* Konten card */}
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 2,
    }}
  >
    <Typography color='' variant="h6" fontWeight="bold" sx={{ mb: 1 }}>
      {item.projectName}
    </Typography>
    <Typography
  variant="body2"
  color="white"
  sx={{ flexGrow: 1 }}
>
  {item.description.length > 18 && (item.githubLink || item.demoLink) ? `${item.description.substring(0, 99)}........` : item.description.substring(0, 192) + '.......'}
</Typography>

    {/* Tombol */}
    <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
  {item.demoLink &&   ( <Button
        variant="contained"
        href={item.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        color="error"
        sx={{ flex: 1 }}
        >
        Demo
      </Button>)
          }
      {item.githubLink && 
      (<Button
        variant="contained"
        href={item.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        color="secondary"
        sx={{ flex: 1 }}
        >
      
        GitHub
      </Button>)} 
    </Stack>
  </Box>
</Box>



                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
        {/* <Stack sx={{ gap: 2, alignItems: 'center' }}>
          <Typography
          variant="h6"
            align="center"
            sx={{
              color: theme.palette.mode === 'dark' ? 'text.secondary' : 'white',
              width: { xs: 1, sm: '80%', md: '65%' },
            }}
            >
            <motion.div
            initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.3,
              }}
              >
              {description}
              </motion.div>
              </Typography>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: 0.4,
              }}
          >
            <ButtonAnimationWrapper>
            <Button variant="contained" color='error' {...primaryBtn} />
            </ButtonAnimationWrapper>
            </motion.div>
            </Stack> */}
      </Stack>
<ProjectDetailsModal open={open} handleClose={handleClose} {...dataProject} />

    </ContainerWrapper>
  );
}

Other1.propTypes = { heading: PropTypes.string, description: PropTypes.string, primaryBtn: PropTypes.any, sections: PropTypes.array };
