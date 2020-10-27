import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Card from '../../../components/Card/Card';
import { Squad, StateProps } from '../../../shared/Interfaces';
import './TopFiveCard.css';

interface SquadsListProps {
  avgAge: Number,
  squad: Squad
}

const TopFiveCard = () => {

  const squads = useSelector((state: StateProps) => state.squads);
  const [squadsList, setSquadsList] = useState<SquadsListProps[]>([]);
  
  useEffect(() => {
    const calculateAvgAge = () => {

      const filteredSquads:SquadsListProps[] = squads.map(squadInStore => {
        let totalAge = 0
        squadInStore.players.map(playerInfo => totalAge += Number(playerInfo.player.age))
        const avgAge = (totalAge / squadInStore.players.length) || 0;
        return { avgAge, squad: squadInStore };
      });
  
      setSquadsList(filteredSquads);
  
    }
    calculateAvgAge();
  }, [squads]);

  const displayHighestList = () => {
    const sortedArr = squadsList.sort((firstSquad, secondSquad) => firstSquad.avgAge > secondSquad.avgAge ? -1 : 1);
    return sortedArr.map((squad) => (
      <div key={`highest_item_${squad.squad.id}`} className='highest-age-item'>
        <span className='team-name'>{squad.squad.name}</span>
        <span className='highest-age-value'>
          <b>{squad.avgAge.toFixed(1)}</b>
        </span>
      </div>
    ));
  }

  const displayLowestList = () => {
    const sortedArr = squadsList.sort((firstSquad, secondSquad) => firstSquad.avgAge > secondSquad.avgAge ? 1 : -1);
    return sortedArr.map((squad) => (
      <div key={`lowest_item_${squad.squad.id}`} className='lowest-age-item'>
        <span className='team-name'>{squad.squad.name}</span>
        <span className='lowest-age-value'>
          <b>{squad.avgAge.toFixed(1)}</b>
        </span>
      </div>
    ));
  }

  return (
    <Card className='top-five-card' title='Top 5'>
      <div className='top-five-content'>
        <div className='highest-age'>
          <span className='highest-age-title'>
            <b>Highest avg age</b>
          </span>
          <div className='highest-age-list'>
            { displayHighestList()}
          </div>
        </div>
        <div className='lowest-age'>
          <span className='lowest-age-title'>
            <b>Lowest avg age</b>
          </span>
          <div className='lowest-age-list'>
            { displayLowestList() }
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopFiveCard;
