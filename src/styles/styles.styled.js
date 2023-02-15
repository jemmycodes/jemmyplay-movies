import styled from "styled-components";
import Youtube from "../assets/youtube.svg";
import Footer from "../assets/footer-bg.jpg";

export const AppWrapper = styled.main`
  max-width: 1220px;
  width: 100%;
  margin: 0 auto;
  padding-inline: 1rem;
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

export const ScrollSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 1220px;
  margin: 4rem auto;
  padding-inlne: 1rem;
  color: #fff;
`;

export const ScrollHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;

export const MoviesScroll = styled.div`
  display: flex;
  gap: 0.7rem;
  width: 100%;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const MovieCardWrapper = styled.article`
  gap: 1rem;
  display: flex;
  flex-direction: column;
font-weight: medium;
font-size: .8rem;
 }`;

export const MovieCard = styled.div`
  background-image: url("https://image.tmdb.org/t/p/original/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 9rem;
  height: 15rem;
  border-radius: 1rem;

  &::before {
    content: url(${Youtube});
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 1rem 1rem 0 0;
    color: white;
    height: 0%;
    width: 100%;
    opacity: 0;
    transition: 1s all ease;
  }

  &:hover::before {
    background-color: rgba(0, 0, 0, 0.8);
    height: 100%;
    opacity: 1;
  }
`;

export const FooterWrapper = styled.footer`
  margin: 0 auto;
  color: white;
  padding: 5rem 1rem;
  background: url(${Footer});
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const FooterLogo = styled.div`
  display: flex;
  flex-direction: row;
  font-weight: bold;
  align-items: center;
  margin: 0 auto;
`;

export const FooterTextSection = styled.section`
  display: flex;
  gap: 8rem;
  justify-content: center;
  @media (max-width: 768px) {
    max-width: 100%;
    justify-content: space-between;
    gap: 0;
  }
`;

export const FooterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: medium;
`;

export const FooterListItems = styled.li``;
