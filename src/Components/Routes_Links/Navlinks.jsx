import React from 'react';
import { Link } from 'react-router-dom';

const Navlinks = () => {
    return (
        <div>
            <Link to="/" />
            <Link to="/checkout" />
        </div>
    );
};

export default Navlinks;