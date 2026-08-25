import React from "react";

import "./FormInput.css";

export default function FormInput({
    label,
    id,
    type = "text",
    placeholder,
    icon,
    endIcon,
    value,
    onChange,
    error
    
}) {
    return (
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>

            <div className="input-container">
                {icon && (
                    <span className="input-icon">
                        {icon}
                    </span>
                )}

                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />

                {endIcon && (
                    <div className="input-end-icon">
                        {endIcon}
                    </div>
                )}
            </div>

            {error && (
                <span className="input-error">
                    {error}
                </span>
            )}
        </div>
    );
}