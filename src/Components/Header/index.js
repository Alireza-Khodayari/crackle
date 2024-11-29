import Button from "../uiElements/Button";
import {Style} from "./style";

export default function Header () {
    return (
        <Style className="header">
                <div className="container">
                    <div className="header-inner flex space-between align-center">
                        <div className="left flex gap-40 align-center">
                            <div className="logo">
                                <img src="assets/images/crackle-logo.png" />
                            </div>
                            <div className="menu">
                                <ul className="flex gap-10">
                                    <li>
                                        <Button icon="fa-solid fa-film">Movies</Button>
                                    </li>
                                    <li>
                                        <Button icon="fa-solid fa-tv">TV shows</Button>
                                    </li>
                                    <li>
                                        <Button icon="fa-solid fa-plus">Watchlist</Button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right flex gap-10">
                            <Button icon="fa-solid fa-search">search</Button>
                            <Button type="primary">create account</Button>
                            <Button type="dark">sign in</Button>
                        </div>
                    </div>
                </div>
        </Style>
    )
}