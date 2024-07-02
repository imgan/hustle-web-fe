import React, {useState, useEffect} from 'react'
import { url_image, getHomepage } from '../../service/api'
import promo from "../../assets/img/promo.png"
import google from "../../assets/img/googleplay.png"
import app from "../../assets/img/appstore.png"
import close from "../../assets/img/close-outline.png"
import subtract from "../../assets/img/Subtract.png"
import alert from "../../assets/img/alert.png"
import clock from "../../assets/img/clock.png"



export default function Promo() {
    const [logo, set_logo] = useState('')
    const [desc, set_desc] = useState('')
    const [status, set_status] = useState(false)
    const [data, set_data] = useState([])
    const [background, set_background] = useState('')
    const [title, set_title] = useState('')

    useEffect(()=>{
        getData()
        },[])


    function selectLogo(x,y){
        set_status(true)
        set_logo(x)
        set_desc(y)
    }

    const getData= async(e)=>{
        const res = await getHomepage()
        set_data(res.data?.data?.items_row6)
        set_title(res.data?.data?.r6_toptitle)
        set_background(res.data?.data?.r6_bg)
      }



  return (
    <div className='col-12 d-flex flex-column promo text-center align-items-center justify-content-center' style={{backgroundImage:`url(${url_image(background)})`}}>
        <div className='d-flex col-12 flex-column box text-center'>
            <h2 className='s-3247 Oswald-700 c-da mb-30'>{title}</h2>
            <div className='d-flex col-12 flex-wrap justify-content-between mb-100'>
                {data.map((item,i)=>(
                <div key={i} className='col-4 d-flex justify-content-center'>
                    <img src={url_image(item.logo)} alt='' className='d-flex col-9' onClick={()=>selectLogo(item.logo,item.description)} />
                </div>))}
            </div>
            <div className='col-12 flex-column d-none'>
                <h1 className='s-3653 Oswald-700 c-da mb-20'>WE ARE HUSTLE!</h1>
                <p className='c-ff Din-400 s-1418 text-center mb-33'>Where transformations happen, dreams become reality, and goals get crushed. Where we celebrate life and each other, forming bonds that last a lifetime.</p>
                <div className='d-flex justify-content-center apps'>
                    <img src={google} alt='' className='d-flex' />
                    <img src={app} alt='' className='d-flex' />
                </div>
            </div>
        </div>
        <div className={`col-12 fixed box-popup-promo  ${status?'active':''}`}>
            <div className='col-12 popup-promo'>
                <div className='col-12 d-flex justify-content-between top'>
                    <img src={close} alt='' className='cl-1 op-0'/>
                    <img src={close} alt='' className='cl-1 pointer'onClick={()=>set_status(false)} />
                </div>
                <div className='col-12 d-flex justify-content-center'>
                    <img  src={url_image(logo)} alt='' className='cl-2 md-logo'/>
                </div>
                <p className='col-12 text-justify c-ff s-1418 desc'>{desc}</p>
                <div className='card-promo col-12 d-none flex-column' style={{backgroundImage:`url(${subtract})`}}>
                    <p className='c-00 Din-700 s-2021'>Discount 50K</p>
                <div className='d-flex mb4'>
                        <img src={alert} alt='' className='icon-popup'/>
                        <p className='c-00 Din-400 s-1213'>Lorem ipsum dolor sit amet</p>
                </div>
                <div className='d-flex mb4'>
                        <img src={clock} alt='' className='icon-popup'/>
                        <p className='c-00 Din-400 s-1213'>No expired date</p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
