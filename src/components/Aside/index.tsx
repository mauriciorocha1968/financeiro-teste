import Link from 'next/link';
import React from 'react';
import { MdArrowDownward, MdArrowUpward, MdDashboard, MdExitToApp } from 'react-icons/md';
import { Container, Header, LogImg, MenuContainer, MenuItemLink, Title } from './styles';


const Aside: React.FC = () => {
  return (
    <Container>
      <Header>
        <Link href="/">
          <LogImg src={'../../assets/logo.svg'} alt="Logo Financeiro"/>
        </Link>
        <Link href="/">
          <Title>Minha Carteira</Title>
        </Link>
      </Header>
      <MenuContainer>
        <Link href="Dashboard">
         <MenuItemLink >
          <MdDashboard/>
          Dashboard
        </MenuItemLink>
        </Link>

        <Link href="List">
          <MenuItemLink>
            <MdArrowUpward/>
            Entradas
          </MenuItemLink>
        </Link>
        <MenuItemLink href="#">
          <MdArrowDownward/>
          Saídas
        </MenuItemLink>
        <MenuItemLink href="#">
          <MdExitToApp/>
          Sair
        </MenuItemLink>


      </MenuContainer>
    </Container>
  );
}

export default Aside;
