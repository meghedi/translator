import React from "react";
import { Dropdown, DropdownButton } from 'react-bootstrap';


export default function Dropdownselect({ options, selected, onSelectedChange }) {

    const renderOptions = options.map((option) => {
        return (
            <Dropdown.Item
                value={option.value}
                key={option.value} onClick={() => onSelectedChange(option)} >
                {option.label}
            </Dropdown.Item>
        );
    })

    return (
        <DropdownButton id="dropdown-basic-button" title={selected.label}>
            {renderOptions}
        </DropdownButton>
    );
}