import React, { useEffect, useState } from 'react'
import './assets/personal-trainer.css';
import '../Homepage/style.css';
import { pt_bg, pt_sarah, pt_winny, pt_andrik, pt_andre } from '../../assets/img';
import { Box, Container, Pagination, Stack,useMediaQuery } from '@mui/material'
import Header from '../../components/Header';
import Footer from '../../components/Footer'
import PTModal from './components/PTModal'
import { getPersonalTrainer, url_image } from '../../service/api';
import Fade from 'react-reveal/Fade';

function PersonalTrainerData(props) {
  const { data, smallDeviceSize } = props;
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <Box className='d-flex justify-content-center col-lg-3 col-md-3 col-6 py-4'>
      <Box onClick={() => { setModalOpen(true) }} className='d-flex align-items-end bg-image pointer profile-pt-img-sz position-relative'
        sx={{ backgroundColor: data.image ? '' : '#D9D9D9', borderRadius: '5px', backgroundImage: `url(${url_image(data.image)})` }}>
        <p fontSize={smallDeviceSize ? '14px' : '28px'}
          className='ribbon text-black py-2 px-4 mb-2 hover-text Din-700 ch'
          sx={{ borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderBottomLeftRadius: '5px' }}>
          {data.name}
        </p>
      </Box>
      <PTModal onClose={() => setModalOpen(false)} open={modalOpen} detailPT={data} />
    </Box>
  )
}

export default function PersonalTrainer() {
  const xSmallDevice = useMediaQuery('(max-width: 575.98px)')
  const smallDeviceSize = useMediaQuery('(max-width: 767.98px)')
  const mediumDeviceSize = useMediaQuery('(max-width: 991.98px)')
  const largeDeviceSize = useMediaQuery('(max-width: 1199.98px)')
  const xLargeDeviceSize = useMediaQuery('(min-width: 1199.99px)')

  useEffect(() => {
    window.scrollTo({ top:0, left:0, behavior: "instant"})
  }, [])

  const [trainerData, setTrainerData] = useState({});
  useEffect(() => {
    getData()
    setLimit()
  }, [])
  
  const getData = async(e) => {
    const res = await getPersonalTrainer();
    setTrainerData(res.data?.data);
  }


  

  // Pagination for desktop
  const [page, setPage] = useState(1);
  const trainersPerPage = 8;
  function handleChange(event, value) {
    setPage(value);
  };
  const startIndex = (page - 1) * trainersPerPage;
  const endIndex = page * trainersPerPage;
  const currentTrainers = trainerData?.items_row2?.slice(startIndex, endIndex);
  
  // Load more on mobile
  const [visibleTrainers, setVisibleTrainers] = useState(8);
  const onLoadMoreClick = () => {
    setVisibleTrainers((prevVisibleTrainers) => prevVisibleTrainers + 4);
  };

  const width = parseInt(window.innerWidth)

  const setLimit = (e)=>{
    
    if (width <= 600){
      setVisibleTrainers(6)
    }else{
      setVisibleTrainers(8)
    }
  }

  return (
    <Box className='bg-content home d-flex flex-column fuel'>
      <Header />
      <div style={{ backgroundImage: `url(${url_image(trainerData.r1_bg)})` }} className='d-flex justify-content-center align-items-center header-image'>
        <Fade right cascade>
          {trainerData.r1_title !== undefined &&
          <Box><p className='s-96 Oswald-700 text-center' >{trainerData.r1_title.split(" ")[0]} <br/> {trainerData.r1_title.split(" ")[1]}
          </p></Box>}
        </Fade>
      </div>
      <div className='container-content content'>
        <Fade delay={150}>
          <Box className='text-center pb-text-content'>
            <p className='s-2030 Din-400'>{trainerData.r2_text}</p>
          </Box>
        </Fade>
        {smallDeviceSize ? <>
          <Box sx={{ pb: 2 }}>
            <Box className='row detail-pt'>
              {trainerData?.items_row2?.slice(0, visibleTrainers).map((data, i) => {
                // if (i<(6)){
                return (
                  <PersonalTrainerData data={data} smallDeviceSize={smallDeviceSize} />
                )})}
            </Box>
          </Box>
          <Box className='d-flex justify-content-center'>
            {visibleTrainers < trainerData?.items_row2?.length && (
              <Box onClick={onLoadMoreClick}><p fontSize={'14px'} className='pointer Din-400' sx={{ textDecoration: 'underline' }}>Load More</p></Box>
            )} 
          </Box>
        </>
        :
        <>
          <Box sx={{ pb: 2 }}>
            <Box className='row'>
              {currentTrainers?.map((data, i) => {
                return (
                  <PersonalTrainerData data={data} smallDeviceSize={smallDeviceSize} />
                )})}
            </Box>
          </Box>
          <Box className='d-flex justify-content-center'>
            {trainerData?.items_row2?.length > 8 &&
              <Stack spacing={2}>
                <Pagination
                  count={Math.ceil(trainerData?.items_row2?.length / trainersPerPage)}
                  page={page}
                  onChange={handleChange}
                  siblingCount={0}
                  shape="rounded"
                  size={`${smallDeviceSize ? 'medium' : 'large'}`}
                  sx={{
                    '& .Mui-selected': {
                      color: '#DAFF3C !important',
                      '&:hover': {
                        backgroundColor: '#DAFF3C !important',
                        color: '#000000 !important'
                      },
                    },
                    '& .MuiPaginationItem-root': {
                      color: 'white',
                    },
                  }}
                />
              </Stack>}
          </Box>
        </>}
      </div>
      <Footer />
    </Box>
  )
}