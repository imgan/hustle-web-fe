import React, { useEffect, useRef, useState } from 'react';
import '../Homepage/style.css';
import { cycling_bg, machine_guns, down_to_earth, united_we_sweat, kiss_my_abs } from '../../assets/img';
import { Box, Container, Typography, useMediaQuery } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CarouselCycling from './components/CarouselCycling';
import { useTheme } from '@mui/material/styles';
import Slider from 'react-slick';
import { getCycling, url_image } from '../../service/api';
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

export default function Cycling() {
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

  const [cyclingData, setCyclingData] = useState({});
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
    const res = await getCycling();
    setCyclingData(res.data?.data);
    // console.log(res.data.data, "res get Cycling");
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
    nextArrow: <SampleNextArrow disabled={sliderIndex === cyclingData?.items_row3?.length - 1} />,
  };

  return (
    <Box className='bg-content home d-flex flex-column fuel'>
      <Header />
      <Box sx={{ backgroundImage: `url(${url_image(cyclingData.r1_bg)})` }} className='d-flex justify-content-center align-items-center header-image'>
        <Fade right cascade>
          <Box><p className=' Oswald-700 s-96'>{cyclingData.r1_title}</p></Box>
        </Fade>
      </Box>
      <Container className='container-content'>
        <Fade delay={150}>
          <Box className='text-center pb-text-content'>
            <p className='s-4050  Din-700'>{cyclingData.r2_text_top}</p>
          </Box>
        </Fade>
        <Fade delay={250}>
          <Box className='text-center'
            sx={{ '@media (min-width: 768px)': { px: 10 } }}>
            <p className=' Din-400 s-2030'>{cyclingData.r2_text_bottom}</p>
          </Box>
        </Fade>
      </Container>
      <Box>
        <Box className='carousel-fc-header-position' sx={{ pb: 5 }}>
          <Box className={`d-flex align-items-center ${smallDeviceSize ? 'justify-content-center' : ''}`}>
            <p className=' Oswald-700 s-6495'>{cyclingData.r3_title}</p>
          </Box>
          {!smallDeviceSize && cyclingData?.items_row3?.length > 2 && <Box className='d-flex justify-content-center align-items-center'>
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
              {cyclingData?.items_row3?.map((item) => (
                <Box className='d-flex justify-content-center'>
                  <Box key={item.title} className='carousel-fc-img-sz d-flex flex-column justify-content-end pointer trans' sx={{ backgroundColor: item.image ? '' : '#D9D9D9', backgroundImage: `url(${url_image(item.image)})` }}>
                    <Typography sx={{ transform: 'translateY(20px)', opacity: '0', transition: '0.4s all' }} fontSize={smallDeviceSize ? '20px' : '48px'} className='Oswald-700 ms-3 mb-2 carousel-fc-name'>{item.title}</Typography>
                    <Box className='carousel-fc-details carousel-fc-text-desc' sx={{ opacity: '0', transition: '0.4s all', transform: 'translateY(20px)' }}>
                      <Typography fontSize={largeDeviceSize ? '16px' : '28px'} className='Din-400'>{item.text}</Typography>
                    </Box>
                    <Typography sx={{ transition: '0.4s all', position: 'absolute', bottom: '0px' }} fontSize={smallDeviceSize ? '20px' : '48px'} className='Oswald-700 ms-3 mb-3 carousel-fc-name-static'>{item.title}</Typography>
                  </Box>
                </Box>))}
            </Slider>
          </Box>
          :
          <CarouselCycling
            cyclingData={cyclingData}
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