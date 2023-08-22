import styled from "styled-components";

/*Components ------------*/
import StaffBio from "./ItemDescription";

const Item = ({ member }) => {
    return (
        <ItemStyled className="Item">
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <StaffBio member={member} />
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
