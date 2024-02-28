import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Programmes from "./pages/Programmes/Programmes";
//PGCourseList
import PGCourseList from "./pages/Courses/PG/PGCourseList";
import ComputerScience from "./pages/Courses/PG/ComputerScience";
import PGChemistry from "./pages/Courses/PG/Chemistry";
import PGMathematics from "./pages/Courses/PG/Mathematics";
import MCom from "./pages/Courses/PG/MCom";
import PGPhysics from "./pages/Courses/PG/Physics";
//
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/">
          <Route index element={<Programmes />} />
          <Route path="/home" element={<Programmes/>}/>
          <Route path="/programmes/PG" element={<PGCourseList />} />
          <Route
            path="/programmes/PG/ComputerScience"
            element={<ComputerScience />}
          />
          <Route path="/programmes/PG/Chemistry" element={<PGChemistry />} />
          <Route path="/programmes/PG/Maths" element={<PGMathematics />} />
          <Route path="/programmes/PG/MCom" element={<MCom />} />
          <Route path="/programmes/PG/Physics" element={<PGPhysics />} />

          <Route path="*" element={<h1>Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
