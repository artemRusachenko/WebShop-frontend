import ModalBackground from "./ModalBackground";
import ModalWindow from "./ModalWindow";
import { Fragment } from "react";
import ReactDom from "react-dom";

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <ModalBackground onHide={props.onHide} />,
        document.getElementById("background")
      )}
      {ReactDom.createPortal(
        <ModalWindow onHide={props.onHide}>{props.children}</ModalWindow>,
        document.getElementById("modal")
      )}
    </Fragment>
  );
};

export default Modal;
