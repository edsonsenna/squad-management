import React from 'react';

import SquadsTable from './SquadsTable/SquadsTable';
import TopFiveCard from './TopFiveCard/TopFiveCard';
import MostLessPickedCard from './MostLessPickedCard/MostLessPickedCard';
import './styles.css';

const Home = () => {
  return (
    <div>
      <div className='row'>
        <div className='column squads-column'>
          <SquadsTable />
        </div>
        <div className='column top-five-column'>
          <div className='row'>
            <TopFiveCard />
          </div>
          <div className='row'>
            <MostLessPickedCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
