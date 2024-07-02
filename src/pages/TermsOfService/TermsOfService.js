import React,{useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Fade from 'react-reveal/Fade';
import { getPrivacy_TnC } from '../../service/api';
  
  export default function TermsOfService() {
    const [data,set_data] = useState("")


    useEffect(()=>{
        window.scrollTo({ top:0, left:0, behavior: "instant"})
        getData()
        },[])
  
    const getData= async(e)=>{
        const res = await getPrivacy_TnC()
        set_data(res.data?.data.terms)
        }

    return (
      <div className='col-12 privacy bg-18 fuel'>
        <Header/>
        <section className='d-flex flex-column justify-content-center content-privacy'>
          <Fade right cascade>
          <h1 className='c-ff s-6495 ma-100 Oswald-700'>{data.title} </h1>
          </Fade>
          <div dangerouslySetInnerHTML={{__html: data.text}}  className='col-12 d-flex flex-column mb-100 s-2030'  />
        </section>
        <Footer/>
      </div>
    )
  }
  