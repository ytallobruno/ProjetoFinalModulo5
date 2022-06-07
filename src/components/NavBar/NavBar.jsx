import style from "./NavBar.module.css";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

export default function NavBar(props) {
  return (
    <div className={style.NavBar}>
      <Navigation />
      <MobileNavigation/>
    </div>
  );
}
