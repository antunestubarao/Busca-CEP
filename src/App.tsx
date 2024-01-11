import { useEffect, useState } from "react";
import "./App.css";

type Address = {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
};

function App() {
  const [cep, setCep] = useState<string>("");
  const [address, setAddress] = useState<Address>();

  function fetchAddressByCep(cep: string) {
    fetch(`http://viacep.com.br/ws/${cep}/json/`)
      .then((response) => response.json())
      .then((data) => setAddress(data));
  }

  return (
    <>
      <div>
        <img
          style={{ height: 170 }}
          src="https://static.wixstatic.com/media/210d04_8dbbaede21354a0db476dea4a35a0f35~mv2.png/v1/fill/w_618,h_232,al_c,q_85,usm_2.00_1.00_0.00,enc_auto/correios-780x293.png"
          alt="logo Correios"
        />
        <h1>BUSCA CEP</h1>
        <h2>Digite seu Cep para buscar o endereço!</h2>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <input
            onChange={(e) => setCep(e.target.value)}
            value={cep}
            style={{ padding: "8px", borderRadius: "10px" }}
            type="text"
            placeholder="Digite seu CEP aqui   :)"
          ></input>
          <br />
          <button
            onClick={() => fetchAddressByCep(cep)}
            style={{ background: "green" }}
          >
            Buscar CEP
          </button>
          <span>
            desenvolvido para ajudar a encontrar o endereço através do CEP
          </span>
          <div>
            {address && (
              <div>
                <h2>Endereço</h2>
                <p>
                  {address.logradouro}, {address.bairro}
                </p>
                <p>
                  {address.localidade}, {address.uf}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

//TODO: AULA 02 - 39:35
