import React from 'react';
import Logo from '../../assets/img/logo.png';
import Card from '../Card/Card';

import './styles.css';

const Scaffold = () => {
    return (
        <div className="root">
            <header>
                <div className="company-info">
                    <img className="company-logo" src={Logo} alt="Company Logo"></img>
                    <span className="company-name">Squad Management Tool</span>
                </div>
                <div className="user-info">
                    <span>John Doe</span>
                    <div className="user-logo">
                        <span>JD</span>
                    </div>
                </div>
            </header> 
            <div className="content">
                Scaffold rocks!
                <Card title="My Teams" hasCreateButton={true}></Card>
            </div>
            <footer>2020 - All rights reserved.</footer>
        </div>
    );
}

export default Scaffold;