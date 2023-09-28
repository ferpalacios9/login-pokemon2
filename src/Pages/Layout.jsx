import { Outlet, Link } from "react-router-dom"
// import PokemonButton from "../components/Buttons/PokemonsButton";
import MainContent from "../components/Profile/Profile";
import { SignOutButton } from "../components/Buttons/SignOutButton";

import './Layout.css';

import Button from 'react-bootstrap/Button';

const Layout = () => {
    return (
        <div className="buttons-container">
            <MainContent />
            <Button
                className="pokemon-button"
                variant="success">
                <Link style={{ color: "white", textDecoration: "none" }} to="/pokemones" > POKEMONES </Link>
            </Button>
            <SignOutButton />
            <Outlet />  
        </div>
    )
}

export default Layout;