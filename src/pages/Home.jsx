import { Header, MovieCards } from "../components";
import { ScrollSections } from "../layouts";
import { AppWrapper } from "../styles/styles.styled";

function Home() {
  return (
    <>
      <Header></Header>
      <AppWrapper>
        <ScrollSections title="Upcoming Movies">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </ScrollSections>
        <ScrollSections title="Top Rated Movies">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </ScrollSections>
        <ScrollSections title="Popular Movies">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </ScrollSections>
        <ScrollSections title="Top Rated TV">
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
          <MovieCards />
        </ScrollSections>
      </AppWrapper>
    </>
  );
}

export default Home;
