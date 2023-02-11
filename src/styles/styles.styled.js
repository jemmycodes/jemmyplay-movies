import styled, { createGlobalStyle } from "styled-components";
// Global styles
export const GlobalStyles = createGlobalStyle`
main {
    max-width: 1220px;
    margin: 0 auto; 
    padding: 1rem 2rem; 
    position: relative;
    min-height: 100vh;
 @media (max-width: 768px) {
   padding-inline: 2rem;
   background-color: rgb(14, 14, 16)
  }
}
`;

// Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: absolute;
  left: 0;
  padding-inline: 0.5rem;
  width: 100%;
  color: white;
  z-index: 10;
`;

export const UnorderedList = styled.ul`
  display: flex;
  gap: 2rem;
  font-weight: 700;
  @media (max-width: 768px) {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    justify-content: space-between;
    align-items: center;
    min-width: 100%;
    padding: 0.5rem;
    background-color: black;
    color: white;
  }
`;

// hero
export const HeaderWrapper = styled.header`
  background-image: url("https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 85vh;
  position: fixed;
  left: 0;
  top: 0;
  @media (max-width: 768px) {
    height: 60vh;
  }
  @media (max-width: 400px) {
    height: 70vh;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1220px;
  gap: 5rem;
  color: white;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: 1rem;
`;

export const HeroText = styled.article`
  color: white;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (max-width: 768px) {
    max-width: 570px;
    width: 100%;
    gap: 1rem;
  }
`;

export const Heading = styled.h1`
  font-size: 3.8rem;
  line-height: 4rem;
  font-weight: bold;
  @media (max-width: 768px) {
    font-size: 1.7rem;
    line-height: inherit;
  }
`;

export const Button = styled.a`
  padding: 0.3em 1em;
  background: red;
  border-radius: 1rem;

  &:hover {
    box-shadow: 0 0 25px rgba(255, 0, 0);
    transition: 0.2s all ease-in;
  }
`;

export const RedButton = styled(Button)`
  background: transparent;
  border: 1px solid white;

  &:hover {
    background-color: white;
    color: red;
    transition: 0.3s all ease-in;
  }
`;
