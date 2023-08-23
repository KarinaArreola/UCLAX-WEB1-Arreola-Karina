import styled from "styled-components";

/*Components ------------*/
import Sizes from "./Sizes";
<h5>Sizes:</h5>;
const SizesList = ({ swimShopItem }) => {
    return (
        <SizesListStyled className="SizesList">
            <h6>Sizes:</h6>
            {swimShopItem.sizes.map((sizes, idx) => {
                return <Sizes key={idx} sizes={sizes} />;
            })}
        </SizesListStyled>
    );
};

export default SizesList;

const SizesListStyled = styled.div`
    padding-top: 32px;
`;
