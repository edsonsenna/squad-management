import React from 'react';

import './MostLessPickedCard.css';

const MostLessPickedCard = () => {
    return (
        <div className="most-less-card">
            <div className="middle"></div>
            <div className="middle-circle"></div>
            <div className="most-picked-item">
                <span className="less-picked-title"><b>Most picked player</b></span>
                <div className="most-picked-border">
                    <div className="most-picked-initials">
                        <span>EJ</span>
                    </div>
                </div>
                <div className="most-picked-percentage">
                    <b>75%</b>
                </div>
            </div>
            <div className="less-picked-item">
                <span className="less-picked-title"><b>Less picked player</b></span>
                <div className="less-picked-border">
                    <div className="less-picked-initials">
                        <span>CJ</span>
                    </div>
                </div>
                <div className="less-picked-percentage">
                    <b>25%</b>
                </div>
            </div>
        </div>
    )
}

export default MostLessPickedCard;