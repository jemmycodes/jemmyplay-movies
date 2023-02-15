import { MovieCards } from "../components";
import {
  ScrollSection,
  ScrollHeader,
  MoviesScroll,
} from "../styles/styles.styled";

function ScrollSections({ children, title }) {
  return (
    <ScrollSection>
      <ScrollHeader>
        <h3>{title}</h3>
        <button className="call-to-action watch-trailer">View more</button>
      </ScrollHeader>
      <MoviesScroll>{children}</MoviesScroll>
    </ScrollSection>
  );
}

export default ScrollSections;
