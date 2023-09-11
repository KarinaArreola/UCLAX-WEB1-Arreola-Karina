import styled from "styled-components";
import { Outlet, NavLink } from "react-router-dom";

/* Component --------------------- */
import Inset from "@/Common/PagesLayout/Inset";
import YouTube from "./YouTube";

const CourseWorkLayout = () => {
    return (
        <CourseWorkLayoutStyled className="CourseWorkLayout">
            <Inset>
                <h1>Featured Videos</h1>
                <p>
                    Follow the latest videos inspired by the current and
                    upcoming world and local championships and swim-related
                    news.{" "}
                </p>
                <YouTube />
            </Inset>
        </CourseWorkLayoutStyled>
    );
};

export default CourseWorkLayout;

const CourseWorkLayoutStyled = styled.main``;
