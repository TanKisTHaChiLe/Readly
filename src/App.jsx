import { observer } from "mobx-react";
import { Route, Routes } from "react-router-dom";

import SingleState from "./pages/States2/SingleState.jsx";
import States from "./pages/States2/mainContent.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/about.jsx";
import Login from "./pages/Login/login.jsx";
import Authorisation from "./pages/Login/authorisation.jsx";
import SharedLayout from "./pages/SharedLayout";
import SharedStatesLayout from "./pages/States2/SharedStates.jsx";
import CreateState from "./pages/CreateState/createState.jsx";
const App = observer(() => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="states" element={<SharedStatesLayout />}>
          <Route index element={<States />} />
          <Route path=":stateId" element={<SingleState />} />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="create" element={<CreateState />} />
      </Route>
      <Route path="login">
        <Route index element={<Login />} />
        <Route path="authorisation" element={<Authorisation />} />
      </Route>
    </Routes>
  );
});

export default App;
