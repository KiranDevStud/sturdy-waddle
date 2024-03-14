import "./App.css";
import { Routes, Route } from "react-router-dom";
import ComputerScience from "./pages/Courses/PG/ComputerScience/ComputerScience";
import Navbar from "./Navbar";
import PGCourseList from "./pages/Courses/PG/PGCourseList";
import PGChemistry from "./pages/Courses/PG/Chemistry";
import PGMathematics from "./pages/Courses/PG/Mathematics";
import MCom from "./pages/Courses/PG/MCom";
import PGPhysics from "./pages/Courses/PG/Physics";
import FirstSem from "./pages/Courses/PG/ComputerScience/FirstSem";
import SecondSem from "./pages/Courses/PG/ComputerScience/SecondSem";
import ThirdSem from "./pages/Courses/PG/ComputerScience/ThirdSem";
import FourthSem from "./pages/Courses/PG/ComputerScience/FourthSem";
import FifthSem from "./pages/Courses/PG/ComputerScience/FifthSem";
import SixthSem from "./pages/Courses/PG/ComputerScience/SixthSem";
import SeventhSem from "./pages/Courses/PG/ComputerScience/SeventhSem";
import EighthSem from "./pages/Courses/PG/ComputerScience/EighthSem";
import NinthSem from "./pages/Courses/PG/ComputerScience/NinthSem";
import TenthSem from "./pages/Courses/PG/ComputerScience/TenthSem";
import LoginForm from "./pages/LoginForm/LoginForm";
import Programmes from "./pages/Programmes/Programmes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/programmes/PG" element={<PGCourseList />} />
        <Route
          path="/programmes/PG/ComputerScience/ComputerScience"
          element={<ComputerScience />}
        />
        <Route
          path="/programmes/PG/ComputerScience/FirstSem"
          element={<FirstSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/SecondSem"
          element={<SecondSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/ThirdSem"
          element={<ThirdSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/FourthSem"
          element={<FourthSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/FifthSem"
          element={<FifthSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/SixthSem"
          element={<SixthSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/SeventhSem"
          element={<SeventhSem />}
        />
        <Route
          path="/programmes/PG/ComputerScience/EighthSem"
          element={<EighthSem />}
        />
        <Route
         path="/programmes/PG/ComputerScience/NinthSem"
         element={<NinthSem />}
        />
        <Route
         path="/programmes/PG/ComputerScience/TenthSem"
         element={<TenthSem />}
        />
        <Route path="/programmes/PG/Maths" element={<PGMathematics />} />
        <Route path="/programmes/PG/MCom" element={<MCom />} />
        <Route path="/programmes/PG/Physics" element={<PGPhysics />} />
        <Route path="/programmes/PG/Chemistry" element={<PGChemistry />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
