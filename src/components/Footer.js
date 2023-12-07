import React from 'react'

function Footer() {
  return (
    <div className='footer'>
        <div className="container">
            <div className="footer__inner">
                <p className='footer__text'>&copy;2023 Bütün Haqlar Qorunur.</p>
                <div className="footer__img-wrap">
                    <img src="/images/aclogo.png" alt="" className='footer__img'/>
                </div>
                <ul className='footer__list'>
                    <li className='footer__list-item'><a href="https://wa.me/+9940777648912" className='footer__link' target='_blank'><i className="fa-brands fa-whatsapp"></i></a></li>
                    <li className='footer__list-item'><a href="https://www.instagram.com/academy_students_/" className='footer__link' target='_blank'><i className="fa-brands fa-instagram"></i></a></li>
                    <li className='footer__list-item'><a href="tel:+9940777648912" className='footer__link'><i className="fa-solid fa-phone"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer