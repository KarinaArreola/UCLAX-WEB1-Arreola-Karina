import styled from "styled-components";

/*Components ------------*/
import SizesList from "./Sizes/SizesList";

const ItemDescription = ({ member }) => {
    return (
        <ItemDescriptionStyled className="ItemDescription">
            <div className="item-description">
                <b>Description: </b>
                {member.description}
            </div>
            <SizesList member={member} />
            <div className="price">
                <b>Price: </b>
                {member.price}
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
    }
`;
