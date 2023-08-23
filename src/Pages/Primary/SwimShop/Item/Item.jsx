import styled from "styled-components";

import { Zoom } from "react-img-hover-zoom";

/*Components ------------*/
import ItemDescription from "./ItemDescription";

const Item = ({ swimShopItem }) => {
    return (
        <ItemStyled className="Item">
            <Zoom
                height={500}
                width={830}
                zoomScale={3}
                <img src={swimShopItem.image} alt={swimShopItem.name} />
            />
            <h3>{swimShopItem.name}</h3>
            <ItemDescription swimShopItem={swimShopItem} />
        </ItemStyled>
    );
};

export default Item;

const ItemStyled = styled.div`
    background-color: #eee;

    img {
        width: 100%;
        display: block;
    }

    h3 {
        font-size: 24px;
        line-height: 2rem;
        color: white;
        background-color: #041e42;
        margin: 0px;
        padding: 8px 16px;
    }
`;
