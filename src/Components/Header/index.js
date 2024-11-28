import Button from "../uiElements/Button";
import {Style} from "./style";

export default function Header () {
    return (
        <Style>
            <div className="header">
                <div className="container">
                    <div className="header-inner flex space-between align-center">
                        <div className="left flex gap-40 align-center">
                            <div className="logo">
                                <img src="assets/images/crackle-logo.png" />
                            </div>
                            <div className="menu">
                                <ul className="flex align-center gap-20">
                                    <li>
                                        <Button className="default" icon="fa-solid fa-film">Movies</Button>
                                    </li>
                                    <li>
                                        <Button className="default" icon="fa-solid fa-tv">TV shows</Button>
                                    </li>
                                    <li>
                                        <Button className="default" icon="fa-solid fa-plus">watchlist</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right flex gap-10">
                            <Button className="default" icon="fa-solid fa-search">search</Button>
                            <Button className="primary">create account</Button>
                            <Button className="dark bold">sign in</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}