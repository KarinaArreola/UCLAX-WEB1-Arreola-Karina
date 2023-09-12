import styled from "styled-components";

const CounterButton = ({ children, onClick, disabled }) => {
    return (
        <CounterButtonStyled
            className="StepperButton"
            type="submit"
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </CounterButtonStyled>
    );
};

export default CounterButton;

const CounterButtonStyled = styled.button`
    font-size: 24px;
    padding: 8px 16px;
    border-radius: 8px;
    border-width: 1px;
    border-color: #041e42;
    background-color: #fff;
    margin-bottom: 32px;
    cursor: pointer;

    &:hover,
    &:focus {
        background-color: #f8f8f8;
    }

    &:active,
    &:focus {
        background-color: #ffffff;
    }

    /* Styles for the disabled state */
    &:disabled {
        border-color: #d1d1d1; /* Change the border color to grey */
        background-color: #f8f8f8;
        border-width: 1px;
        cursor: not-allowed; /* Change the cursor to not-allowed */
    }
`;
