import React from 'react';

interface ButtonProps {
    onClick?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
    return (
        <button onClick={onClick} style={{ padding: '10px 20px', cursor: 'pointer' }}>
            {children}
        </button>
    );
};

export default Button;
