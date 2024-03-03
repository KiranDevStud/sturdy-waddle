import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Programmes from "./pages/Programmes/Programmes";
import ComputerScience from "./pages/Courses/PG/ComputerScience/ComputerScience";
import Navbar from "./Navbar";
import PGCourseList from "./pages/Courses/PG/PGCourseList";
import PGChemistry from "./pages/Courses/PG/Chemistry";
import PGMathematics from "./pages/Courses/PG/Mathematics";
import MCom from "./pages/Courses/PG/MCom";
import PGPhysics from "./pages/Courses/PG/Physics";
import FirstYear from "./pages/Courses/PG/ComputerScience/FirstYear";
import SecondYear from "./pages/Courses/PG/ComputerScience/SecondYear";
import ThirdYear from "./pages/Courses/PG/ComputerScience/ThirdYear";
import FourthYear from "./pages/Courses/PG/ComputerScience/FourthYear";
import FifthYear from "./pages/Courses/PG/ComputerScience/FifthYear";
import LoginForm from "./pages/LoginForm/LoginForm";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<Programmes />} />
        <Route path="/programmes/PG" element={<PGCourseList />} />
        <Route path="/programmes/PG/ComputerScience/ComputerScience" element={<ComputerScience />} />
        <Route path="/programmes/PG/ComputerScience/FirstYear" element={<FirstYear />} />
        <Route path="/programmes/PG/ComputerScience/SecondYear" element={<SecondYear />}/>
        <Route path="/programmes/PG/ComputerScience/ThirdYear" element={<ThirdYear />}/>
        <Route path="/programmes/PG/ComputerScience/FourthYear" element={<FourthYear />}/>
        <Route path="/programmes/PG/ComputerScience/FifthYear" element={<FifthYear />}/>
        <Route path="/programmes/PG/Maths" element={<PGMathematics />} />
        <Route path="/programmes/PG/MCom" element={<MCom />} />
        <Route path="/programmes/PG/Physics" element={<PGPhysics />} />
        <Route path="/programmes/PG/Chemistry" element={<PGChemistry />} />
        <Route path="*" element={<h1>Not Found</h1>} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;