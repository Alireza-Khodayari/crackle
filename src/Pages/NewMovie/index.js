import { useState } from "react";
import PrimaryLayout from "../../Components/Layouts/PrimaryLayout";

export default function NewMovie () {
    const [data, setData] = useState({});
    // const [title, setTitle] = useState("");
    // const [imdb_id, setImdbId] = useState("");
    // const [country, setCountry] = useState("");
    // const [year, setYear] = useState("");

    function onChange (e) {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    function submit (e) {
        e.preventDefault();
        console.log(data);
        // api
        // .post("movies", {title: title, imdb_id: imdb_id, country: country, year: year})
        // .then( function (response) {
            
        // })
        // .then( function (error) {

        // })
    }

    return (
        <PrimaryLayout>
            <div className="content">
                <form>
                    <input name="title" onChange={onChange} placeholder="title" />        
                    <input name="imdb_id" onChange={onChange} placeholder="imdb-id" />        
                    <input name="country" onChange={onChange} placeholder="country" />        
                    <input name="year" onChange={onChange} placeholder="year" />     
                    <button type="submit" onClick={submit}>Send</button>
                </form>
            </div>
        </PrimaryLayout>
    )
}