import Button from "../uiElements/Button"
import { Style } from "./style"

export default function HeroMovie ({data}) {
    const {poster, title, age, genres, playLink, infoLink, description} = data
    return (
        <Style>
            <div className="hero-movie">
                <img className="poster" src={poster} />
                <div className="content flex align-center h-full relative">
                    <div className="container">
                        <h1 className="title">{title}</h1>
                        <div className="flex gap-20 align-center">
                            <div className="age">{`TV-${age}`}</div>
                            <div className="genres">{genres.join(" - ")}</div>
                        </div>
                        <div className="btn-group flex gap-20">
                            <Button type="primary" size="large" icon="fa-solid fa-play">watch now</Button>
                            <Button type="dark" size="large">more info</Button>
                        </div>
                        <div className="description">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Style>
    )
}