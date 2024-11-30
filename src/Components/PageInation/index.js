import ReactPaginate from "react-paginate"
import { Style } from "./style"
export default function PageInation (props) {
    return(
        <Style>
            <ReactPaginate {...props} />
        </Style>
    )
}
