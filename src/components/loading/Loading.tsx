import Icon from "./react.svg";
import "./loading.scss";
export default function Loading() {
  return (
    <div className="loading_container">
      <img className="rotating-image" src={Icon} />
    </div>
  );
}
