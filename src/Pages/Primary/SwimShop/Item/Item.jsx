import styled from "styled-components";
import { Link } from "react-router-dom";

import Zoom from "react-zoom-image-hover";
import Price from "./price";

/* Data ------------*/

const Item = ({ swimShopItem, zoomScale = 3, hasBoxShadow = true }) => {
    return (
        <ItemStyled hasBoxShadow={hasBoxShadow}>
            <Link to={`/item-expanded/${swimShopItem.id}`}>
                <Zoom
                    height={350}
                    width={"100%"}
                    zoomScale={zoomScale}
                    src={swimShopItem.image}
                />
                {swimShopItem.name}

                <div className="item-description">
                    {swimShopItem.description}
                </div>
                <Price swimShopItem={swimShopItem} />
            </Link>
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div`
    background-color: #fff;

    .item-description {
        color: #4c4c4c;
        font-size: 16px;
        font-weight: normal;
        line-height: 1.5rem;
        margin-bottom: 16px;
        padding-right: 16px;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* Limit to 2 lines */
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    img {
        width: 100%;
        display: block;
    }

    a {
        font-size: 24px;
        line-height: 2rem;
        font-weight: bold;
        padding-left: 16px;
        padding-bottom: 16px;
        display: block;
        color: #041e42;
        text-decoration: none;
    }

    /* Conditional box-shadow initially hidden */
    box-shadow: none;
    transition: box-shadow 0.3s ease;

    &:hover {
        /* Apply the box-shadow on hover when hasBoxShadow is true */
        box-shadow: ${({ hasBoxShadow }) =>
            hasBoxShadow ? "0 0px 8px rgba(0, 0, 0, 0.1)" : "none"};
    }
`;
