import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
            <div><Link to="/">Home</Link></div>
            <div><Link to="/hersheys">Hersheys</Link></div>
            <div><Link to="/resees">Resees</Link></div>
            <div><Link to="/chips">Chips</Link></div>
        </div>
    )
}

export default NavBar;