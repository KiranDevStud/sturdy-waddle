import React from 'react'
import { Link } from 'react-router-dom'
import '../css/compsi.css'

function ComputerScience() {
    return (
        <div>
            <h1>Computer Science</h1>

<button>
            <Link to='/programmes/PG/ComputerScience/FirstYear' className="button-content">
  First Year
</Link></button>
<button>
<Link to="/programmes/PG/ComputerScience/SecondYear" className="button-content">
  Second Year
</Link>
</button>
<button><Link to="/programmes/PG/ComputerScience/ThirdYear" className="button-content">Third Year</Link>

</button>
<button><Link to="/programmes/PG/ComputerScience/FourthYear" className="button-content">Fourth Year</Link></button>
<button><Link to="/programmes/PG/ComputerScience/FifthYear" className="button-content">Fifth Year</Link></button>
    </div>
    )
}

export default ComputerScience