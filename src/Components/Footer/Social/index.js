import { Style } from "./style"
export default function Social (props) {
    const {items} = props

    function renderFarm () {
        return items.map ( ({icon, link}, index) => {
            return (
                <li key={index}>
                    <a href={link}>
                        <i className={`fa-brands ${icon}`}></i>
                    </a>
                </li>
            )
        })
    }
    return (
        <Style>
            <ul className="flex justify-center gap-20">{renderFarm()}</ul>
        </Style>
    )
}