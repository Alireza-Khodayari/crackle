import { useParams } from "react-router-dom";
import { Style } from "./style";
import { useEffect, useState } from "react";
import { api } from "../../utils/api";

export default function SingleMovie () {
    const {id} = useParams();
    const [data, setData] = useState({})

    useEffect( function() {
        api.get(`/movies/${id}`)
        .then( function (response) {
            setData(response.data)
        })
        .catch( function (error) {

        })
    }, [])
    return (
        <Style>
            <h3>{data.title}</h3>
            <img src={data.poster} />
        </Style>
    )
}