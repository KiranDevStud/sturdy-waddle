import { Link } from "react-router-dom";
import '../../css/Programmes.css'

function Subject(){
    return (
      <div>
        <div className="programme">
          <h1 >Academics</h1>
          <Link to="/subject/UG"><button>UG</button></Link>
          <Link to='/programmes/PG'><button>PG</button></Link>
        </div>
      </div>
    );
}
export default Subject;
