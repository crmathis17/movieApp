import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ListPage = () => {
    const [listTv, setListTv] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/movie")
        .then((listTv) => {
            setListTv(listTv.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    },[]);

    return(
        <div className="container-fluid p-5" style={{backgroundImage:"url(/theater.jpeg)"}}>
            <div className="d-flex justify-content-between mt-4 mx-4 p-3">
                <Link to="/add"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Add New Entertainment</button></Link>
                <h1 className="text-light">Entertainment Table</h1>
                <Link to="/"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Home Table</button></Link>
            </div>
            <div className="m-3">
                <p className="fs-2 fw-bolder text-dark">Suggestions for Entertainment</p>
            </div>
            <table className="table table-striped table table-dark table-bordered border-dark container opacity-75 fs-5 fw-bolder fst-italic">
                <thead className="table-primary">
                    <tr>
                        <th>Title</th>
                        <th>Who is Watching</th>
                        <th>Date Added</th>
                    </tr>
                </thead>
                <tbody>
                    {listTv.map((movie, index) => {
                        return (
                            <tr key = {movie._id}>
                                <td><Link to={`/movie/${movie._id}`}>{movie.title}</Link></td>
                                <td>{movie.audience}</td>
                                <td>{movie.created_at}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ListPage;