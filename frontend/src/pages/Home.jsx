import { Link } from "react-router-dom";
import './Home.css'; // Importe o CSS específico para a Home

export default function Home() {
    return (
        <div className="homeContainer">
            <h1 className="server-name">Daniell Server</h1>
            <h2 className="welcome-message">Bem-vindo ao nosso sistema!</h2>
            <div className="linkContainer">
                <Link className="homeLinks" to={"/login"}>Entrar</Link>
                <Link className="homeLinks" to={"/register"}>Cadastrar</Link>
            </div>
        </div>
    );
}
