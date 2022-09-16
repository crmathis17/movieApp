import { Link, useNavigate, useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const EditPage = (props) => {
    const {id} = useParams();
    const [title, setTitle] = useState("");
    const [plot, setPlot] = useState("");
    const [service, setService] = useState("");
    const [audience, setAudience] = useState("");
    const [notes, setNotes] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/movie/${id}`)
        .then((response) => {
            setTitle(response.data.title);
            setPlot(response.data.plot);
            setService(response.data.service);
            setAudience(response.data.audience);
            setNotes(response.data.notes);
        })
        .catch((err) => {console.log(err.response);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/edit/${id}`, {
            title,
            plot,
            service,
            audience,
            notes,
        })
        .then((res) => {
            navigate("/");
        })
        .catch((err) => console.log(err));
    };

    return(
        <div className="container-fluid p-5" style={{backgroundImage:"url(/popcorn.jpeg)"}}>
            <div className="d-flex justify-content-between mt-4 mx-4 p-3">
                <Link to="/add"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Add New Entertainment</button></Link>
                <h1 className="text-dark">Entertainment Table</h1>
                <Link to="/"><button className="rounded-pill btn-primary text-light fw-bolder btn btn-outline-dark">Home Table</button></Link>
            </div>
            <div>
                <p className="fs-2 fw-bolder fst-italic text-dark">Edit {title}</p>
            </div>
            <div className="d-flex justify-content-center">
                <form className="col-5" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label className="fs-3 fw-bolder" htmlFor="title">Title:</label>
                        <input type="text" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                        {errors.title ? <p>{errors.title.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label className="fs-3 fw-bolder" htmlFor="plot">What Is It About:</label>
                        <input type="text" className="form-control" onChange={(e) => setPlot(e.target.value)} value={plot} />
                        {errors.plot ? <p>{errors.plot.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label className="fs-3 fw-bolder" htmlFor="service">Where Can I Watch:</label>
                        <input type="text" className="form-control" onChange={(e) => setService(e.target.value)} value={service} />
                        {errors.service ? <p>{errors.service.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label className="fs-3 fw-bolder" htmlFor="audience">Who Is Watching:</label>
                        <input type="text" className="form-control" onChange={(e) => setAudience(e.target.value)} value={audience} />
                        {errors.audience ? <p>{errors.audience.message}</p> : null}
                    </div>
                    <div className="form-group">
                        <label className="fs-3 fw-bolder" htmlFor="notes">What I Thought About It:</label>
                        <input type="text" className="form-control" onChange={(e) => setNotes(e.target.value)} value={notes} />
                        {errors.notes ? <p>{errors.notes.message}</p> : null}
                    </div>
                    <button type="submit" className="rounded-pill btn-warning text-dark fw-bolder btn btn-outline-dark mt-3">Update {title}</button>
                </form>
            </div>
        </div>
    );
};

export default EditPage;