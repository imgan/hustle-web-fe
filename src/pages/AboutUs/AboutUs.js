import React, {useState, useEffect} from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import word from "./assets/word-icon.png"
import Popup from './Popup'
import Fade from 'react-reveal/Fade';
import { getAboutUs, url_image } from '../../service/api'

export default function AboutUs() {
    const [visible, set_visible] = useState(false)
    const [id, set_id] = useState(0)
    const [data,set_data] = useState("")
    const [heightImage, setHeightImage] = useState(0)

    useEffect(()=>{
        window.scrollTo({ top:0, left:0, behavior: "instant"})
        getData()
        
        },[])

    const getData= async(e)=>{
        const res = await getAboutUs()
        set_data(res.data?.data)
        
        setTimeout(() => {
            let elHeight = document.getElementById('bg-image').clientHeight
            setHeightImage(elHeight)
        }, 200);
        
        }

    const article_list = [{title:data.r3_box1_title , img:url_image(data.r3_box1_image), description:data.r3_box1_text},
                        {title:data.r3_box2_title , img:url_image(data.r3_box2_image), description:data.r3_box2_text},
                        {title:data.r3_box3_title , img:url_image(data.r3_box3_image), description:data.r3_box3_text}]

  return (
    <div className='col-12 about-us fuel'>
        <Header/>
        <article className='col-12'>
        {data.r1_bg!== undefined &&
            <div className='w-100'>
                <img src={url_image(data.r1_bg)} alt='' className='w-100 ' id='bg-image'/> 
                {heightImage>0 &&
                <Fade right cascade>
                    <h1 className='c-ff Oswald-700 s-96' style={{height:`${heightImage}px`, marginTop:`-${heightImage}px`}} id='text-image'>{data.r1_title} </h1>
                </Fade>}
            </div>
                }
            <section className='col-12 bg-18 d-flex justify-content-center'>
                <div className='content'>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-100 flex-lg-row flex-md-column flex-sm-column'>
                    <Fade >
                        {data.r2_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r2_image)} alt='' className='item-img' />}
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                            <Fade delay={150}>
                            {/* <p className='c-ff Din-400 s-2030 m-0'>{data.r2_text} </p> */}
                            <p className='c-ff Din-400 s-2030 m-0' dangerouslySetInnerHTML={{__html: data.r2_text}}></p>
                            </Fade>
                            <Fade delay={250}>
                            <div className='d-flex col-12 mt-83'>
                                <img loading="lazy"  src={word} alt='' className='text-ic' />
                                <p className='c-ff Din-700 s-2840 m-0'>{data.r2_quote} </p>
                            </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </section>
            {data.r3_box2_image !== undefined &&
            <section className='col-12 bg-1f d-flex flex-lg-row flex-md-column flex-sm-column flex-xs-column justify-content-center'>
                {article_list.map((x,i)=>(
                <div key={x.title} className={`card-about-us d-flex flex-column ${i===1?"m-50":""}`}>
                    <img loading="lazy"  src={x.img} alt='' />
                    <div className='col-12 d-flex flex-column p-40'>
                        <p className='Din-700 s-2426 c-ff'>{x.title} </p>
                        <a className='c-ff s-2022 Din-400 m-0 pointer bd-bottom' onClick={(e)=>{set_visible(true)
                        set_id(i)}}>Read more</a>
                    </div>
                </div>))}
            </section>}
            <section className='col-12 bg-1f d-flex flex-column' style={{backgroundColor:"#181818"}}>
                <div className='content'>
                    <div className='col-12 d-flex justify-content-between align-items-center mb-150 flex-lg-row flex-md-column flex-sm-column'>
                        <Fade>
                        <img loading="lazy"  src={url_image(data.r4_image)} alt='' className='item-img d-md-flex d-sm-flex d-lg-none' />
                        </Fade>
                        <div className='d-lg-block d-md-flex d-sm-flex flex-column align-items-center wd-640'>
                            <div className='d-flex col-12 m-0 sm-12'>
                                <Fade  delay={150}>
                                <p className='c-ff Din-700 s-3639'>{data.r4_title} </p>
                                </Fade>
                            </div>
                            <Fade delay={250}>
                            <p className='c-ff Din-400 s-2030  mt-50' dangerouslySetInnerHTML={{__html: data.r4_text}}></p>
                            {/* <p className='c-ff Din-400 s-2030  mt-50'>{data.r4_text} </p> */}
                            </Fade>
                        </div>
                        <Fade>
                            {data.r4_image !== undefined &&
                        <img loading="lazy"  src={url_image(data.r4_image)} alt='' className='item-img  d-md-none d-sm-none d-lg-flex' />}
                        </Fade>
                    </div>
                </div>
            </section>
        </article>
        <Popup visible={visible} set_visible={set_visible} data={article_list[id]} />
        <Footer/>
    </div>
  )
}
