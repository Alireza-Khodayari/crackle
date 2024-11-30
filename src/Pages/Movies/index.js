import { Style } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";
import PageInation from "../../Components/PageInation";

export default function Movies () {
    const [data, setData] = useState({
        data: [],
        metadata: {
            current_page: 1,
            per_page: 10,
            page_count: 25,
            total_count: 250
        }
    })

    useEffect( function() {
        getApi();
    }, [])

    function renderFarm() {
        return data.data.map( (item) => {
            const {id, title, poster} = item;
            return(
                <li key={id}>
                    <h2>{title}</h2>
                    <img src={poster} />
                </li>
            )
        })
    }
    function getApi (page=1) {
        api.get(`movies?page=${page}`)
        .then( function (response) {
            setData(response.data)
        })
        .catch( function (error) {

        })
    }
    function handlePageClick (e) {
        getApi(e.selected + 1)
    }

    return (
        <Style>
            <ul style={{display: "flex", flexWrap: "wrap", gap: "10px"}}>
                {renderFarm()}
            </ul>
            <PageInation
                onPageChange={handlePageClick}
                pageCount={data.metadata.page_count}
                itemsPerPage={data.metadata.per_page}
            />
        </Style>
    )
}