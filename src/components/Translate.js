import React, { useState } from "react";
import { Jumbotron, Form } from 'react-bootstrap';


import Dropdownselect from "./Dropdownselect";
import Convert from "./Convert";

const options = [
    {
        label: 'Armenian',
        value: 'arm',
    },
    {
        label: 'Farsi',
        value: 'fa',
    },
    {
        label: 'Dutch',
        value: 'nl',
    },
    {
        label: 'Afrikaans',
        value: 'af',
    },
    {
        label: 'Arabic',
        value: 'ar',
    },
    {
        label: 'Hindi',
        value: 'hi',
    },

];



export default function Translte() {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <Jumbotron>
            <h2>Type a text to Translate</h2>
            <Form.Control className="formCotrol"
                type="text" value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <hr />
            <Dropdownselect
                options={options}
                selected={language}
                onSelectedChange={setLanguage} />
            <hr/>
            <Convert text={text} language={language} />
        </Jumbotron>
    );
}