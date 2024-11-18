import React from 'react';

interface SpanProps {
    text: string;
    className?: string;
    tar?: boolean;
    tac?: boolean;
}

const Span: React.FC<SpanProps> = ({ text, className = '', tar, tac }) => {
    let alignClass = '';
    if (tar) alignClass = 'right';
    else if (tac) alignClass = 'center';
    return (
        <span className={`span ${alignClass} ${className}`.trim()}>{text}</span>
    );
};

export default Span;
