import style from "./Loader.module.css";

export default function Loader() {
  return (
    <>
      <div className={style.loader}>
        <div>
          <ul className={style.lista}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div className={`${style.wineglass} ${style.left}`}>
            <div className={style.top}></div>
          </div>
          <div className={`${style.wineglass} ${style.right}`}>
            <div className={style.top}></div>
          </div>
        </div>
      </div>
    </>
  );
}
