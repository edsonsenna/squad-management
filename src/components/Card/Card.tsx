import React from 'react';
import { Link } from 'react-router-dom';

import './Card.css';

interface CardProps {
    className?: String,
    title: String,
    hasCreateButton?: boolean,
    children?: any,
    createRoute?: string
}

const Card = ({ className, title, hasCreateButton, children, createRoute }: CardProps) => {
    return(
        <div className={`card ${className ? className : ''}`}>
            <div className="card-header">
                <span>{title}</span>
                { hasCreateButton && (
                    <Link to={createRoute ? createRoute : ''}>
                        <div className="create-button">
                            <span>+</span>
                        </div>
                    </Link>
                )}
            </div>
            <div className="card-content">
                {children}
            </div>
        </div>
    )
}

export default Card;