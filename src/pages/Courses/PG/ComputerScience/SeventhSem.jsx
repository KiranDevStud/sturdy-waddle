import React from 'react';
import { Link } from 'react-router-dom';

function SeventhSem() {
    return (
        <div>
            <h2>Seventh Sem</h2>
            {/* Add the content for the fifth year here */}
            <Link to="/subject1"><button>Computational Mathematics</button></Link>
            <Link to="/subject2"><button>Applied Statistics for Data Analysis</button></Link>
            <Link to="/subject3"><button>Advanced Python Programming</button></Link>
            <Link to="/subject4"><button>Data Science and Analytics</button></Link>
            <Link to="/subject5"><button>Software Lab- Advanced Python Programming</button></Link>
            <Link to="/subject6"><button>Software Lab- Statistical Programming and Data Analytics using R</button></Link>
        </div>
    );
}

export default SeventhSem;