import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditPage from "./components/editPage";
import FormPage from "./components/formPage";
import ListPage from "./components/listPage";
import SinglePage from "./components/singlePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<ListPage/>}/>
        <Route path = "/edit/:id" element = {<EditPage/>}/>
        <Route path = "/movie/:id" element = {<SinglePage/>}/>
        <Route path = "/add" element = {<FormPage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
