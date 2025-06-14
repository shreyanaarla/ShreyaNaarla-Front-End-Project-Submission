import React from 'react';

interface ChartTitleProps {
    title: string;
}

const ChartTitle: React.FC<ChartTitleProps> = ({ title }) => {
    return (
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
            {title}
        </h2>
    );
};

export default ChartTitle;