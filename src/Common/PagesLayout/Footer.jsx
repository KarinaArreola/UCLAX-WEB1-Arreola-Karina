import styled from "styled-components";

/* Components ---------------------------*/
import Inset from "./Inset.jsx";
import SiteLogo from "./SiteLogo/SiteLogo.jsx";

const Footer = () => {
    return (
        <FooterStyled className="Footer">
            <Inset>
                <div className="logo">
                    <SiteLogo />
                </div>
                <h2>
                    Privacy Policy | Terms and Conditions | Colorado Springs, CO
                </h2>
                <div className="copyright">
                    &copy; Copyright 2023 USA Swimming. All Rights Reserved.
                </div>
            </Inset>
        </FooterStyled>
    );
};

export default Footer;

const FooterStyled = styled.footer`
    color: white;

    padding: 20px 0px;

    text-align: center;

    .logo {
        display: flex;
        justify-content: center;
        .SiteLogo {
            margin-bottom: 10px;
            width: 150px;
        }
    }

    h2 {
        color: white;
        margin: 5px 0px;
        font-size: 14px;
    }

    .copyright {
        font-size: 14px;
        color: white;
    }
`;
