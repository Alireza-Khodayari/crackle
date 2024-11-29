import { Fragment } from "react";
import { Style } from "./style";

export default function Button (props) {
    const {icon, className, children, size="default", type="default"} = props

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
            <a  href="#" className={className}>{renderFarm()}</a>
        </Style>
    )
}