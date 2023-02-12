import styled, { createGlobalStyle } from "styled-components";
// Global styles
export const GlobalStyles = createGlobalStyle`
main {
  min-height: 100vh;
  width: 100%;
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
  position: fixed;
  @media (min-width: 768px) {
    max-width: 1220px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Logo = styled.figure`
  display: flex;
  align-items: center;
  font-weight: bold;
  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    // background: red;
    // min-width: 100vw;
  }
`;

export const UnorderedList = styled.ul`
display: flex;
gap: 3rem;
@media (max-width: 768px){
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(0,0,0);
  padding: .5rem 1rem;
  justify-content: space-between;
  width: 100%;}
  }
`;

// hero
export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  padding: 7rem 1rem 2rem 1rem;
  justify-content: center;
  align-items: flex-end;
  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),
    url("https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const HeaderContent = styled.div`
  color: white;
  display: flex;
  width: 100%;
  max-width: 1220px;
  align-items: center;
  gap: 5rem;
`;

export const HeaderText = styled.hgroup`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 35rem;
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
