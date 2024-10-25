import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Importe o CSS específico para o Dashboard

const Dashboard = ({ userName }) => {
    const navigate = useNavigate(); // Hook para navegação

    const handleGoHome = () => {
        navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div className="dashboard-container">
            <h2 className="welcome-message">Bem-vindo, ao servidor de Daniel!</h2>
            <p className="info-message">Esta é a sua área pessoal. Aqui você pode acessar suas informações.</p>
            <button className="home-button" onClick={handleGoHome}>Ir para Home</button>
        </div>
    );
};

export default Dashboard;
