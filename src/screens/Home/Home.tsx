import React from 'react';

import SquadsTable from './SquadsTable/SquadsTable';
import TopFiveCard from './TopFiveCard/TopFiveCard';
import MostLessPickedCard from './MostLessPickedCard/MostLessPickedCard';
import './Home.css';
import { useSelector } from 'react-redux';

const Home = () => {

  const redux = useSelector(state => state);

  return (
    <div>
      { JSON.stringify(redux) }
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
