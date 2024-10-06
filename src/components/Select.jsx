/* eslint-disable react/prop-types */
import React, { useId } from 'react';

const Select = React.forwardRef(function Select({
    options,
    label,
    className = "",
    ...props
}, ref) {
    const id = useId();
    
    return (
        <div className="w-full">
            {label && <label htmlFor={id} className="text-white-75">{label}</label>}
            <select
                {...props}
                id={id}
                ref={ref}
                className={`px-3 py-2 rounded-lg bg-glassWhite backdrop-blur-md 
                            border border-glassWhite text-white-75 
                            outline-none focus:bg-gray-50 duration-200 
                            w-full ${className}`}
            >
                {options?.map((option) => (
                    <option key={option} value={option} className="text-white-75 bg-royalBack-700  :hover:bg-royalBack-600">
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
});

export default Select;
