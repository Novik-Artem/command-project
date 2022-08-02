import style from "./styles.module.scss";
import { Puff } from "react-loader-spinner";

function Loader() {
  return (
    <div className={style.loader}>
      <Puff color="yellow" width={300} height={300}/>
    </div>
  );
}

export default Loader
