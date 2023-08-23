import styled from "styled-components";

/*Components ------------*/
import SizesList from "./Sizes/SizesList";
import CounterApp from "./CounterApp/CounterApp";
import Button from "@/Common/Button";

const ItemDescription = ({ swimShopItem }) => {
    const addToCart = () => {
        console.log("Add to cart");
    };

    return (
        <ItemDescriptionStyled className="ItemDescription">
            <div className="item-description">{swimShopItem.description}</div>

            <SizesList class="size-list" swimShopItem={swimShopItem} />
            <div className="price">
                <b>{swimShopItem.price}</b>
            </div>
            <div>
                <CounterApp />
            </div>
            <div>
                <Button onClick={addToCart}>Add to Cart</Button>
            </div>
        </ItemDescriptionStyled>
    );
};

export default ItemDescription;

const ItemDescriptionStyled = styled.div`
    color: #4c4c4c;
    padding: 16px;
    font-size: 14px;
    line-height: 1.5rem;

    .price {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 32px;
    }
`;
