import React, { useState } from "react";
import "./styles.css";

const maskMoneyLimited = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$2,$1")
    .replace(/(\d{3})(\d)/, "$1,$2")
    .replace(/(\d{3})(\d)/, "$1,$2")
    .replace(/(,\d{3})\d+?$/, "$1")
    .replace(/^/gm, "$ ");
};

const maskMoneyUnlimited = (value) => {
  return (
    value
      .replace(/\D/g, "")
      // thousand + cents
      .replace(/(\d)(\d{2})$/, "$1.$2")
      .replace(/(?=(\d{3})+(\D))\B/g, ",")
      .replace(/^/gm, "$ ")
  );
  // comma for every 3 characters
  //.replace(/(?=(\d{3})+(\D))\B/g, ",");
};

const maskCPF = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

const maskPhone = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .replace(/(-\d{4})(\d+?)$/, "$1");
};

// ou
// const maskPhone = (value) => {
//   return value
//     .replace(/\D/g, "")
//     .replace(/(\d{2})(\d)/, "($1) $2")
//     .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
// };

const maskOnlyNumbers = (value) => {
  return value.replace(/\D/g, "");
};

const maskDate = (value) => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

const maskOnlyLetters = (value) => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

const maskCEP = (value) => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
};

const App = () => {
  const [moneyU, setMoneyU] = useState("");
  const [moneyL, setMoneyL] = useState("");
  const [cpf, setCPF] = useState("");
  const [phone, setPhone] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [cep, setCEP] = useState("");
  const [date, setDate] = useState("");

  return (
    <div className="App">
      <h1>React Input Mask</h1>
      <input
        value={moneyL}
        onChange={(e) => setMoneyL(maskMoneyLimited(e.target.value))}
        placeholder="Money Limited - formato: $ 000,000"
      />
      <input
        value={moneyU}
        onChange={(e) => setMoneyU(maskMoneyUnlimited(e.target.value))}
        placeholder="Money Unlimited - formato: $ 000,000.00"
      />
      <input
        value={cpf}
        onChange={(e) => setCPF(maskCPF(e.target.value))}
        placeholder="CPF - formato: 000.000.000-00"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(maskPhone(e.target.value))}
        placeholder="Telefone - formato: (00) 00000-0000"
      />
      <input
        value={number}
        onChange={(e) => setNumber(maskOnlyNumbers(e.target.value))}
        placeholder="Apenas Numeros"
      />
      <input
        value={text}
        onChange={(e) => setText(maskOnlyLetters(e.target.value))}
        placeholder="Apenas Letras"
      />
      <input
        value={cep}
        maxLength="9"
        onChange={(e) => setCEP(maskCEP(e.target.value))}
        placeholder="CEP - formato: 00000-000"
      />
      <input
        value={date}
        onChange={(e) => setDate(maskDate(e.target.value))}
        placeholder="Data - formato: 00/00/0000"
      />
    </div>
  );
};

export default App;
