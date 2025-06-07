import { observer } from "mobx-react";
import { Route, Routes } from "react-router-dom";

import SingleState from "./pages/States2/SingleState.jsx";
import States from "./pages/States2/mainContent.jsx";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/about.jsx";
import Login from "./pages/Login/login.jsx";
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
        </Route>
        <Route path="states/:stateId" element={<SingleState />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="create" element={<CreateState />} />
    </Routes>
  );
});

export default App;
