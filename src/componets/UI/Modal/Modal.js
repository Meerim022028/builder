import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children, show, cancelCallback }) => {
  const styles = {
    transform: show ? "translateY(0)" : "translateY(-100vh)",
  }

  return (
    <div className={classes.Modal}>
      <Backdrop show={show} click={cancelCallback} />
      <div className={classes.content} style={styles}>
        {children}
      </div>
    </div>
  );
}

export default Modal;