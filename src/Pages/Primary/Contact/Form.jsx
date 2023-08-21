import { useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const Form = ({ getSubmissions }) => {
    // Name
    const [inputName, inputNameUpdate] = useState("Whats your name?");
    const inputNameOnChange = (e) => {
        const theValue = e.target.value;
        inputNameUpdate(theValue);
    };

    // Email
    const [inputEmail, inputEmailUpdate] = useState("example@usaswimming.org");
    const inputEmailOnChange = (e) => {
        const theValue = e.target.value;
        inputEmailUpdate(theValue);
    };

    // Message
    const [inputMessage, inputMessageUpdate] = useState("How can we help!");
    const inputMessageOnChange = (e) => {
        const theValue = e.target.value;
        inputMessageUpdate(theValue);
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            id: uuidv4(),
            name: inputName,
            email: inputEmail,
            message: inputMessage,
        };

        await axios.post("http://localhost:4059/submissions", postData);
        getSubmissions();
    };

    return (
        <FormStyled className="Form" onSubmit={onSubmit}>
            {/* Home */}
            <div className="control-group ">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={inputName}
                    onChange={inputNameOnChange}
                />
            </div>

            {/* Email */}
            <div className="control-group ">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    value={inputEmail}
                    onChange={inputEmailOnChange}
                />
            </div>

            {/* Message */}
            <div className="control-group ">
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    value={inputMessage}
                    onChange={inputMessageOnChange}
                />
            </div>

            <button type="submit">Send</button>
        </FormStyled>
    );
};

export default Form;

const FormStyled = styled.form`
    .control-group {
        margin-bottom: 20px;
    }

    label {
        font-weight: bold;
        display: block;
        margin-bottom: 5px;
    }

    input,
    textarea {
        font-size: 20px;
        padding: 10px;
        width: 100%;
        background-color: #eee;
        border: solid 1px #999;
        color: #808080;

        &:focus {
            background-color: white;
        }
    }

    textarea {
        height: 150px;
    }

    button {
        background-color: #041e42;
        padding: 10px 5px;
        color: white;
        width: 150px;
        border: none;
        outline: none;

        cursor: pointer;

        &:hover,
        &:focus {
            background-color: #00b3e4;
        }
        &:active,
        &:focus {
            background-color: #00b3e4;
        }
    }
`;
