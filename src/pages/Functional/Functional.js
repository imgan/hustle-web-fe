import React, { useEffect, useRef, useState } from 'react';
import './assets/functional.css';
import '../Homepage/style.css';
import { functional_bg, machine_guns, down_to_earth, united_we_sweat, kiss_my_abs } from '../../assets/img';
import { Box, Container, useMediaQuery } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselFunctional from './components/CarouselFunctional';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import { getFunctional, url_image } from '../../service/api';
import Fade from 'react-reveal/Fade';
import { carouselItems } from '../../components/fc_dummy_data';

function SamplePrevArrow(props) {
  const { onClick, disabled } = props;
  return (
    <Box className='ms-2' sx={{ position: 'absolute', left: '0px', zIndex: '3', top: '50%', translateY: '-50%' }}>
      <Box className='pointer bg-arrow-btn d-flex align-items-center ms-3' onClick={onClick}>
        <ArrowBackIosNew style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
      </Box>
    </Box>
  );
}

function SampleNextArrow(props) {
  const { onClick, disabled } = props;
  return (
    <Box className='me-2' sx={{ position: 'absolute', right: '0px', zIndex: '3', top: '50%', translateY: '-50%' }}>
      <Box className='pointer bg-arrow-btn d-flex align-items-center me-3' onClick={onClick}>
        <ArrowForwardIos style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
      </Box>
    </Box>
  );
}

