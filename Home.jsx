import React, { useState } from "react";
import axios from "axios";

function Home() {

    const [data, setData] = useState([]);

    function getPosts() {

        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => {
                setData(res.data);
            });
    }

    return (
        <div>

            <button onClick={getPosts}>
                Load Posts
            </button>

            {
                data.map((obj) => (
                    <div key={obj.id}>

                        <h2>{obj.title}</h2>

                        <p>{obj.body}</p>

                    </div>
                ))
            }

        </div>
    );
}

export default Home;