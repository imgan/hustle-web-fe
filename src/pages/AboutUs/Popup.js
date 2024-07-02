import React, {useState} from 'react'
import modal1 from "./assets/modal1.png"
import Modal from 'react-awesome-modal';
import icon_close from "./assets/close-outline.png"

export default function Popup({visible, set_visible, data}) {
    if (visible===true){
        document.body.style.overflow = "hidden"
    }else{
        document.body.style.overflow = "auto"
    }

  return (
    <>
    <Modal visible={visible}  effect="fadeInUp" >
        <div className='d-flex modal-about-us flex-column'>
            <div className='col-12 d-flex justify-content-end'>
                <img loading="lazy"  src={icon_close} alt='' className='close pointer' onClick={() => set_visible(false)}  />
            </div>
            <div className='col-12 d-flex justify-content-between flex-sm-column flex-xs-column flex-md-row flex-lg-row'>
                <img loading="lazy"  src={data.img} alt='' className='img-modal'/>
                <div className='d-flex flex-column c-modal'>
                    <h6 className='c-ff Din-700 s-3235 mb-30'>{data.title} </h6>
                    {/* <p className='Din-400 c-ff s-2030'>{data.description} </p> */}
                    <p className='Din-400 c-ff s-2030' dangerouslySetInnerHTML={{__html: data.description}}></p>
                </div>
            </div>
        </div>
    </Modal>
    </>
  )
}
