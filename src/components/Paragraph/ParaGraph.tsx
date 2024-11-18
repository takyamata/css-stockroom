import React from 'react';

interface ParaGraphProps {
    children: React.ReactNode;
}

const ParaGraph: React.FC<ParaGraphProps> = ({ children }) => {
    return <p className="paragraph">{children}</p>;
};

export default ParaGraph;
