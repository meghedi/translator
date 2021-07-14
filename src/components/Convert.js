import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Convert({ text, language }) {

    const [translated, setTranslated] = useState('');
    const [debounceText, setDebounceText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebounceText(text)
        }, 500)

        return () => {
            clearTimeout(timerId);
        }
    }, [text]);

    useEffect(() => {
        const translationFunc = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {}, {
                params: {
                    q: debounceText,
                    target: language.value,
                    key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
                }
            });

            setTranslated(data.data.translations[0].translatedText);
        };
        translationFunc();

    }, [language, debounceText])

    return <p>{translated}</p>
}