import React, { useState } from 'react';

const CustomSelect = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (option) => {
        onChange(option);
        setIsOpen(false);
    };

    const selectedOption = options.find((option) => option.value === value);

    return (
        <div className="custom-select" onClick={handleToggle}>
            <div className="custom-select__selected">
                {selectedOption ? selectedOption.label : 'Select an option'}
            </div>
            {isOpen && (
                <div className="custom-select__options">
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className="custom-select__option"
                            onClick={() => handleSelect(option)}
                        >
                            {option.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomSelect;