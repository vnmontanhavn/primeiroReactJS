// App.tsx
import React from "react";
import { Global } from "./styles/global"; // Importe o estilo global
import Profile from "./Profile"; // Importe o componente de perfil
import User from "./components/User";

const user = new User("Vinicius Soares Lima","https://media.licdn.com/dms/image/C4D03AQFLNsIZPITx-w/profile-displayphoto-shrink_400_400/0/1517339039923?e=2147483647&v=beta&t=jCOrNZkODwFCmz1QNlEPQuHuMA1WXwTlixjrQrMkxGQ","Dev IOS, Bacharel em Ciencias da computação, viciado em RPG de mesa.")

function App() {
  return (
    <>
      <Global />
      <Profile value={user}  />
    </>
  );
}

export default App;