export default function Functional() {
  // const theme = useTheme();
  // const smallDeviceSize = useMediaQuery(theme.breakpoints.down('md')); // md = 900px
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')

  useEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant"})
  }, [])

  const [functionalData, setFunctionalData] = useState({});
  const [isAtLeft, setIsAtLeft] = useState(true);
  const [isAtRight, setIsAtRight] = useState(false);
  const reactScrollComponentRef = useRef(null);
  const carouselComponentRef = useRef(null);
  const carouselItemsRef = useRef(null);
  const [disabledArrowButton, setDisabledArrowButton] = useState(false);

  useEffect(() => {
    getData();
    setTimeout(() => {
      const disabledArrow = carouselComponentRef?.current?.offsetWidth > carouselItemsRef?.current?.offsetWidth;
      setDisabledArrowButton(disabledArrow);
    }, 1000);
  }, [])
  
  const getData = async(e) => {
    const res = await getFunctional();
    setFunctionalData(res.data?.data);
  }

  function handleNext() {
    if (disabledArrowButton) {
      return;
    }
    const scrollAmount = 450;
    const currentScrollLeft = reactScrollComponentRef.current.scrollLeft;
    const finalScrollX = currentScrollLeft + scrollAmount;
    reactScrollComponentRef.current.scrollTo({
      left: finalScrollX,
      behavior: 'smooth'
    });
    setIsAtLeft(false);
    const scrollX = reactScrollComponentRef.current.parentElement.clientWidth + finalScrollX;
    const limitScrollX = reactScrollComponentRef.current.scrollWidth;
    setIsAtRight(scrollX >= limitScrollX);
  }

  function handleBack() {
    if (disabledArrowButton) {
      return;
    }
    const scrollAmount = 450;
    const currentScrollLeft = reactScrollComponentRef.current.scrollLeft;
    reactScrollComponentRef.current.scrollTo({
      left: currentScrollLeft - scrollAmount,
      behavior: 'smooth'
    });
    setIsAtRight(false);
    if (currentScrollLeft <= 450) {
      setIsAtLeft(true);
    }
  }

  const [sliderIndex, setSliderIndex] = useState(0);
  const settings_training = {
    dots: false,
    autoplay: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    prevArrow: <SamplePrevArrow disabled={sliderIndex === 0} />,
    nextArrow: <SampleNextArrow disabled={sliderIndex === functionalData?.items_row3?.length - 1} />,
  };

  return (
    <Box className='bg-content home d-flex flex-column'>
      <Header />
      <Box sx={{ backgroundImage: `url(${url_image(functionalData.r1_bg)})` }} className='d-flex justify-content-center align-items-center header-image'>
        <Fade right cascade>
          <Box><p className='s-96 Oswald-700'>{functionalData.r1_title}</p></Box>
        </Fade>
      </Box>
      <Container className='container-content'>
        <Fade delay={150}>
          <Box className='text-center pb-text-content'>
            <p className='Din-700 s-4050 c-ff'>{functionalData.r2_text_top}</p>
          </Box>
        </Fade>
        <Fade delay={250}>
          <Box className='text-center'
            sx={{ '@media (min-width: 768px)': { px: 10 } }}>
            {/* <p className='Din-400 s-2030'>{functionalData.r2_text_bottom}</p> */}
            <p className='Din-400 s-2030' dangerouslySetInnerHTML={{__html: functionalData.r2_text_bottom}}></p>
          </Box>
        </Fade>
      </Container>
      <Box>
        <Box className='carousel-fc-header-position' sx={{ pb: 5 }}>
          <Box className={`d-flex align-items-center ${smallDeviceSize ? 'justify-content-center' : ''}`}>
            <p className='s-6495 Oswald-700'>{functionalData.r3_title}</p>
          </Box>
          {!smallDeviceSize && <Box className='d-flex justify-content-center align-items-center'>
            <Box className='pointer bg-arrow-btn me-3' onClick={handleBack}>
              <ArrowBackIosNew style={{ color: isAtLeft || disabledArrowButton ? '#6D6D6D' : '#DAFF3C' }} fontSize={`${smallDeviceSize ? 'small' : 'medium'}`} />
            </Box>
            <Box className='pointer bg-arrow-btn' onClick={handleNext}>
              <ArrowForwardIos style={{ color: isAtRight || disabledArrowButton ? '#6D6D6D' : '#DAFF3C' }} fontSize={`${smallDeviceSize ? 'small' : 'medium'}`} />
            </Box>
          </Box>}
        </Box>
      </Box>
      <Box className='carousel-fc-spacing'>
        {smallDeviceSize ?
          <Box className='d-flex flex-md-row flex-sm-column col-12 justify-content-center'>
            <Slider afterChange={setSliderIndex} {...settings_training} className='col-12'>
              {functionalData?.items_row3?.map((item) => (
                <Box className='d-flex justify-content-center'>
                  <Box key={item.title} className='carousel-fc-img-sz d-flex flex-column justify-content-end pointer trans' sx={{ backgroundColor: item.image ? '' : '#D9D9D9', backgroundImage: `url(${url_image(item.image)})` }}>
                    <p style={{ transform: 'translateY(20px)', opacity: '0', transition: '0.4s all' }}  className='Oswald-700 ms-3 mb-2 carousel-fc-name s-4871'>{item.title}</p>
                    <Box className='carousel-fc-details carousel-fc-text-desc' sx={{ opacity: '0', transition: '0.4s all', transform: 'translateY(20px)' }}>
                      {/* <p fontSize={largeDeviceSize ? '16px' : '28px'} className='Din-400'>{item.text}</p> */}
                      <p className='Din-400 s-2830' dangerouslySetInnerHTML={{__html: item.text}}></p>
                    </Box>
                    <p style={{ transition: '0.4s all', position: 'absolute', bottom: '0px' }}className='Oswald-700 ms-3 s-4871 mb-3 carousel-fc-name-static'>{item.title}</p>
                  </Box>
                </Box>))}
            </Slider>
          </Box>
          :
        <CarouselFunctional
          functionalData={functionalData}
          reactScrollComponentRef={reactScrollComponentRef}
          carouselComponentRef={carouselComponentRef}
          carouselItemsRef={carouselItemsRef}
          carouselItems={carouselItems}
          handleNext={handleNext}
          handleBack={handleBack}
        />}
      </Box>
      <Footer />
    </Box>
  )
}