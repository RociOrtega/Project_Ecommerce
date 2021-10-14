import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="brand brandFooter">
                <box-icon name='beer' type='solid' flip='horizontal' color='#d0a70a' ></box-icon>
                <Link className="menuItem" to="/">De Revuelta</Link>
            </div>
            <p className="textoFooter">Projecto Ecommerce 2021 CoderHouse</p>
        </footer>
    );
}

export default Footer;