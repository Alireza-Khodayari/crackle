import { Fragment } from "react";
import Header from "../../Header";
import Footer from "../../Footer";

export default function PrimaryLayout (props) {
    return (
        <Fragment>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    )
}