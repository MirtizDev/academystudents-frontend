// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas'; 
// import {FaBars} from 'react-icons/fa'
// import {AiOutlineClose} from 'react-icons/ai'
 

// function Nav() {
//   const [show, setShow] = useState(false);
//   const offcanvas = document.querySelector(".offcanvas")

//   const handleShow = () =>{
//     setShow(!show);
//   } 
//   const handleClose = () => setShow(false);
//   return (
//     <>
//      <>
//       <button className='nav__btn' onClick={handleShow}>
//         <FaBars/>
//       </button>
//       <div className='offcanvas'>
//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Body>
//         <div className='nav__wrap'>
//         <nav className="nav container">
//           <div className='nav__content'>
//           <div className='nav__logo-wrap'>
//             <img src='/images/aclogo.png' alt="" className="nav__logo"/>
//           </div>
//             <ul className="nav__item-wrap">
//                 <li className="nav__item" ><a href="#home" onClick={handleClose}>Ana Səhifə</a></li>
//                 <li className="nav__item"><a href="#kurslar" onClick={handleClose}>Kurslar</a></li>
//                 <li className="nav__item"><a href="#about" onClick={handleClose}>Haqqımızda</a></li>
//                 <li className="nav__item"><a href="#contact" onClick={handleClose}>Əlaqə</a></li>
//             </ul>
//           </div>
//         </nav>
//     </div>
//         </Offcanvas.Body>
//       </Offcanvas>
//       </div>
      
//     </>
//     <a href="#home" className='up_btn'><i className="fa-solid fa-chevron-up"></i></a>
//     </>
    
//   )
// }

// export default Nav