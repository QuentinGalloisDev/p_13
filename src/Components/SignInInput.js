import React from 'react';

export const SignInInput = ({ inputClassName, inputLabel, inputType, value, onChange }) => {
    return (
        <div className={inputClassName}>
            <label>{inputLabel}</label>
            <input
                type={inputType}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
