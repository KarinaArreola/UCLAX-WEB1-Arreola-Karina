import styled from "styled-components";

/*Components ------------*/
import Sizes from "./Sizes";

const SizesList = ({ swimShopItem }) => {
    return (
        <SizesListStyled className="SizesList">
            {swimShopItem.sizes.map((sizes, idx) => {
                return <Sizes key={idx} sizes={sizes} />;
            })}
        </SizesListStyled>
    );
};

export default SizesList;

const SizesListStyled = styled.div`
    padding-top: 16px;
`;
