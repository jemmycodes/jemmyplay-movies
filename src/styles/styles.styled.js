import styled, { createGlobalStyle } from "styled-components";
// Global styles
export const GlobalStyles = createGlobalStyle`
main {
    margin: 0 auto;
   
}
`;

// Navbar
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  left: 0;
  width: 100%;
  color: white;
  position: absolute;
  padding: 0 1rem;
  max-width: 1220px;
  left: 50%;
  margin-left: -5rem;
  z-index: 10;
  @media (min-width: 768px) {
    left: 50%;
    transform: translateX(-50%);
    margin-left: 0;
  }
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
    z-index: 40;
  }
`;

// hero
export const HeaderWrapper = styled.header`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  @media (max-width: 350px) {
    height: 100vh;
  }
`;

export const HeaderContent = styled.div`
  color: white;
  padding: 0 0.5rem 0.5rem 0.5rem;
  display: flex;
  width: 100%;
  max-width: 940px;
  align-items: center;
  gap: 5rem;
`;

export const HeaderText = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  max-width: 35rem;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  @media (min-width: 768px) {
    font-size: 3rem;
    line-height: 3.5rem;
  }
`;
export const CTA = styled.div`
  display: flex;
  gap: 1rem;
`;
