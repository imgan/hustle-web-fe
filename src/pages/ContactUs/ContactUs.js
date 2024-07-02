import React,{useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import location from "./assets/location.png"
import cs from "./assets/costumer.png"
import email from "./assets/email.png"
import Fade from 'react-reveal/Fade';
import { getContactUs } from '../../service/api'


export default function ContactUs() {
    const [data,set_data] = useState("")


    useEffect(()=>{
        window.scrollTo({ top:0, left:0, behavior: "instant"})
        getData()
        },[])
  
    const getData= async(e)=>{
        const res = await getContactUs()
        set_data(res.data?.data)
        }
        
    const contact_list = [{img:location, title:data.c_b1_title, description:data.c_b1_text},
                {img:cs, title:data.c_b2_title, description:data.c_b2_text},
                {img:email, title:data.c_b3_title, description:data.c_b3_text},]
  return (
    <div className='col-12 contact-us'>
        <Header/>
        <section className='col-12 d-flex flex-column justify-content-center '>
            <div className='d-flex flex-column text-center bx-content'>
                <Fade right cascade>
                <h1 className='c-ff Oswald-700 s-6495 m-0'>{data.c_title} </h1>
                </Fade>
                {/* <p className='c-ff s-4852 Din-700 m-100'>{data.c_text} </p> */}
                <p className='c-ff s-4852 Din-700 m-100' dangerouslySetInnerHTML={{__html: data.c_text}}></p>
                <Fade delay={200} cascade>
                <div className='col-12 d-flex flex-lg-row flex-md-column flex-sm-column align-items-center justify-content-center'>
                    {contact_list.map((x,i)=>(
                    <div key={x.title} className={`box-item d-flex flex-lg-column flex-md-row flex-sm-row text-center justify-content-lg-center justify-content-md-start align-items-center ${i===1?"m-50":""}`}>
                        <img loading="lazy"  src={x.img} alt='' className='ic' />
                        <div className='col-lg-12 d-flex flex-column text-align-lg-center align-items-lg-center text-align-md-left align-items-md-left'>
                            <p className='Din-700 s-2830 c-ff'>{x.title} </p>
                            <p className='s-2426 c-ff Din-400 m-0'>{x.description} </p>
                        </div>
                    </div>))}
                </div>
                </Fade>
                <div className='col-12 mt-100 d-flex'>
                <iframe title='map-hustle' src={data.c_map_location} width={data.c_map_width} height={data.c_map_height} style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
             </div>
        </section>
        <Footer/>
    </div>
  )
}
