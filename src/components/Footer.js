import { Facebook, Instagram, LocationOnOutlined, TiktokIcon } from '@mui/icons-material';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import { hustle_logo } from '../assets/img';
import TikTok from "../assets/img/TikTok.svg"
import { useNavigate } from 'react-router-dom';
import '../pages/Homepage/style.css';


export default function Footer() {
  // const theme = useTheme();
  // const smallDeviceSize = useMediaQuery(theme.breakpoints.down('md'));

  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')

  const navigate = useNavigate();

  const moveTo = (e) => {
    navigate(e)
  }

  const year = new Date().getFullYear()

  return (
    <Box className={`footer-container mt-auto`}>
      <div className='col-12 d-flex flex-lg-row flex-sm-column justify-content-lg-between justify-content-sm-center align-items-sm-center'>
        <img loading="lazy" onClick={(e)=>moveTo('/')} src={hustle_logo} alt='' width={smallDeviceSize ? '112px' : '252px'}   height={smallDeviceSize ? '16px' : '35px'} className='pointer logo'/>
        <div className='d-flex flex-sm-column menus align-items-sm-center flex-lg-row'>
          <p className='c-ff Din-400 s-24 text-up pointer' onClick={(e)=>moveTo('/FAQ')}>FAQ</p>
          <p className='c-ff Din-400 s-24 text-up pointer' onClick={(e)=>moveTo('/contact-us')}>Contact</p>
          <p className='c-ff Din-400 s-24 text-up pointer' onClick={(e) => moveTo('/terms-of-service')}>Terms of Service</p>
          <p className='c-ff Din-400 s-24 text-up pointer' onClick={(e) => moveTo('/privacy-policy')}>Privacy Policy</p>
        </div>
        <Box className='d-flex' display={smallDeviceSize ? 'flex' : 'block'} mt={mediumDeviceSize ? 4 : 0}>
          <a href="https://www.facebook.com/hustlehouse.id" target="_blank">
          <Facebook className='social fb' style={{color:"white"}} />
          </a>
          <a href="https://www.tiktok.com/@hustlehouse.id" target="_blank">
          <img className='tiktok' src={TikTok} alt=''/>
          </a>
          <a href="https://www.instagram.com/hustlehouse.id/" target="_blank">
          <Instagram  className='social' style={{color:"white"}}/>
          </a>
        </Box>
      </div>
      <Box className='company'>
        <p className='c-c1 Din-400 s-1617 text-center'>Hustle {year}. All Rights Reserved.</p>
      </Box>
    </Box>
  )
}