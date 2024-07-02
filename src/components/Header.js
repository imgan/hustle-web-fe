import React, {useEffect, useState} from 'react'
import Menu from "../pages/Homepage/assets/Menu.png"
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import arrow from "../pages/Homepage/assets/Layer 2.png"
import { useNavigate } from 'react-router-dom';
import close_icon from '../pages/Homepage/assets/close-outline.png';
import ig from "../pages/Homepage/assets/ig.png"
import fb from "../pages/Homepage/assets/fb.png"
import hustle_logo from "../../src/assets/img/hustle_logo.png"
import Logo from "../assets/img/bg-header.png"
import Menu_mobile from "../pages/Homepage/assets/Menu.png"
import { getTrainingCustomMenu } from '../service/api';

export default function Header() {
  const navigate = useNavigate()
  const [open, set_open] = useState(true)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const moveTo = (e)=>{
    navigate(e)
  }

  const [customPages, setCustomPages] = useState([]);
  useEffect(() => {
    getCustomMenu();
  }, [])

  const getCustomMenu = async(e) => {
    const res = await getTrainingCustomMenu();
    setCustomPages(res.data?.data);
  }

  const height = parseInt(window.innerHeight)
  const width = parseInt(window.innerWidth)

  const list = (anchor) => (
    <Box className="drawer-hs"
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation" style={{minHeight:`${width < 769?`${height}px`:"unset"}`,display:`${(open && width <769)?"flex":"inline-table"}`}}
      // onClick={toggleDrawer(anchor, false)}
      // onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* <div className='col-12 d-flex flex-column justify-content-between hg-100'> */}
        <div className='col-12 d-block'>
          <div className='col-12 d-flex justify-content-between'>
            <img loading="lazy"  src={hustle_logo} alt='' className='logo d-sm-flex d-md-none pointer' onClick={(e)=>moveTo('/')} />
            <img loading="lazy"  src={close_icon} alt='' className='close-icon pointer d-sm-none d-md-flex' onClick={toggleDrawer('top', false)}  />
            <img loading="lazy"  src={close_icon} alt='' className='close-icon pointer d-sm-flex d-md-none' onClick={toggleDrawer('right', false)}  />
          </div>
          <div className='c d-flex flex-column menus' style={{backgroundImage:`url(${Logo})`}}>
            <p className='mb-50 pointer' onClick={(e)=>moveTo('/')}>HOME</p>
            <p className='mb-50 pointer' onClick={(e)=>moveTo('/about-us')}>ABOUT US</p>
            <div className={`d-flex flex-column ${open ? 'mb-50' : 'mb-20'}`}>
              <div className='d-flex pointer ' onClick={(e)=>set_open(!open)}>
                <p className='m-0'>TRAINING</p>
                <img loading="lazy"  src={arrow} alt='' className='acc trans' style={{transform:open?"rotate(180deg)":""}} />
              </div>
              <div className='d-flex flex-column sub-menu mt-30 trans' style={{opacity:open?"0":"1", height:open?"0px":"", marginTop:open?"0px":"", visibility:open?"hidden":""}}>
                <span className='c-ff Din-400 pointer s-34 mb-20' onClick={(e)=>moveTo('/training/functional')}>FUNCTIONAL</span>
                <span className='c-ff Din-400 pointer s-34 mb-20' onClick={(e)=>moveTo('/training/personal-trainer')}>PERSONAL TRAINING</span>
                <span className='c-ff Din-400 pointer s-34 mb-20 d-none' onClick={(e)=>moveTo('/training/pilates')}>PILATES</span>
                <span className='c-ff Din-400 pointer s-34 mb-20 d-none' onClick={(e)=>moveTo('/training/cycling')}>CYCLING</span>
                {customPages.map((customPage, index) => 
                  <span className='c-ff Din-400 pointer s-34 mb-20 d-none'
                    key={`custom-page-${index}`}
                    onClick={() => {
                      navigate(`/training/${(customPage.page_title || '')
                        .replace(' ', '-')
                        .toLowerCase()}`, { state: customPage });
                      setState({ ...state, top: false, left: false });
                    }}
                    >{(customPage.page_title || '').toUpperCase()}</span>
                )}
              </div>
            </div>
            <p className='mb-50 pointer' onClick={(e)=>moveTo('/fuel')}>FUEL</p>
            <p className='mb-50 pointer' onClick={(e)=>moveTo('/recovery')}>RECOVERY + WELLNESS</p>
          </div>
        </div>
        <div className='d-flex col-12 justify-content-md-center footer-drawer wrap'>
          <div className='d-md-flex d-sm-none mr-30 pointer'>
            <img loading="lazy"  src={ig} alt='' />
            <p className='Din-400 s-2022 c-c1'>hustlehouse.id</p>
          </div>
          <div className='d-md-flex d-sm-none mr-30 pointer'>
            <img loading="lazy"  src={fb} alt='' />
            <p className='Din-400 s-2022 c-c1'>hustlehouse.id</p>
          </div>
          <div className='d-flex align-items-center top'>
            <p className='Din-400 s-2022 c-c1 mr-30 pointer col-xs-6' onClick={(e)=>moveTo('/privacy-policy')}>Privacy Policy</p>
            <p className='Din-400 s-2022 c-c1 mr-30 pointer d-sm-none d-md-flex' onClick={(e)=>moveTo('/terms-of-service')}>Terms of Service</p>
            <p className='Din-400 s-2022 c-c1 mr-30 pointer d-sm-flex d-md-none col-xs-6' onClick={(e)=>moveTo('/faq')}>FAQ</p>
          </div>
          <div className='d-flex align-items-center bottom'>
          <p className='Din-400 s-2022 c-c1 mr-30 pointer d-sm-flex d-md-none col-xs-6' onClick={(e)=>moveTo('/terms-of-service')}>Terms of Service</p>
            <p className='Din-400 s-2022 c-c1 mr-30 pointer d-sm-none d-md-flex' onClick={(e)=>moveTo('/faq')}>FAQ</p>
            <p className='Din-400 s-2022 c-c1 pointer col-xs-6' onClick={(e)=>moveTo('/contact-us')}>Contact</p>
          </div>
          <div className='d-flex ic-media col-12 d-sm-flex d-md-none'>
          <a href="https://www.instagram.com/hustlehouse.id/" target="_blank">
            <img loading="lazy"  src={ig} alt='' /> 
            </a>
            <a href="https://www.facebook.com/hustlehouse.id" target="_blank">
              <img loading="lazy"  src={fb} alt='' />
            </a>
          </div>
        </div>
      {/* </div> */}
    </Box>
  );


  return (
    <>
      <div className='header-hs' >
          <img loading="lazy"  src={Menu} alt='' className='pointer d-md-flex d-sm-none' onClick={toggleDrawer('top', true)} />
          <img loading="lazy"  src={Menu_mobile} alt='' className='pointer d-sm-flex d-md-none' onClick={toggleDrawer('right', true)} />
      </div>
      <div className='col-12'>
        <div>
        {['left', 'right', 'top', 'bottom'].map((anchor) => (
          <React.Fragment key={anchor}>
            {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      </div>
    </>
  )
}
