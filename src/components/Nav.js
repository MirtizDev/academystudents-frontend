import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { LuLogIn } from 'react-icons/lu';
import {AiOutlineLogin} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { login,logout, setExactUsername } from '../stores/auth'
import axios from 'axios';
import LoadingScreen from './LoadingScreen';
import OffCanvas from './OffCanvas'
function Nav() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const dispatch = useDispatch()

  const {isLoggedIn} = useSelector(state => state.auth)
  // const {exactUsername} = useSelector(state => state.auth)
  const exactUsername = localStorage.getItem("exactUsername")
  console.log(exactUsername);
  const {registerData} = useSelector(state => state.auth)
  const {loginData} = useSelector(state => state.auth)

  const isLogin = localStorage.getItem("isLoggedIn")



  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get('http://localhost:5055/api/users/getusers');
  //       const users = await response.data;
  //       setData(users);
  //       setLoading(false);
  //       users.forEach((user) => {
  //         if(user.email == loginData.Email){
  //           dispatch(setExactUsername(user.username))
  //       }
  //     })
  //     } catch (error) {
  //       console.error('API isteği başarısız:', error);
  //     }
  //   }

  //   fetchData();
  // }, []);


  const handleClick = async () => {
    try {
      localStorage.removeItem("isLoggedIn")
      localStorage.removeItem("exactUsername")
      fetch('http://localhost:5055/api/account/logout', {
        method: 'POST',
      })
        .then(response => {
          if (response.status === 200) {
            console.log("succedd")
            window.location.href="http://localhost:3000/login"
            dispatch(logout())
          } else {
            console.log("unsuceedd")
          }
        }
        )
        .catch(error => {
          console.log(error)
        });
    }
    catch (error) {
      console.error('API isteği başarısız:', error);
    }
  }

  return (
    <>
    {loading ? (<LoadingScreen/>) : (
      <>
       <div className='nav__wrap' id='start'>
       <nav className="nav container">
         <Link className='nav__logo-wrap' to='/' style={{textDecoration:'none'}}>
           <img src='/images/aclogo.png' alt="" className="nav__logo" />
           <p > <span>|</span>Academy Students</p>
         </Link>

           <ul className="nav__item-wrap">
             <>
             {isLogin ? (
               <>
               {/* <div className="nav__item">
                 <p>Xoş gəlmisən,{exactUsername}</p>
               </div>
               <div className="nav__item" >
               <Link onClick={handleClick}><BiLogOut/> Logout</Link>
             </div> */}
             <OffCanvas/>
               </>

             )  : (

               <>
               <div className="nav__item">
               <Link to='/login'><LuLogIn/> Login</Link>
             </div>
             <div className="nav__item">
               <Link to='/register'><AiOutlineLogin/> Register</Link>
             </div>
               </>
             )}
             </>


               {/* <li className="nav__item" ><Link to="/">Ana Səhifə</Link></li>
               <li className="nav__item"><Link to="/courses">Kurslar</Link></li>
               <li className="nav__item"><Link to="/about">Haqqımızda</Link></li>
               <li className="nav__item"><Link to="/contact">Əlaqə</Link></li> */}

           </ul>
       </nav>
   </div>
   <a href="#start" className='up_btn'><i className="fa-solid fa-chevron-up"></i></a>
   </>
    )}
   </>

  )
}

export default Nav