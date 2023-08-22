import styled from "styled-components";

/*Components ------------*/
import Sizes from "./Sizes";

const SizesList = ({ member }) => {
    return (
        <SizesListStyled className="SizesList">
            {member.sizes.map((sizes, idx) => {
                return <Sizes key={idx} sizes={sizes} />;
            })}
        </SizesListStyled>
    );
};

export default SizesList;

const SizesListStyled = styled.div``;
