import styled from "styled-components";

const Button = ({ children, onClick }) => {
    return (
        <ButtonStyled className="Button" type="submit" onClick={onClick}>
            {children}
        </ButtonStyled>
    );
};

export default Button;

const ButtonStyled = styled.button`
    background-color: #041e42;
    padding: 16px 32px;
    color: white;
    border-radius: 8px;
    border: none;

    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #083b82;
    }
    &:active,
    &:focus {
        background-color: #00b3e4;
    }
`;
