import styled from "styled-components";
import { useParams } from "react-router-dom";

/* Components -----------------*/
import Inset from "../../../../Common/PagesLayout/Inset";
import InsetHalf from "../../../../Common/PagesLayout/InsetHalf";
import Item from "../../SwimShop/Item/Item";
import { swimShopData } from "../../SwimShop/swimShopData";
import ItemDescription from "../Item/ItemDescription";

import Cart from "../Cart/Cart";

const ItemExpanded = () => {
    const { swimShopId } = useParams();

    const swimShopItem = swimShopData.find((ssd) => ssd.id == swimShopId);
    return (
        <ItemExpandedStyled className="ItemExpanded">
            <Inset>
                <Cart />
            </Inset>
            <InsetHalf>
                <Item
                    swimShopItem={swimShopItem}
                    zoomScale={3}
                    hasBoxShadow={false}
                    hasTruncatedDescription={false} // Disable text truncation
                />
                <ItemDescription swimShopItem={swimShopItem} />
            </InsetHalf>
        </ItemExpandedStyled>
    );
};

export default ItemExpanded;

const ItemExpandedStyled = styled.div``;
