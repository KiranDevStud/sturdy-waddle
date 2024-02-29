import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Programmes from "./pages/Programmes/Programmes";
import ComputerScience from "./pages/Courses/PG/ComputerScience";
import Navbar from "./Navbar";
import PGCourseList from "./pages/Courses/PG/PGCourseList";
import PGChemistry from "./pages/Courses/PG/Chemistry";
import PGMathematics from "./pages/Courses/PG/Mathematics";
import MCom from "./pages/Courses/PG/MCom";
import PGPhysics from "./pages/Courses/PG/Physics";
import FirstYear from "./pages/Courses/PG/FirstYear";
import SecondYear from "./pages/Courses/PG/SecondYear";
import ThirdYear from "./pages/Courses/PG/ThirdYear";
import FourthYear from "./pages/Courses/PG/FourthYear";
import FifthYear from "./pages/Courses/PG/FifthYear";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Programmes />} />
        <Route path="/home" element={<Programmes />} />
        <Route path="/programmes/PG" element={<PGCourseList />} />
        <Route path="/programmes/PG/ComputerScience" element={<ComputerScience />} />
        <Route path="/programmes/PG/FirstYear" element={<FirstYear />} />
        <Route path="/programmes/PG/SecondYear" element={<SecondYear />}/>
        <Route path="/programmes/PG/ThirdYear" element={<ThirdYear />}/>
        <Route path="/programmes/PG/FourthYear" element={<FourthYear />}/>
        <Route path="/programmes/PG/FifthYear" element={<FifthYear />}/>
        <Route path="/programmes/PG/Maths" element={<PGMathematics />} />
        <Route path="/programmes/PG/MCom" element={<MCom />} />
        <Route path="/programmes/PG/Physics" element={<PGPhysics />} />
        <Route path="*" element={<h1>Not Found</h1>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;