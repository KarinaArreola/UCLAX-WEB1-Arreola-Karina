import styled from "styled-components";

/* Component --------------------- */
import InsetHalf from "@/Common/PagesLayout/InsetHalf";
import YouTube from "./YouTube";

const Videos = () => {
    return (
        <VideosStyled className="Videos">
            <InsetHalf>
                <h1>Featured Videos</h1>
                <p>
                    Follow the latest videos inspired by the current and
                    upcoming world and local championships and swim-related
                    news.{" "}
                </p>
                <nav className="sublinks">
                    <YouTube />
                </nav>
            </InsetHalf>
        </VideosStyled>
    );
};

export default Videos;

const VideosStyled = styled.main`
    p {
        line-height: 1.5rem;
        font-size: 16px;
        color: #505050;
    }
`;
