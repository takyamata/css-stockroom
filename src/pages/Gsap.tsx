import React from 'react';
import { Link } from 'react-router-dom';

const Gsap = () => {
    return (
        <div>
            <div>Gsap画面</div>
            <nav>
                <Link to="/gsap/scroll">Scroll</Link>
            </nav>
        </div>
    );
};

export default Gsap;
