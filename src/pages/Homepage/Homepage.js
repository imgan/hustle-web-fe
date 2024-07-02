import React, {useEffect, useState} from 'react'
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import playstore from './assets/googleplay.png'
import appstore from './assets/appstore.png'
import icon from './assets/icon.png'
import Fade from 'react-reveal/Fade';
import { getHomepage, url_image, getInstagramPost } from '../../service/api'
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { Box } from '@mui/material';
import Logo from "../../assets/img/Logo.png"
import { osName } from 'react-device-detect';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export  function Homepage() {
  const navigate = useNavigate()
  const [play_video, set_play_video] = useState(false)
  const [data,set_data] = useState("")
  const [data_instagram, set_data_instagram] = useState([])
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderIndexTraining, setSliderIndexTraining] = useState(0);

  useEffect(()=>{
  getData()
  // getDataInstagram()
  
  window.scrollTo({ top:0, left:0, behavior: "instant"})
  window.addEventListener('scroll', scrollPosition);
    return () => {
      window.removeEventListener('scroll', scrollPosition);
    };
  },[])
  
  const getData= async(e)=>{
    const res = await getHomepage()
    set_data(res.data?.data)
  }

  const getDataInstagram= async(e)=>{
    const access_token = "EAAJZBrlQufoQBOzlO0s4TZA2IjZAJdqZAHnZCLC5LhfEUrsbvMZBdbFw7J8PuiFuxqXyK2A53RIeYfDecGKh1HuibYkex1vVQAsDO8n7eSin2qesQQ73V3FhW5dBoasIQwoP6zBryqHokDZCwvndIN7rYVXXGZBvTbzevXuJN4LPODwJ6UF3rweHM4Rm1QZDZD"
    const res = await getInstagramPost(6, access_token)
    set_data_instagram(res.data?.data)
  }
  
  const settings = {
    dots: true,
    autoplay:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };


  const settings_follow_us = {
    autoplay:false,
    infinite: false,
    speed: 500,
    arrow:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrow disabled={sliderIndex === 0} />,
    nextArrow: <SampleNextArrow disabled={sliderIndex === data_instagram?.length - 4} />,
  };
 

  const settings_training = {
    dots: true,
    autoplay:false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SamplePrevArrowTraining disabled={sliderIndexTraining === 0} />,
    nextArrow: <SampleNextArrowTraining disabled={sliderIndexTraining === data.items_row3?.length - 4} />,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          nextArrow: <SampleNextArrowTraining disabled={sliderIndexTraining === data.items_row3?.length - 3} />,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          nextArrow: <SampleNextArrowTraining disabled={sliderIndexTraining === data.items_row3?.length - 2} />,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          nextArrow: <SampleNextArrowTraining disabled={sliderIndexTraining === data.items_row3?.length - 1} />,
          centerMode:true,
        },
      },
    ]
  };

  const handleVideo = (e)=>{
    if (e===false){
      document.getElementById('video').pause()
    }else{
      document.getElementById('video').play()
    }
    set_play_video(e)
  }

  const width =parseInt(window.innerWidth)

  function SamplePrevArrow(props) {
    const { onClick, disabled } = props;
    return (
      <Box className=' rg-46' sx={{ position: 'absolute', right: '150px', zIndex: '3', top: 'calc(100% + 50px)', translateY: '-50%', display:`${width>768?"flex":"none"}` }}>
        <Box className='pointer bg-arrow-btn d-flex align-items-center  ' onClick={onClick}>
          <ArrowBackIosNew style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
        </Box>
      </Box>
    );
  }
  
  function SampleNextArrow(props) {
    const { onClick, disabled } = props;
    return (
      <Box className=' rg-46' sx={{ position: 'absolute', right: '70px', zIndex: '3', top: 'calc(100% + 50px)', translateY: '-50%', display:`${width>768?"flex":"none"}` }}>
        <Box className='pointer bg-arrow-btn d-flex align-items-center ' onClick={onClick}>
          <ArrowForwardIos style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
        </Box>
      </Box>
    );
  }

  function SamplePrevArrowTraining(props) {
    const { onClick, disabled } = props;
    return (
      <Box className='ms-2' sx={{ position: 'absolute', left: '0px', zIndex: '3', top: '50%', translateY: '-50%' }}>
        <Box className='pointer bg-arrow-btn d-flex align-items-center ms-3' onClick={onClick}>
          <ArrowBackIosNew style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
        </Box>
      </Box>
    );
  }
  
  function SampleNextArrowTraining(props) {
    const { onClick, disabled } = props;
    return (
      <Box className='me-2' sx={{ position: 'absolute', right: '0px', zIndex: '3', top: '50%', translateY: '-50%' }}>
        <Box className='pointer bg-arrow-btn d-flex align-items-center me-3' onClick={onClick}>
          <ArrowForwardIos style={{ color: disabled ? '#6D6D6D' : '#DAFF3C' }} fontSize={'small'} />
        </Box>
      </Box>
    );
  }

  const handleScrollbar =(id)=>{
    const list_element = ["element1", "element2", "element3", "element4", "element5"]
    var elements = document.getElementsByClassName(`${id}`); // get all elements
    for(var i = 0; i < elements.length; i++){
      elements[i].style.backgroundColor = "#DAFF01";
      elements[i].style.opacity = "1";
    }
    list_element.map(item=>{
      if (item !== id){
        var element = document.getElementsByClassName(`${item}`); 
        for(var i = 0; i < element.length; i++){
          element[i].style.backgroundColor = "#a5a5a5";
          element[i].style.opacity = ".5";
        }
      }
    })
  }

  const scrollTo=(id)=>{
    document.getElementById(`${id}`).scrollIntoView();
    handleScrollbar(id)
  }

  const scrollPosition = (e)=>{
    if (document.getElementById('element1') !== null){
      const el1 = document.getElementById('element1').getBoundingClientRect().top
      const el2 = document.getElementById('element2').getBoundingClientRect().top
      const el3 = document.getElementById('element3').getBoundingClientRect().top
      const el4 = document.getElementById('element4').getBoundingClientRect().top
      const el5 = document.getElementById('element5').getBoundingClientRect().top

      if (el1 > -796 && el1 < 0){
        handleScrollbar("element1")
      }else if (el2 > -858 && el2 < 71){
        handleScrollbar("element2")
      }else if (el3 > -878 && el3 < 91){
        handleScrollbar("element3")
      }else if (el4 > -400 && el4 < 33){
        handleScrollbar("element4")
      }else if (el5 > -860 && el5 < 33){
        handleScrollbar("element5")
      }else{
        console.log("");
      }

      // else if (el4 > -717 && el4 < 33){
    }
  }
  console.log(data,"data meta tag",data.items_row6);

  if (data !== ""){
  return (
    <>
    <div className='col-12 home d-flex flex-column' onScroll={scrollPosition()}>
      <Header/>
      <div className='scroll-menu'>
        <div className='item trans element1' onClick={()=>scrollTo('element1')} />
        <div className='item trans element2' onClick={()=>scrollTo('element2')}/>
        <div className='item trans element3' onClick={()=>scrollTo('element3')}/>
        <div className='item trans element4' onClick={()=>scrollTo('element4')}/>
        <div className='item trans element5' onClick={()=>scrollTo('element5')}/>
      </div>
      <div className='banner col-12 d-flex flex-column ov' style={{backgroundImage:`url(${url_image(data.r1_bg)}`}} id='element1'>
        <div className='d-flex col-12 justify-content-center flex-column content trans' >
          <img src={Logo} alt='' className='logo-hustle' />
          <Fade right cascade>
          <h1 className='c-da s-64 Oswald-700'>{data.r1_title} </h1>
          </Fade>
          <Fade delay={250}>
          <p className='c-ff Din-400 s-2430' dangerouslySetInnerHTML={{__html: data.r1_text}}></p>
          {/* <p className='c-ff Din-400 s-2430'>{data.r1_text} </p> */}
          </Fade>
          <a href={`${(osName==="Android" || osName==="Windows")? data.r5_link_google:data.r5_link_apple}`} className='a-link'>
          <button className='bt-green s-24 Din-700'>START YOUR JOURNEY HERE</button>
          </a>
        </div>
      </div>
      <div className='col-12 d-flex justify-content-center scoop' >
        <h1 className='c-ff Oswald-700 s-48 up' id='element2'>{data.r2_toptitle} </h1>
      </div>
      <div className='col-12 scoop-slides d-flex '>
      <Slider {...settings} className='col-12 '>
        {data.items_row2.map((item)=>(
          <div key={item} className='col-12'>
            <div  className='col-12 d-flex'>
            <a href={`${item.link}`} target='_blank' className='col-12 d-flex '>
              <div className='filter col-12 d-flex contain relative justify-content-end' style={{backgroundImage:`url(${url_image(item.image)})`,backgroundPosition:"center"}}>
                <div className='d-none flex-column text-slides justify-content-center text-center '>
                    <h1 className='c-ff s-128 Oswald-700'>{item.title} </h1>
                    <a href={`${item.link}`} target='_blank'>
                    <button className='s-2830 c-ff Din-700'>{item.text} </button>
                    </a>
                  </div>
              </div>
              </a>
            </div>
          </div>
        ))}
        </Slider>
      </div>
      <div className='bx-training d-flex flex-column justify-content-center text-center' id='element3' >
          <Fade delay={150}>
          <h2 className='Oswald-700 c-ff m-0 s-48 up'>{data.r3_toptitle} </h2>
          </Fade>
          <Fade delay={250}>
          {/* <p className='c-ff s-2022 desc Din-400'>{data.r3_text} </p> */}
          <p className='c-ff s-2022 desc Din-400' dangerouslySetInnerHTML={{__html: data.r3_text}}></p>
          </Fade>
          <div className='d-flex flex-md-row flex-sm-column col-12 justify-content-center'>
          <Slider {...settings_training} afterChange={setSliderIndexTraining} className='col-12 '>
            {data.items_row3.map((x)=>(
              <div key={x.title} className='d-flex' onClick={(e)=>window.location.href=x.link}>
                <div  className='training-card d-flex flex-column pointer trans' style={{backgroundImage:`url(${url_image(x.image)})`}}>
                    <p className='c-ff Oswald-700 s-48 trans'>{x.title} </p>
                </div>
            </div>))}
            </Slider>
          </div>
      </div>
      <div className='col-12 bx-follow d-flex flex-column justify-content-center text-center'>
        <h2 className='Oswald-700 c-ff s-4871 m-0 up -f' id='element4'>{data.r4_toptitle}</h2>
        <p className='Din-400 c-ff s-24 mb-100'>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_5228_10054)">
          <path d="M6.96 0H17.04C20.88 0 24 3.12 24 6.96V17.04C24 18.8859 23.2667 20.6562 21.9615 21.9615C20.6562 23.2667 18.8859 24 17.04 24H6.96C3.12 24 0 20.88 0 17.04V6.96C0 5.11409 0.733284 3.34379 2.03854 2.03854C3.34379 0.733284 5.11409 0 6.96 0ZM6.72 2.4C5.57427 2.4 4.47546 2.85514 3.6653 3.6653C2.85514 4.47546 2.4 5.57427 2.4 6.72V17.28C2.4 19.668 4.332 21.6 6.72 21.6H17.28C18.4257 21.6 19.5245 21.1449 20.3347 20.3347C21.1449 19.5245 21.6 18.4257 21.6 17.28V6.72C21.6 4.332 19.668 2.4 17.28 2.4H6.72ZM18.3 4.2C18.6978 4.2 19.0794 4.35804 19.3607 4.63934C19.642 4.92064 19.8 5.30218 19.8 5.7C19.8 6.09783 19.642 6.47936 19.3607 6.76066C19.0794 7.04197 18.6978 7.2 18.3 7.2C17.9022 7.2 17.5206 7.04197 17.2393 6.76066C16.958 6.47936 16.8 6.09783 16.8 5.7C16.8 5.30218 16.958 4.92064 17.2393 4.63934C17.5206 4.35804 17.9022 4.2 18.3 4.2ZM12 6C13.5913 6 15.1174 6.63214 16.2426 7.75736C17.3679 8.88258 18 10.4087 18 12C18 13.5913 17.3679 15.1174 16.2426 16.2426C15.1174 17.3679 13.5913 18 12 18C10.4087 18 8.88258 17.3679 7.75736 16.2426C6.63214 15.1174 6 13.5913 6 12C6 10.4087 6.63214 8.88258 7.75736 7.75736C8.88258 6.63214 10.4087 6 12 6ZM12 8.4C11.0452 8.4 10.1295 8.77928 9.45442 9.45442C8.77928 10.1295 8.4 11.0452 8.4 12C8.4 12.9548 8.77928 13.8705 9.45442 14.5456C10.1295 15.2207 11.0452 15.6 12 15.6C12.9548 15.6 13.8705 15.2207 14.5456 14.5456C15.2207 13.8705 15.6 12.9548 15.6 12C15.6 11.0452 15.2207 10.1295 14.5456 9.45442C13.8705 8.77928 12.9548 8.4 12 8.4Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_5228_10054">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          &nbsp; {data.r4_text} </p>
        <div className='col-12 d-none justify-content-center'>
        <Slider {...settings_follow_us} className='col-12 ' afterChange={setSliderIndex} >
          {data_instagram.map((x)=>(
            <a href="https://www.instagram.com/arshee4114/" target='_blank' key={x.caption} className='d-flex'>
            <div  className='hov-card d-flex flex-column trans' style={{backgroundImage:`url(${x.media_url})`}}>
              <div className='d-flex h-60 trans'>
                <img loading="lazy"  src={icon} alt='' className='icon trans' />
                <p className='Din-400 c-ff s-2426'>Hustlehouse </p>
                </div>
                {(x.caption !== undefined && x.caption!=="") &&
                <p className='Din-400 c-ff mt-30 s-1617 desc d-sm-none d-md-block d-lg-block trans'>{x.caption.length > 40? x.caption.slice(0,40)+"...":x.caption} </p>}
            </div>
            </a>
            ))}
          </Slider>
        </div>
      </div>
      <div className='bg-18 col-12 justify-content-center d-flex flex-sm-column flex-lg-row flex-md-column'>
        <div className='content-app'>
        <Fade delay={150}>
          <h1 className='Oswald-700 s-8088 c-da m-md-0'>{data.r5_toptitle} </h1>
          </Fade>
          <Fade delay={250}>
          {/* <p className='Din-400 c-ff s-2022'>{data.r5_text} </p> */}
          <p className='Din-400 c-ff s-2022' dangerouslySetInnerHTML={{__html: data.r5_text}}></p>
          </Fade>
          <div className='d-md-flex d-sm-none bt_'>
            <a href={`${data.r5_link_google}`}>
              <img loading="lazy"  src={playstore} alt='' className='download-ic mr-20'  /> </a>
            <a href={`${data.r5_link_apple}`}>
              <img loading="lazy"  src={appstore} alt='' className='download-ic' /> 
            </a>
          </div>
        </div>
        <div className='d-flex justify-content-center'>
          <div className='d-md-none flex-column mob d-sm-flex '>
              <a href={`${data.r5_link_google}`}>
                <img loading="lazy"  src={playstore} alt='' className='download-ic'  /> </a>
              <a href={`${data.r5_link_apple}`}>
                <img loading="lazy"  src={appstore} alt='' className='download-ic' /> 
              </a>
          </div>
          <img loading="lazy"  src={url_image(data.r5_image)} alt='' className='apps' id='element5' />
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  )
  }
}
