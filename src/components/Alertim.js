import React, { useEffect, useRef } from 'react';
import '../../node_modules/sweetalert2/src/sweetalert2.scss';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);


function Alertim() {
  useEffect(() => {
    btn.current.click()
  },[])
  const btn = useRef()
  const showSweetAlert = () => {
    const Toast = MySwal.mixin({
      position: "center",
      showConfirmButton: true,
      width:'20%',
      timer: 3000,
      heightAuto:'3rem',
      timerProgressBar: true,
      
      didOpen: (toast) => {
        toast.onmouseenter = MySwal.stopTimer;
        toast.onmouseleave = MySwal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "error",
      title: "Email yada parol doğru deyil"
    });
  };

  return (
    <>
      <button ref={btn} style={{display:'none'}} onClick={showSweetAlert}>Show Alert</button>
    </>
  );
}

export default Alertim;
