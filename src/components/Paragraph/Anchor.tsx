import React from 'react';

interface AnchorProps {
    href: string;
    children: React.ReactNode;
    blank?: boolean;
    className?: string;
}

const Anchor: React.FC<AnchorProps> = ({
    href,
    children,
    blank,
    className,
}) => {
    return (
        <a
            href={href}
            target={blank ? '_blank' : ''}
            rel={blank ? 'noopener noreferrer' : ''}
            className={className}
        >
            {children}
        </a>
    );
};

export default Anchor;
