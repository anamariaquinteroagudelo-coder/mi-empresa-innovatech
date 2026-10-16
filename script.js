body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f9;
    color: #333;
    text-align: center;
}

header {
    background-color: #0b2545;
    color: white;
    padding: 2rem;
}

nav {
    margin: 1.5rem 0;
}

nav button {
    background-color: #134074;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 5px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
}

nav button:hover {
    background-color: #8da9c4;
    color: #0b2545;
}

.seccion {
    background:white;
    margin: 20px auto;
    padding: 20px;
    width: 80%;
    max-width: 600px;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}

.oculta {
    display: none;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    padding: 8px 0;
    font-size: 1.1rem;
}/* Estilos para las tarjetas de servicios */
.tarjetas-container {
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 20px;
}

.tarjeta {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 20px;
    width: 250px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.btn-accion {
    background-color: #27ae60;
    color: white;
    border: none;
    padding: 8px 15px;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 10px;
}

.btn-accion:hover {
    background-color: #219150;
}

.mensaje-exito {
    margin-top: 25px;
    padding: 15px;
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
    border-radius: 5px;
    display: inline-block;
}
