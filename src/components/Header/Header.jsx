import {
  HeaderWrapper,
  HeaderItems,
  HeroText,
  Heading,
  Button,
  RedButton,
} from "../../styles/styles.styled";

function Header(props) {
  return (
    <HeaderWrapper>
      <div className="w-full top-0 left-0 h-[65vh] md:h-[85vh] absolute bg-red-500 bg-[rgb(0,0,0,0.5)] -z-10"></div>
      <HeaderItems>
        <HeroText>
          <Heading>My Hero Academia: World Heroes' Mission</Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            laboriosam facere odit fuga cum eos, tempora reiciendis vel, enim
            voluptate aperiam tempore modi? Sed similique adipisci reiciendis.
            Fugiat aut voluptate ipsum voluptates iure cum quaerat incidunt,
            maxime cupiditate ad similique saepe adipisci, nobis iusto sint
            tempore officiis voluptas! Commodi, amet!
          </p>
          <hgroup className="flex gap-3 items-center">
            <Button href="#">Watch Later</Button>
            <RedButton href="#">Watch Trailer</RedButton>
          </hgroup>
        </HeroText>
        <figure className="hidden lg:block">
          <img
            src={props.poster}
            className="w-80 h-[27rem] hidden md:block rounded-lg  "
          />
        </figure>
      </HeaderItems>
    </HeaderWrapper>
  );
}

export default Header;
