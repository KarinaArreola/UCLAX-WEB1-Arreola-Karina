import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import InsetHalf from "../../../Common/PagesLayout/InsetHalf";

/* Components ------------*/
import Inset from "@/Common/PagesLayout/Inset";
import Form from "./Form";
import SubmissionList from "./SubmissionList";

const Contact = () => {
    const [submissions, submissionsUpdate] = useState([]);
    const getSubmissions = async () => {
        const { data } = await axios.get("http://localhost:4059/submissions");
        submissionsUpdate(data);
    };

    // When the component mounts
    useEffect(() => {
        getSubmissions();
    }, []);

    return (
        <ContactStyled className="Contact">
            <InsetHalf>
                <h1>Contact Us</h1>

                <Form getSubmissions={getSubmissions} />
                <SubmissionList submissions={submissions} />
            </InsetHalf>
        </ContactStyled>
    );
};

export default Contact;

const ContactStyled = styled.div``;
