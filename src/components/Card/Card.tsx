import React from 'react';

import './styles.css';

interface CardProps {
    className?: String,
    title: String,
    hasCreateButton?: boolean,
    children?: any
}

const Card = ({ className, title, hasCreateButton, children }: CardProps) => {
    return(
        <div className={`card ${className ? className : ''}`}>
            <div className="card-header">
                <span>{title}</span>
                { hasCreateButton && (
                    <div className="create-button">
                        <span>+</span>
                    </div>
                )}
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default Card;