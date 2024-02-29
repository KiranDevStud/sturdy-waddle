import React from 'react'
import { Link } from 'react-router-dom'
import '../PG/css/compsi.css'

function ComputerScience() {
    return (
        <div>
            <h1>Computer Science</h1>

<button>
            <Link to="/FirstYear" className="button-content">
  First Year
</Link></button>
<button>
<Link to="/SecondYear" className="button-content">
  Second Year
</Link>
</button>
<button><Link to="/ThirdYear" className="button-content">Third Year</Link>

</button>
<button><Link to="/FourthYear" className="button-content">Fourth Year</Link></button>
<button><Link to="/FifthYear" className="button-content">Fifth Year</Link></button>
    </div>
    )
}

export default ComputerScience