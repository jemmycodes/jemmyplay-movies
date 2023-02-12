import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderContent,
  HeaderText,
  Heading,
  CTA,
} from "../../styles/styles.styled";
import { imageURL } from "../url/URL";

function Header() {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <HeaderText>
          <Heading>My Hero Academia: World Heroes' Mission</Heading>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            velit quia voluptatum consequatur doloribus eum asperiores atque
            assumenda facere. Fugit neque suscipit eligendi, vitae est ullam
            itaque sed ipsa facere placeat commodi explicabo natus quod
            perferendis alias ad quis tempore quibusdam quidem sunt
            necessitatibus quasi. Earum quos dolores facere dolor.
          </p>
          <CTA>
            <Link className="call-to-action watch-now">Watch Now</Link>
            <Link className="call-to-action watch-trailer">Watch Trailer</Link>
          </CTA>
        </HeaderText>
        <figure className="hidden md:block">
          <img
            src={`${imageURL}/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg`}
            alt=""
            className="max-w-xs max-h-[22rem] rounded-2xl"
          />
        </figure>
      </HeaderContent>
    </HeaderWrapper>
  );
}

export default Header;
