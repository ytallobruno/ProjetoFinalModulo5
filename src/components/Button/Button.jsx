import style from "./Button.module.css";

export default function Button(props) {
  return (
    <>
      <button
        style={{
          backgroundColor: props.bgColor ? props.bgColor : style.button,
          color: props.textColor ? props.textColor : style.button,
        }}
      >
        {props.texto}
      </button>
    </>
  );
}
