import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Home from "./routes/Home";
import FillUp from "./routes/FillUp";

function Router( ){
    return(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} >
                <Route path="/fillup" element={<FillUp />} />
            </Route>
            
          </Routes>
        </BrowserRouter>
      );
}

export default Router;