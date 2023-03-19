import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { CrudOpration } from "./common/componants/CrudOpration";
import Layout from "./common/componants/Layout";
import { UserComponant } from "./common/componants/UserComponant";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout />}>
          <Route index element={<CrudOpration />}></Route>
          <Route path="users" element={<UserComponant />}></Route>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
