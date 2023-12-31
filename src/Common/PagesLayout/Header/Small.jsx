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
                    <NavLink onClick={hideMenu} to={"/swim-shop"}>
                        Swim Shop
                    </NavLink>
                    <NavLink onClick={hideMenu} to={"/videos"}>
                        Videos
                    </NavLink>
                    <NavLink onClick={hideMenu} to={"/contact"}>
                        Contact Us
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
        height: 10%;
        padding-top: 20px;
        padding-bottom: 20px;
        max-width: 100px;
        position: relative;

        left: -35%;
        right: 0px;
        bottom: 0px;
    }

    .mainMenu {
        position: fixed;

        left: 60%;
        top: 60px;
        right: 0px;
        bottom: 0px;

        z-index: 1000;

        background-color: #041e42;

        a {
            display: block;

            padding: 10px;
            border-bottom: 1px solid #999999;

            color: white;
            text-decoration: none;

            text-align: right;

            &:hover,
            &:active,
            &:focus {
                background-color: #00b3e4;
            }
        }
    }
`;
