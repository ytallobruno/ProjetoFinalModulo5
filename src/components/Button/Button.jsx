import style from "./Button.module.css";




export default function Button(props) {

  return (
    <>
      <button onClick={props.onClick} onMouseOver={props.changeBg} onMouseLeave={props.changeBg}
        style={{
          backgroundColor: props.bgColor ? props.bgColor : style.button,
          color: props.textColor ? props.textColor : style.button,
          width: props.width
        }}
      >
        {props.texto}
      </button>
    </>
  );
}
