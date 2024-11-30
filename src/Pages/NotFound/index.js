import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";
import { Link } from "react-router-dom";

export default function NotFound () {
    (
        <PrimaryLayout>
            <img src="https://www.digikala.com/statics/img/png/page-not-found.webp" />
            <h1>Not Found-------404</h1>
            <Link to="/">Go to Home</Link>
        </PrimaryLayout>
    )
}