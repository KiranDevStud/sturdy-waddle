import { Link } from "react-router-dom";
import '../../css/Programmes.css';

function Subject() {
  return (
    <div className="live-background">
      <div className="programme">
        <video autoPlay muted loop>
          <source src="src\src\assets\background.mp4" type="video/mp4" />
        </video>       <div className="button-container">
          <Link to="/subjects/UG"><button className="button">UG</button></Link>
          <Link to='/programmes/PG'><button className="button">PG</button></Link>
        </div>
      </div>
    </div>
  );
}


export default Subject;