import React from 'react';

interface SubHeadingProps {
    text: string;
    className?: string;
}

const SubHeading: React.FC<SubHeadingProps> = ({ text, className = '' }) => {
    return <h4 className={`subheading ${className}`}>{text}</h4>;
};

export default SubHeading;
