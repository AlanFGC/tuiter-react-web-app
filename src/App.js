import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter} from 'react-router-dom';
import {Routes, Route} from "react-router";
import NotFoundPage from "./not-found-page";
function App() {
  return (
      <BrowserRouter>
      <div className="container">
          <Routes>
              <Route index element={<Labs/>}/>
              <Route path="/labs" element={<Labs/>}/>
              <Route path="/hello" element={<HelloWorld/>}/>
              <Route path="/tuiter/*" element={<Tuiter/>}/>
              <Route path="/*" element={<NotFoundPage/>}/>
          </Routes>
      </div>
    </BrowserRouter>
);
}
export default App;
