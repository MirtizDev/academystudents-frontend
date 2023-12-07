import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {LuLogIn} from 'react-icons/lu'
import {AiOutlineLogin} from 'react-icons/ai'
import {BiLogOut} from 'react-icons/bi'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { login,logout } from '../stores/auth'
import { setExactUsername,setLoginData} from '../stores/auth'
function NavDark() {
  const dispatch = useDispatch()

  const {isLoggedIn} = useSelector(state => state.auth)
  const {loginData} = useSelector(state => state.auth)
  // const {exactUsername} = useSelector(state => state.auth)
  const exactUsername = localStorage.getItem("exactUsername")
  console.log(exactUsername);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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
        })
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
    <div className='navdark__wrap' id='start'>
        <nav className="navdark container">
        <Link className='navdark__logo-wrap' to='/' style={{textDecoration:'none'}}>
            <img src='/images/aclogo.png' alt="" className="navdark__logo" />
            <p > <span>|</span>Academy Students</p>
          </Link>
            
            <ul className="navdark__item-wrap">
            <>
              {isLogin ? (
                <>
                <div className="navdark__item">
                <p>Xoş gəlmisən,{exactUsername}</p>   
              </div>
                <div className="navdark__item">
                <Link onClick={handleClick}><BiLogOut/> Logout</Link>                               
              </div>
              
                </>
                
              )  : (

                <>
                <div className="navdark__item">
                <Link to='/login'><LuLogIn/> Login</Link>                               
              </div>
              <div className="navdark__item">
                <Link to='/register'><AiOutlineLogin/> Register</Link>    
              </div>
                </>
              )}
              </>

                {/* <li className="navdark__item" onClick={handleClick}><a href="#home">Ana Səhifə</a></li>
                <li className="navdark__item"><Link to="/courses">Kurslar</Link></li>
                <li className="navdark__item"><Link to="/about">Haqqımızda</Link></li>
                <li className="navdark__item"><Link to="/contact">Əlaqə</Link></li> */}
                
            </ul>
        </nav>
    </div>
    <a href="#start" className='up_btn'><i className="fa-solid fa-chevron-up"></i></a>
    </>
    
  )
}

export default NavDark