import React from 'react';
import ReactLoading from 'react-loading';

const Loader = ({ type = "balls", color = "#fff" }) => (
    <ReactLoading
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        type={type}
        color={color}
        height={50}
        width={50}
    />
);

export default Loader;
