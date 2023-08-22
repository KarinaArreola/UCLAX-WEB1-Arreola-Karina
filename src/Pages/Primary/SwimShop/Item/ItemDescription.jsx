import styled from "styled-components";

/*Components ------------*/
import SizesList from "./Sizes/SizesList";
import Button from "@/Common/Button";

const ItemDescription = ({ swimShopItem }) => {
    const addToCart = () => {
        console.log("Add to cart");
    };

    return (
        <ItemDescriptionStyled className="ItemDescription">
            <div className="item-description">{swimShopItem.description}</div>
            <SizesList class="size-list" swimShopItem={swimShopItem} />
            <div className="price">{swimShopItem.price}</div>
            <div>
                <Button onClick={addToCart}>Add to Cart</Button>
            </div>
        </ItemDescriptionStyled>
    );
};

export default ItemDescription;

const ItemDescriptionStyled = styled.div`
    padding: 16px;
    font-size: 14px;
    line-height: 1.5rem;

    .price {
        font-size: 24px;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    button {
        /* background-color: red; */
    }
`;
