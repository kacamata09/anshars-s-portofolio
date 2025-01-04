'use client';
import PropTypes from 'prop-types';

// @mui
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

// @project
import ButtonAnimationWrapper from '@/components/ButtonAnimationWrapper';
import ContainerWrapper from '@/components/ContainerWrapper';
import Logo from '@/components/logo';
import { MenuPopper, NavMenu, NavMenuDrawer, NavPrimaryButton, NavSecondaryButton } from '@/components/navbar';
import SvgIcon from '@/components/SvgIcon';
import { useEffect, useState } from 'react';

/***************************  NAVBAR - CONTENT 10  ***************************/

export default function NavbarContent10({ navItems, primaryBtn, secondaryBtn }) {
  const theme = useTheme();

  const downMD = useMediaQuery(theme.breakpoints.down('md'));
  const downSM = useMediaQuery(theme.breakpoints.down('sm'));

    const [isScrolled, setIsScrolled] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  

  return (
    <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', width: 1 }}>
      <Logo />
      {!downMD && navItems && (
        <Box sx={{  borderRadius: 10, backgroundColor: isScrolled ? 'rgba(155, 5, 5, 0.3)' : 'rgba(0, 0, 0, 0)',
          transition: 'background-color 0.3s ease', }}>
          <NavMenu {...{ navItems }} />
        </Box>
      )}
      <Stack direction="row" sx={{ gap: { xs: 1, md: 1.5 } }}>
        {!downSM && (
          <>
            <NavSecondaryButton {...secondaryBtn} />
            <ButtonAnimationWrapper>
              <NavPrimaryButton {...primaryBtn} />
            </ButtonAnimationWrapper>
          </>
        )}
        {downMD && (
          <Box sx={{ flexGrow: 1 }}>
            <MenuPopper
              offset={downSM ? 12 : 16}
              toggleProps={{
                children: <SvgIcon name="tabler-menu-2" color="white" />,
                color: 'inherit',
                sx: { minWidth: 40, width: 40, height: 40, p: 0 }
              }}
            >
              <ContainerWrapper>
                {navItems && (
                  <Box bgcolor={"#1c1c1c"}  sx={{ mx: -2 }}>
                    <NavMenuDrawer {...{ navItems }} />
                  </Box>
                )}
                {downSM && (
                  <Stack direction="row" sx={{ justifyContent: 'space-between', gap: 1, px: 5, py: 2.5, mx: -5, bgcolor: '#1c1c1c' }}>
                    <NavSecondaryButton {...secondaryBtn} />
                    <ButtonAnimationWrapper>
                      <NavPrimaryButton {...primaryBtn} />
                    </ButtonAnimationWrapper>
                  </Stack>
                )}
              </ContainerWrapper>
            </MenuPopper>
          </Box>
        )}
      </Stack>
    </Stack>
  );
}

NavbarContent10.propTypes = {
  navItems: PropTypes.any,
  primaryBtn: PropTypes.any,
  secondaryBtn: PropTypes.any,
  customization: PropTypes.any
};
