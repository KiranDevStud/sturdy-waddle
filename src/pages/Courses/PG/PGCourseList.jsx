import { Link } from "react-router-dom";
import '../../../css/PGCourseList.css'

function Subject() {
  return (
    <div className="courses">
      <Link to="/programmes/PG/ComputerScience/ComputerScience">
        <button>ComputerScience</button>
      </Link>
      <Link to="/programmes/PG/Chemistry">
        <button>Chemistry</button>
      </Link>
      <Link to="/programmes/PG/Maths">
        <button>Maths</button>
      </Link>
      <Link to="/programmes/PG/MCom">
        <button>MCom</button>
      </Link>
      <Link to="/programmes/PG/Physics">
        <button>Physics</button>
      </Link>
    </div>
  );
}
export default Subject;
