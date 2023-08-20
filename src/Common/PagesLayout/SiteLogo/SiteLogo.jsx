import React from "react";
import styled from "styled-components";

/* Images ---------------------------*/
import logoUrl from "./PrimaryLayout.svg";

const SiteLogo = () => {
    return (
        <SiteLogoStyled className="SiteLogo">
            <img src={logoUrl} alt="CrossFit Decimate Logo" />
        </SiteLogoStyled>
    );
};

export default SiteLogo;

const SiteLogoStyled = styled.div`
    color: #13bbbb;
    width: 50%;
    height: 50%;

    img {
        width: 50%;
        height: auto;
    }
`;
