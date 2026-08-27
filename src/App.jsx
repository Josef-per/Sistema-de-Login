//criando a variavel root para fazer a importação dos componentes para o html
import React from "react";
import {Route, Routes} from "react-router-dom";

import Login from "./views/Login/Login";
import Cadastro from "./views/Cadastro/Cadastro";

const App = () => {
    return (
        <Routes>
            {/*Caminho inicialpra ir direto para a tela de login*/}
            <Route path="/" element={<Login />} />

            {/*Criar os outros caminhos a medida que as telas vão ficando prontas*/}
            <Route path="/Cadastro" element={<Cadastro />} />
        </Routes>
    );
};

export default App;
