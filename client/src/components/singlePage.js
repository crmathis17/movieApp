import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import axios from "axios";

const SinglePage = (props) => {
    const {id} = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then ((res) => {
            setMovieDetails(res.data);
        })
        .catch((err) => console.log(err))
    }, [id]);

    const removeFilter = () => {
        axios.delete(`http://localhost:8000/api/movie/${id}`)
        .then((res) => {
            navigate("/")
        })
        .catch((err) => console.log(err))
    }

    return(
        <div className="container-fluid p-5" style={{backgroundImage:"url(/film.jpeg)"}}>
            <div className="d-flex justify-content-between mt-4 mx-4 p-3">
                <Link to="/add"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Add New Entertainment</button></Link>
                <h1 className="text-light">Entertainment Table</h1>
                <Link to="/"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Home Table</button></Link>
            </div>
            <div className="container">
            <div>
                <p className="fs-2 fw-bolder fst-italic text-light">Details About "{movieDetails.title}"</p>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-sm-3">
                    <div className="card bg-primary text-light opacity-75 border border-light border-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fst-italic">Title:</h5>
                            <p className="card-text fw-bolder fs-3">{movieDetails.title}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-primary text-light opacity-75 border border-light border-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fst-italic">Where Can I Watch?</h5>
                            <p className="card-text fw-bolder fs-3">{movieDetails.service}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card bg-primary text-light opacity-75 border border-light border-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fst-italic">Who Is Watching?</h5>
                            <p className="card-text fw-bolder fs-3">{movieDetails.audience}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-sm-7">
                    <div className="card bg-primary text-light opacity-75 border border-light border-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fst-italic">What Is It About?</h5>
                            <p className="card-text fw-bolder fs-3">{movieDetails.plot}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row d-flex justify-content-center mb-3">
                <div className="col-sm-7">
                    <div className="card bg-primary text-light opacity-75 border border-light border-4">
                        <div className="card-body">
                            <h5 className="card-title fw-bolder fst-italic">What Were My Thoughts?</h5>
                            <p className="card-text fw-bolder fs-3">{movieDetails.notes}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <button className="rounded-pill btn-danger text-light fw-bolder btn btn-outline-dark m-3" onClick={removeFilter}type="submit">Remove {movieDetails.title}</button>
            <Link to={`/edit/${movieDetails._id}`}><button className="rounded-pill btn-warning text-dark fw-bolder btn btn-outline-dark m-3">Update {movieDetails.title}</button></Link>
        </div>
    )
}

export default SinglePage;