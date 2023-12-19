import { Link } from "react-router-dom";

const Header: React.FC = () => {
    return (
        <>
            <header className="container flex h-12">
                <img src="" className=""/>
                <ul className="flex gap-12">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Log In</Link></li>
                    <li><Link to="/signup">Sign Up</Link></li>
                </ul>
            </header>
        </>
    )
}

export default Header;