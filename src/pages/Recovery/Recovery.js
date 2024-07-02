import React, { useEffect, useState } from 'react';
import '../Homepage/style.css';
import { recovery_bg, ice_bath, normatec, sport_massage } from '../../assets/img';
import { Box, div, useMediaQuery } from '@mui/material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getRecovery, url_image } from '../../service/api';
import Fade from 'react-reveal/Fade';

export default function Recovery() {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')

  useEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant"})
  }, [])

  const [recoveryData, setRecoveryData] = useState({});

  useEffect(() => {
    getData()
  }, [])
  
  const getData = async(e) => {
    const res = await getRecovery();
    setRecoveryData(res.data?.data);
    // console.log(res.data.data, "res get Recovery");
  }

  
  
  return (
    <Box className='content fuel'>
      <Header />
      <Box sx={{ backgroundImage: `url(${url_image(recoveryData.r1_bg)})` }} className='d-flex justify-content-center align-items-center header-image'>
        <Fade right cascade>
          <Box><p className='c-ff  Oswald-700 s-96'>{recoveryData.r1_title}</p></Box>
        </Fade>
      </Box>
      <Box className='bg-content'>
        <div className='container-content text-center-sm-md content'>
          <Box>
            <Fade delay={150}>
              <Box className='text-center mb-30'>
                <p className='Oswald-700 s-6495'>{recoveryData.r2_title}</p>
              </Box>
            </Fade>
            <Fade delay={250}>
              <Box> 
                <p className='Din-400 text-center s-2030' dangerouslySetInnerHTML={{__html: recoveryData.r2_text}}></p>
                {/* <p  className='Din-400 text-center s-2030'>{recoveryData.r2_text}</p> */}
              </Box>
            </Fade>
          </Box>
          {recoveryData?.items_row3?.map((item, i) => {
            return(
            <Box key={item.title}>
              <Box className='py-text-content-recovery'/>
              <Box className='row'>
                <Box className={`col-lg-6 col-md-12 col-12 d-flex align-items-center ${mediumDeviceSize ? 'justify-content-center pb-4' : ''}`}>
                  <img loading="lazy"  src={url_image(item.image)} alt='' className='item-img' />
                </Box>
                <Box className='col-lg-6 col-md-12 col-12 d-flex flex-column justify-content-center' sx={{ gap: 2 }}>
                <p className='Din-700 s-3639'>{item.title}</p>
                  <Box>
                  <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </Box>
                </Box>
              </Box>
            </Box>
          )})}
        </div>
      </Box>
      <Box className='bg-content-2'>
        <div className='container-content text-center-sm-md content'>
          <Box>
            <Fade delay={250}>
              <div className='d-block text-center'>
                <p className='Oswald-700 s-6495 mb-30'>{recoveryData.r4_title}</p>
                <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: recoveryData.r4_text}}></p>
                {/* <p  className='Din-400 s-2030'>{recoveryData.r4_text}</p> */}
              </div>
            </Fade>
          </Box>
          {recoveryData?.items_row5?.map((item, i) => 
          <Box>
            <Box className='py-text-content-recovery'>
            </Box>
            {mediumDeviceSize ?
              <Box className='row'>
                <Box className={`col-12 d-flex align-items-center justify-content-center pb-4`}>
                  <img loading="lazy"  src={url_image(item.image)} alt='' className='item-img' />
                </Box>
                <Box className='col-12 d-flex flex-column justify-content-center' sx={{ gap: 2 }}>
                <p className='Din-700 s-3639'>{item.title}</p>
                  <Box>
                    {/* <p  className='Din-400 s-2030'>{item.text}</p> */}
                    <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </Box>
                </Box>
              </Box>
              :
              <Box className='row d-flex justify-content-between'>
                <Box className='col-md-6 d-flex flex-column justify-content-center' sx={{ gap: 2 }}>
                <p className='Din-700 s-3639'>{item.title}</p>
                  <Box>
                  <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: item.text}}></p>
                    {/* <p   className='Din-400 s-2030'>{item.text}</p> */}
                    </Box>
                </Box>
                  <img loading="lazy"  src={url_image(item.image)} alt='' className='item-img' />
              </Box>}
          </Box>
          )}
        </div>
      </Box>
      <Footer />
    </Box>
  )
}