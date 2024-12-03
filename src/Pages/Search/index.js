import { Style } from "./style";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout"
import { useEffect, useState, useRef } from "react";
import { api } from "../../utils/api"
import { useSearchParams, createSearchParams } from "react-router-dom";

export default function Search () {
    const input = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams.get("term"))
    const [data, setData] = useState({
        data: [],
        metadata: {
            current_page: 1,
            per_page: 10,
            page_count: 1,
            total_count: 1
        }
    })
    useEffect ( function () {
        if (searchParams.get("term")) {
            getApi(searchParams.get("term"))
        }
    },[])
    useEffect ( function () {
        input.current.focus();
    },[])
    function getApi (search) {
        api
        .get("movies", { params : {q: search}})
        .then ( function (response) {
            setData(response.data)
        })
        .catch ( function (error) {
            
        })
    }
    function typing (event) {
        console.log(event.target.value);
        getApi(event.target.value)
        setSearchParams(createSearchParams({term: event.target.value}))
    }
    function renderFarm () {
        if (data.data.length == 0) {
            return ("Not found")
        }
        return data.data.map ( ({id, poster, title}) => {
            return (
                <li key={id}>
                    <h2>{title}</h2>
                    <img src={poster} />
                </li>
            )
        })
    }
    return (
        <PrimaryLayout>
            <Style>
                <div className="container">
                    <div className="content">
                        <input ref={input} onChange={typing} type="text" placeholder="search..." />
                    </div>
                    <ul className="flex flex-wrap gap-20">{renderFarm()}</ul>
                </div>
            </Style>
        </PrimaryLayout>
    )
}