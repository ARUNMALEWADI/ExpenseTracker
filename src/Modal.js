import ReactDOM  from 'react-dom';
import classes from './Modal.module.css'
import { Fragment } from 'react';

 const Backdrop=(props)=>{
   return <div className={classes.backdrop} onClick={props.close}>
   </div>
}
const Overlay=(props)=>{
   return <div className={classes.overlay}>
      <div className={classes.form}>
       {props.children}
       </div>
   </div>
}



const Modal=(props)=>{
    return <Fragment>

   { ReactDOM.createPortal(<Backdrop close={props.close}></Backdrop>,document.getElementById('overlay'))}
   { ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('overlay'))}

</Fragment>
}
export default Modal;
