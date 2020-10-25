import React from 'react';

import Card from '../../../components/Card/Card';
import './TopFiveCard.css';

const TopFiveCard = () => {
  return (
    <Card className='top-five-card' title='Top 5'>
      <div className='top-five-content'>
        <div className='highest-age'>
          <span className='highest-age-title'>
            <b>Highest avg age</b>
          </span>
          <div className='highest-age-list'>
            <div className='highest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='highest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='highest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='highest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='highest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='highest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='highest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='highest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='highest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='highest-age-value'>
                <b>31.9</b>
              </span>
            </div>
          </div>
        </div>
        <div className='lowest-age'>
          <span className='lowest-age-title'>
            <b>Lowest avg age</b>
          </span>
          <div className='lowest-age-list'>
            <div className='lowest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='lowest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='lowest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='lowest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='lowest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='lowest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='lowest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='lowest-age-value'>
                <b>31.9</b>
              </span>
            </div>
            <div className='lowest-age-item'>
              <span className='team-name'>Inter Milan</span>
              <span className='lowest-age-value'>
                <b>31.9</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopFiveCard;
