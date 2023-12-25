import "./index.scss";
import { X } from "lucide-react";
import { ReactNode } from "react";
import { AlertTypes } from "../../../type/types";
interface IProps {
  type: AlertTypes;
  icon: ReactNode;
  title: string;
  desc?: string;
  children?: ReactNode;
}
const Alert = ({ type = "alert-error", icon, title, desc, children }: IProps) => {
  return (
    <div className={type}>
      <div className="alert-header">
        <div className="title">
          {icon}
          <h4>{title}</h4>
        </div>
        <X className="close" size={30} />
      </div>
      {children ? children : <p> {desc}</p>}
    </div>
  );
};

export default Alert;
