import React  from 'react';
import Logo from './comp_imgs/logo2.png';
import {BsFacebook, BsTelegram, BsTelephoneXFill} from 'react-icons/bs';
import {RiWechat2Fill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {IoLogoWhatsapp} from 'react-icons/io'; 
import {ImLocation2} from 'react-icons/im';
import {GiWorld} from 'react-icons/gi';


function Footer (){
  return (
    <div>
        <footer className="text-center text-lg-start bg-info text-muted">  
            <section className="d-flex justify-content-center p-3 border-bottom">
              <div className="pt-2">
                <h2 className="text-center text-white text-wrap font-weight-bold"><strong><i>STORE KH</i></strong></h2>
              </div>
            </section>
            <section className="justify-content-center">
              <div className="container text-center text-md-start pt-4">
                <div className="row">
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                    <img src={Logo} className="rounded-circle" alt="#" title="Store KH" />
                  </div>
                  <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold mb-3 text-white text-left ml-5"><strong>SOCIAL MEDIA</strong></h5>
                    <ul className="text-white text-left fw-bold">
                      <p><span><BsFacebook className='fa-lg mr-2'/></span>Facebook</p>
                      <p><span><BsTelegram className='fa-lg mr-2'/></span>Telegram</p>
                      <p><span><IoLogoWhatsapp className='fa-lg mr-2'/></span>WhatApp</p>
                      <p><span><RiWechat2Fill className='fa-lg mr-2'/></span>Wechat</p>
                    </ul>
                  </div>
                  <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold mb-3 text-white text-left ml-5"><strong>CONTACT</strong></h5>
                    <ul className=" text-white text-left fw-bold">
                      <p><span><BsTelephoneXFill className='fa-lg mr-2'/>855 234 567 87</span></p>
                      <p><span><BsTelephoneXFill className='fa-lg mr-2'/>855 234 567 88</span></p>
                      <p><span><BsTelephoneXFill className='fa-lg mr-2'/>855 234 567 89</span></p>
                      <p><span><MdEmail className='fa-lg mr-2'/>storeKH2022@gmail.com</span></p>
                    </ul>
                  </div>
                  <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mb-4">
                    <h5 className="text-uppercase fw-bold text-white text-left mb-3 ml-5"><strong>LOCATION </strong></h5>
                    <ul className="text-left text-white fw-bold">
                      <p><span><ImLocation2 className='fa-lg mr-2'/>Phnom Penh, Cambodia.</span></p>
                      <p><span><ImLocation2 className='fa-lg mr-2'/>Candal, Cambodia.</span></p>
                      <p><span><ImLocation2 className='fa-lg mr-2'/>Takeo, Cambodia.</span></p>
                      <p><span><GiWorld className='fa-lg mr-2'/>www.storeKH.com.kh</span></p>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="text-center p-4 border border-bottom text-white">
              © 2022 Copyright:
              <span><h5 className="text-reset fw-bold" >storeKH.com</h5></span>
            </div>
        </footer>
    </div>
  );
}
export default Footer;
