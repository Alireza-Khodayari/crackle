import FooterMenu from "./FooterMenu"
import Social from "./Social"
import { Style } from "./style"

const learnMore = [
    {
        name: "About Crackle",
        link: "#"
    },
    {
        name: "Supported Devices",
        link: "#"
    },
    {
        name: "Careers",
        link: "#"
    },
    {
        name: "Advertise With Us",
        link: "#"
    },
]
const getHelp = [
    {
        name: "FAQs",
        link: "#"
    },
    {
        name: "Submit a Request",
        link: "#"
    },
]
const stayLegal = [
    {
        name: "Ad Choices",
        link: "#"
    },
    {
        name: "Privacy Policy",
        link: "#"
    },
    {
        name: "Terms of Service",
        link: "#"
    },
    {
        name: "Accessibillity",
        link: "#"
    },
]
const social = [
    {
        icon: "fa-facebook",
        link: "#"
    },
    {
        icon: "fa-twitter",
        link: "#"
    },
    {
        icon: "fa-instagram",
        link: "#"
    },
    {
        icon: "fa-youtube",
        link: "#"
    },
    {
        icon: "fa-linkedin",
        link: "#"
    },
]
export default function Footer () {
    return (
        <Style>
            <div className="footer">
                <div className="container">
                    <div className="inner-footer flex space-between">
                        <FooterMenu menuTitle="learn more" items={learnMore} />
                        <FooterMenu menuTitle="get help" items={getHelp} />
                        <FooterMenu menuTitle="stay legal" items={stayLegal} />
                    </div>
                </div>
                <div className="social">
                    <Social items={social} />
                </div>
                <div className="copyright">
                    <div className="container">
                        <p>All rights reserved &copy;</p>
                    </div>
                </div>
                <div className="bottom-footer"></div>
            </div>
        </Style>
    )
}