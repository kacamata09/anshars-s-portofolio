"use client";

import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import SvgIcon from '@/components/SvgIcon';
import ContainerWrapper from '@/components/ContainerWrapper';  // Impor ContainerWrapper
import { SECTION_COMMON_PY } from '@/utils/constant';

export default function HeroPortfolio({ chip, headLine, captionLine, primaryBtn, secondaryBtn, image }) {
  const theme = useTheme();

  // State untuk mengatur posisi hero dan untuk mengetik animasi
  const [myIntroduct, setMyIntroduct] = useState(headLine)
  const [changeHeadline, setChangeHeadline] = useState(false)
  const [inView, setInView] = useState(true);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);

  const typingSpeed = 230;  // Kecepatan mengetik (ms per karakter)
  const deletingSpeed = 120;  // Kecepatan menghapus (ms per karakter)
  const delayBeforeDeleting = 2700;  // Waktu tunggu setelah selesai mengetik sebelum mulai menghapus

  // Function untuk efek mengetik dan menghapus
 useEffect(() => {
    // Interval untuk kursor berkedip
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500); // Kecepatan berkedip (ms)

    return () => clearInterval(cursorInterval); // Hapus interval saat komponen unmount
  }, []);

  useEffect(() => {
    const typeText = () => {
      setText((prevText) => myIntroduct.slice(0, prevText.length + 1));
    };

    const deleteText = () => {
      setText((prevText) => prevText.slice(0, -1));
    };

    let typingInterval;
    let deletingInterval;

    if (!isDeleting && text !== myIntroduct) {
      typingInterval = setInterval(typeText, typingSpeed);
    } else if (isDeleting && text !== '') {
      deletingInterval = setInterval(deleteText, deletingSpeed);
    } else if (!isDeleting && text === myIntroduct) {
      setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDeleting);
    } else if (isDeleting && text === '') {
      setChangeHeadline(!changeHeadline)
      if (changeHeadline) {
        setMyIntroduct(headLine)
      } else {
        setMyIntroduct("I am Backend Developer.")
      }
      setIsDeleting(false);
    }

    // Cleanup intervals
    return () => {
      clearInterval(typingInterval);
      clearInterval(deletingInterval);
    };
  }, [text, isDeleting, myIntroduct]);

  // Efek untuk memonitor scroll dan mengatur state inView
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroPosition = document.getElementById('hero-section').getBoundingClientRect();

      // Jika scroll ke bawah, hero menghilang ke samping
      if (heroPosition.top < 0) {
        setInView(false);
      } else {
        setInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Box
      id="hero-section"
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Kolom untuk mobile, baris untuk desktop
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh',
        px: { xs: 2, sm: 3 },
        py: { xs: 3, sm: 5 },
        background: 'rgba(0, 0, 0, 0.5)', // Tetap dengan latar belakang semi-transparan
        overflow: 'hidden',
      }}
    >
      <ContainerWrapper sx={{ py: SECTION_COMMON_PY }}>
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, width: '100%' }}>
          {/* Left Side: Text Content */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '50%' }, // Full-width untuk mobile
              textAlign: { xs: 'center', md: 'left' }, // Pusatkan teks pada mobile
              mb: { xs: 3, md: 0 }, // Tambahkan margin bawah pada mobile
            }}
          >
            <Stack spacing={2}>
              {chip && (
                <motion.div
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                  transition={{
                    duration: 1,
                    ease: [0.215, 0.61, 0.355, 1],
                  }}
                >
                  <Chip
                    variant="outlined"
                    color="error"
                    label={
                      typeof chip.label === 'string' ? (
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {chip.label}
                        </Typography>
                      ) : (
                        chip.label
                      )
                    }
                    sx={{ bgcolor: 'transparent', '& .MuiChip-label': { py: 0.5, px: 1.5 } }}
                  />
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <Typography
                  variant="h2" // Gunakan ukuran lebih kecil untuk mobile
                  align="left"
                  sx={{
                    fontWeight: 'bold',
                    fontSize: { xs: '1.8rem', sm: '2.5rem' }, // Ukuran adaptif
                    fontFamily: 'GoodbyeDespair, Arial, sans-serif',
                  }}
                >
                  {text}
                  <span
                    style={{
                      visibility: cursorVisible ? 'visible' : 'hidden',
                      display: 'inline-block',
                      width: '1.8px',
                      height: '0.9em',
                      backgroundColor: 'red',
                      marginLeft: '1px',
                    }}
                  />
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <Typography
                  variant="h6"
                  align="left"
                  sx={{
                    color: 'white',
                    fontSize: { xs: '1rem', sm: '1.25rem' }, // Ukuran adaptif
                    maxWidth: { xs: '100%', md: 450 },
                  }}
                >
                  {captionLine}
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
              >
                <ButtonAnimationWrapper style={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Button
                    color="error"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-sparkles" size={16} stroke={3} color="background.default" />}
                    style={{ marginRight: '9px' }}
                    {...primaryBtn}
                  />
                  <Button
                    color="secondary"
                    variant="contained"
                    startIcon={<SvgIcon name="tabler-rocket" size={16} stroke={3} color="background.default" />}
                    {...secondaryBtn}
                  />
                </ButtonAnimationWrapper>
              </motion.div>
            </Stack>
          </Box>

          {/* Right Side: Image */}
          <Box
            sx={{
              flex: 1,
              maxWidth: { xs: '100%', md: '50%' }, // Full-width pada mobile
              textAlign: 'center',
            }}
          >
            <motion.img
              src={image}
              alt="Hero"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: theme.shape.borderRadius }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 50 }}
              transition={{
                duration: 1,
                ease: [0.215, 0.61, 0.355, 1],
              }}
            />
          </Box>
        </Box>
      </ContainerWrapper>
    </Box>
  );
}

HeroPortfolio.propTypes = {
  chip: PropTypes.object,
  headLine: PropTypes.string.isRequired,
  captionLine: PropTypes.string.isRequired,
  primaryBtn: PropTypes.object.isRequired,
  secondaryBtn: PropTypes.object.isRequired,  // Properti untuk tombol kedua
  image: PropTypes.string.isRequired,
};
