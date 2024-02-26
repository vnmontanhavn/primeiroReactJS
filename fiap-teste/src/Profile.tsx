import React from "react";
import { Container, Avatar, Name, Bio } from "./ProfileStyles"; // Crie esses componentes
import User from "./components/User";

const user = new User("Vinicius Soares Lima","https://media.licdn.com/dms/image/C4D03AQFLNsIZPITx-w/profile-displayphoto-shrink_400_400/0/1517339039923?e=2147483647&v=beta&t=jCOrNZkODwFCmz1QNlEPQuHuMA1WXwTlixjrQrMkxGQ","Dev IOS, Bacharel em Ciencias da computação, viciado em RPG de mesa.")

export default function Profile({ value = user }) {
  return (
    <Container>
      <Avatar src={value.avatarUrl} alt="User Avatar" />
      <Name>{value.name}</Name>
      <Bio>{value.bio}</Bio>
    </Container>
  );
}
