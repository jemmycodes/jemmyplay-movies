import {
  FooterWrapper,
  FooterLogo,
  FooterTextSection,
  FooterListWrapper,
  FooterListItems,
} from "../styles/styles.styled";
import { BsPlayFill } from "react-icons/bs";

function Footer() {
  return (
    <FooterWrapper>
      <FooterLogo>
        <BsPlayFill className="text-green-600 text-6xl" />
        <figcaption className="text-2xl">jPlay</figcaption>
      </FooterLogo>
      <FooterTextSection>
        <FooterListWrapper>
          <FooterListItems>Home</FooterListItems>
          <FooterListItems>Contact Us</FooterListItems>
          <FooterListItems>Terms of Services</FooterListItems>
          <FooterListItems>About Us</FooterListItems>
        </FooterListWrapper>
        <FooterListWrapper>
          <FooterListItems>Live</FooterListItems>
          <FooterListItems>FAQ</FooterListItems>
          <FooterListItems>Premium</FooterListItems>
          <FooterListItems>Privacy Policy</FooterListItems>
        </FooterListWrapper>
        <FooterListWrapper>
          <FooterListItems>You must watch</FooterListItems>
          <FooterListItems>Recent Release</FooterListItems>
          <FooterListItems>Top IMBD</FooterListItems>
        </FooterListWrapper>
      </FooterTextSection>
    </FooterWrapper>
  );
}

export default Footer;
