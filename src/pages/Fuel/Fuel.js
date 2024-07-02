import React,{useEffect, useState} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import word from "./assets/word-icon.png"
import Fade from 'react-reveal/Fade';
import { getFuel, url_image } from '../../service/api'

export default function Fuel() {
    const [data,set_data] = useState("")


    useEffect(()=>{
        window.scrollTo({ top:0, left:0, behavior: "instant"})
        getData()
        },[])

    const getData= async(e)=>{
        const res = await getFuel()
        set_data(res.data?.data)
        }

  return (
    <div className='col-12 fuel'>
        <Header />
        <article className='col-12'>
            {data.r1_bg !== undefined &&
            <section className='col-12 background d-flex text-center' style={{backgroundImage:`url(${url_image(data.r1_bg)})`}}>
                <Fade right cascade>
                <h1 className='c-ff m-auto Oswald-700 s-96'>{data.r1_title} </h1>
                </Fade>
            </section>}
            <section className='col-12 bg-18 d-flex justify-content-center'>
                <div className='content'>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-150 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                    {data.r2_image!== undefined &&
                        <img loading="lazy"  src={url_image(data.r2_image)} alt='' className='item-img' />}
                        </Fade>
                        <Fade delay={150} >
                        <p className='c-ff wd-640 Din-400 s-2030 m-0' dangerouslySetInnerHTML={{__html: data.r2_text}}></p>
                        {/* <p className='c-ff wd-640 Din-400 s-2030 m-0'>{data.r2_text} </p> */}
                        </Fade>
                    </div>
                </div>
            </section>
            <section className='col-12 bg-1f d-flex flex-column'>
                <div className='content'>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-100 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                        {data.r3_image!== undefined &&
                        <img loading="lazy"  src={url_image(data.r3_image)} alt='' className='item-img d-md-flex d-sm-flex d-lg-none' />}
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                        <Fade delay={150}>
                            <h2 className='c-ff col-12 s-6495 Oswald-700 mb-30'>{data.r3_title} </h2>
                            {/* <p className='c-ff Din-400 s-2030 m-0'>{data.r3_text} </p> */}
                            <p className='c-ff Din-400 s-2030 m-0' dangerouslySetInnerHTML={{__html: data.r3_text}}></p>
                            </Fade >
                            <Fade delay={250}>
                            <div className='d-flex col-12 mt-52'>
                                <img loading="lazy"  src={word} alt='' className='text-ic' />
                                <p className='c-ff Din-700 s-2840 sm-0'>{data.r3_quote} </p>
                            </div>
                            </Fade>
                        </div>
                        <Fade >
                        {data.r3_image!== undefined &&
                        <img loading="lazy"  src={url_image(data.r3_image)} alt='' className='item-img d-md-none d-sm-none d-lg-flex' />}
                        </Fade>
                    </div>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-150 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                        {data.r4_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r4_image)} alt='' className='item-img d-md-flex d-sm-flex d-lg-none' />}
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                        <Fade delay={150}>
                            <div className='d-flex col-12 m-0 sm-12'>
                                <img loading="lazy"  src={word} alt='' className='text-ic' />
                                <p className='c-ff Din-700 s-2840'>{data.r4_quote} </p>
                            </div>
                            </Fade>
                            <Fade delay={150}>
                            {/* <p className='c-ff Din-400 s-2030  mt-52'>{data.r4_text} </p> */}
                            <p className='c-ff Din-400 s-2030  mt-52' dangerouslySetInnerHTML={{__html: data.r4_text}}></p>
                            </Fade>
                        </div>
                        <Fade >
                        {data.r4_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r4_image)} alt='' className='item-img  d-md-none d-sm-none d-lg-flex' />}
                        </Fade>
                    </div>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-100 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                        {data.r5_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r5_image)} alt='' className='item-img' />}
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                        <Fade delay={150}>
                            <h2 className='c-ff col-12 s-6495 Oswald-700 mb-30'>{data.r5_title} </h2>
                            {/* <p className='c-ff Din-400 s-2030 m-0'>{data.r5_text} </p> */}
                            <p className='c-ff Din-400 s-2030 m-0' dangerouslySetInnerHTML={{__html: data.r5_text}}></p>
                            </Fade>
                            <Fade delay={250}>
                            <div className='d-flex col-12 mt-52'>
                                <img loading="lazy"  src={word} alt='' className='text-ic' />
                                <p className='c-ff Din-700 s-2840 m-0'>{data.r5_quote} </p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                    <div className='col-12 d-flex justify-content-between align-items-center m-0 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                        {data.r6_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r6_image)} alt='' className='item-img' />}
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                        <Fade delay={150}>
                            <div className='d-flex col-12 m-0'>
                                <img loading="lazy"  src={word} alt='' className='text-ic' />
                                <p className='c-ff Din-700 s-2840 m-0'>{data.r6_quote} </p>
                            </div>
                            </Fade>
                            <Fade delay={250}>
                            {/* <p className='c-ff Din-400 s-2030  mt-52 '>
                            {data.r6_text}
                            </p> */}
                            <p className='c-ff Din-400 s-2030  mt-52' dangerouslySetInnerHTML={{__html: data.r6_text}}></p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
        </article>
        <Footer />
    </div>
  )
}
