import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

/* Components ---------------------------*/
import SiteLogo from "../SiteLogo/SiteLogo.jsx";
import Hamburger from "./Hamburger.jsx";

const Small = () => {
    const [isMenuShowing, isMenuShowingUpdate] = useState(false);

    const TogleMenu = () => {
        isMenuShowingUpdate(!isMenuShowing);
    };

    const hideMenu = () => {
        isMenuShowingUpdate(false);
    };

    useEffect(() => {
        if (isMenuShowing) {
            //add class modal-open
            document.body.classList.add("modal-open");
        } else {
            //remove class modal-open
            document.body.classList.remove("modal-open");
        }

        return () => {
            document.body.classList.remove("modal-open");
        };
    }, [isMenuShowing]);

    return (
        <SmallStyled className="Small">
            <SiteLogo />

            <Hamburger TogleMenu={TogleMenu} />

            {isMenuShowing && (
                <nav className="mainMenu">
                    <NavLink onClick={hideMenu} to={"/"} end>
                        Home
                    </NavLink>
                    <NavLink onClick={hideMenu} to={"/staff"}>
                        Swim Shop
                    </NavLink>
                    <NavLink onClick={hideMenu} to={"/contact"}>
                        Contact
                    </NavLink>
                    <NavLink onClick={hideMenu} to={"/course-work"}>
                        Course
                    </NavLink>
                </nav>
            )}
        </SmallStyled>
    );
};

export default Small;

const SmallStyled = styled.div`
    color: white;

    display: flex;
    justify-content: center;

    .SiteLogo {
        height: 300;
        padding: 20px;
        max-width: 330px;
    }

    .mainMenu {
        position: fixed;

        left: 0px;
        top: 300px;
        right: 0px;
        bottom: 0px;

        background-color: #004444;

        a {
            display: block;

            padding: 10px;
            border-bottom: 1px solid #999999;

            color: white;
            text-decoration: none;

            &:hover,
            &:active,
            &:focus {
                background-color: #012222;
            }
        }
    }
`;
