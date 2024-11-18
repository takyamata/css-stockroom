import React from 'react';

interface LeadProps {
    text: string;
    className?: string;
}

const Lead: React.FC<LeadProps> = ({ text, className = '' }) => {
    return <h5 className={`lead ${className}`}>{text}</h5>;
};

export default Lead;
