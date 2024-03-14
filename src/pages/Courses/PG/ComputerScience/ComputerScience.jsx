import React from 'react'
import { Link } from 'react-router-dom'
import '../css/compsi.css'

function ComputerScience() {
    return (
        <div>
            <h1>Computer Science</h1>

<button><Link to='/programmes/PG/ComputerScience/FirstSem' className="button-content">First Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/SecondSem" className="button-content">Second Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/ThirdSem" className="button-content">Third Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/FourthSem" className="button-content">Fourth Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/FifthSem" className="button-content">Fifth Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/SixthSem" className="button-content">Sixth Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/SeventhSem" className="button-content">Seventh Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/EigthSem" className="button-content">Eighth Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/NinthSem" className="button-content">Ninth Sem</Link></button>
<button><Link to="/programmes/PG/ComputerScience/TenthSem" className="button-content">Fourth Sem</Link></button>
    </div>
    )
}

export default ComputerScience