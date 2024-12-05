import { Fragment } from "react";
import { Style } from "./style";
import { Link } from "react-router-dom";

export default function Button (props) {
    const {icon, className, children, size="default", type="default", to} = props

    function renderFarm() {
        if (icon) {
            return (
                <div className="flex align-center gap-5">
                    <span><i className={icon}></i></span>
                    <span>{children}</span>
                </div>
            )
        } else {
            return (
                <Fragment>{children}</Fragment>
            )
        }
    }

    return (
        <Style size={size} type={type}>
            <Link to={to} className={className}>{renderFarm()}</Link>
        </Style>
    )
}