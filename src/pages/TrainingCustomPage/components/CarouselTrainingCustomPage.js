import * as React from 'react';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import { url_image } from '../../../service/api';

function CarouselTrainingCustomPage(props) {
  const { item, smallDeviceSize, largeDeviceSize } = props;

  return (
    <Box className='d-flex flex-column justify-content-end align-items-start fc-carousel'
      sx={{ backgroundColor: item.image ? '' : '#D9D9D9', backgroundImage: `url(${url_image(item.image)})` }}>
      <Box position='relative' sx={{ pl: '1rem' }} className="trans fc-box">
        <p className='Oswald-700 s-4871 carousel-fc-name fc-hide trans'>{item.title}</p>
        <Box className='carousel-fc-details  ' sx={{ opacity: '0', transition: '0.4s all' }}>
          <p className='Din-400 s-2426 fc-hide trans'>{item.text}</p>
        </Box>
        <p className='Oswald-700 s-4871 carousel-fc-name-static trans'>{item.title}</p>
      </Box>
    </Box>
  )
}

export default function CarouselTrainingCustomPageComponent(props) {
  const { state, carouselItems, reactScrollComponentRef, carouselComponentRef, carouselItemsRef, handleNext, handleBack } = props;

  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')
  const maxSteps = carouselItems.length;

  return (
    <Box ref={carouselComponentRef} sx={{ position: 'relative' }}>
      <Box ref={reactScrollComponentRef} className='d-flex align-items-center w-100 ov' sx={{ overflowX: 'scroll' }}>
        <div ref={carouselItemsRef} className='d-flex align-items-center'>
          <div className='d-flex flex-row'>
            {state?.items_row3?.map((item) => {
              return (
                <CarouselTrainingCustomPage item={item} smallDeviceSize={smallDeviceSize} largeDeviceSize={largeDeviceSize} />
              )
            })}
          </div>
        </div>

        {smallDeviceSize && <>
          <Box className='d-flex justify-content-center align-items-center me-2' sx={{ position: 'absolute', right: '0px', zIndex: '3' }}>
            <Box className='pointer bg-arrow-btn' onClick={handleNext}>
              <ArrowForwardIos style={{ color: '#DAFF3C' }} fontSize={'small'} />
            </Box>
          </Box>
          <Box className='d-flex justify-content-center align-items-center ms-2' sx={{ position: 'absolute', left: '0px', zIndex: '3' }}>
            <Box className='pointer bg-arrow-btn' onClick={handleBack}>
              <ArrowBackIosNew style={{ color: '#6D6D6D' }} fontSize={'small'} />
            </Box>
          </Box>
        </>}
      </Box>
    </Box>
  );
}