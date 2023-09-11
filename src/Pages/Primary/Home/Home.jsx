import styled from "styled-components";

/* Components -----------------*/
import InsetHalf from "@/Common/PagesLayout/InsetHalf";
import Inset from "@/Common/PagesLayout/Inset";
import Slideshow from "./Slideshow/Slideshow";
import Tabbed from "./Tabbed/Tabbed";

const Home = () => {
    return (
        <HomeStyled className="Home">
            <Slideshow />
            <Inset>
                <h2>Swimming News</h2>
                <p>
                    Check out the latest news from USA Swimming, including
                    interviews and features on National Team members, important
                    updates from the organization, tips for training, and
                    complete coverage from events such as the TYR Pro Swim
                    Series or the Phillips 66 National Championships.
                </p>
            </Inset>
            <InsetHalf>
                <h3>Athlete of the Month</h3>
                <Tabbed />
            </InsetHalf>
        </HomeStyled>
    );
};

export default Home;

const HomeStyled = styled.div`
    h2 {
        text-align: center;
    }

    p {
        line-height: 1.5rem;
        font-size: 16px;
        color: #505050;
        padding-left: 64px;
        padding-right: 64px;
    }
`;
