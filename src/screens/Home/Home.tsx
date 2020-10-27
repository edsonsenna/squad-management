import React from 'react';
import { useSelector } from 'react-redux';

import SquadsTable from './SquadsTable/SquadsTable';
import TopFiveCard from './TopFiveCard/TopFiveCard';
import MostLessPickedCard from './MostLessPickedCard/MostLessPickedCard';
import './Home.css';
import { StateProps } from '../../shared/Interfaces';



const Home = () => {

  const squads = useSelector((state: StateProps) => state.squads);

  return (
    <div>
      <div className='row'>
        <div className='column squads-column'>
          <SquadsTable squadsList={squads}/>
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
