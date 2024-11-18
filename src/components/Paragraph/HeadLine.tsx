import React from 'react';

interface HeadLineProps {
    text: string;
    className?: string;
}

const HeadLine: React.FC<HeadLineProps> = ({ text, className = '' }) => {
    return (
        <h3 className={`headline ${className}`}>
            <i style={{ color: 'var(--current)' }}>&diams;</i> {text}
        </h3>
    );
};

export default HeadLine;
