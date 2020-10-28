import React, { DragEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import { ErrorMessage } from '@hookform/error-message';

import Card from '../../components/Card/Card';
import './Create.css';
import { PlayerProps, Squad, SquadPlayerProps } from '../../shared/Interfaces';

const API_URL = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

const defaultValues = {
  id: '',
  name: '',
  description: '',
  website: '',
  tags: '',
  type: 'real',
  formation: '3-2-2-3'
};

type FormData = {
  id: String;
  name: String;
  description: String;
  website: String;
  tags: String;
  type: String;
  formation: String;
};

interface CreateProps {
  squad?: Squad;
}

interface TeamFormationProps {
  row: Number;
  column: Number;
  player: PlayerProps;
}

interface RouteProps {
    squad?: Squad
}

const Create = () => {
  const { register, handleSubmit, watch, reset, errors } = useForm<FormData>({ defaultValues });
  const teamFormation = watch('formation');

  const [debounceTime, setDebounceTime] = useState(setTimeout(() => {}, 300));
  const [players, setPlayers] = useState<PlayerProps[]>([]);
  const [teamFormationPlayers, setTeamFormationPlayers] = useState<
    SquadPlayerProps[]
  >([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation<RouteProps>();

  useEffect(() => {
    const state: RouteProps = location.state;
    if(state) {
        const squad = state.squad;
        reset({
            id: squad?.id,
            name: squad?.name,
            description: squad?.description,
            website: squad?.website,  
            tags: squad?.tags,
            type: squad?.type,
            formation: squad?.formation
        });
        setTeamFormationPlayers(squad?.players ? squad.players : []);
    }
  }, [location.state, reset]);


  const onSubmit = (data: any) => {
    if(data.id) {
        dispatch({ type: 'UPDATE_SQUAD', squad: {...data, players: teamFormationPlayers} });
    } else {
        data.id = v4();
        dispatch({ type: 'ADD_SQUAD', squad: {...data, players: teamFormationPlayers} });
    }
    history.push('/');
  };

  const handleFormationChange = () => {
      setTeamFormationPlayers([]);
  }

  const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {
    if (debounceTime) {
      clearTimeout(debounceTime);
      setDebounceTime(setTimeout(() => {}, 300));
    }

    const name = event?.currentTarget?.value;

    if (name) {
      setDebounceTime(
        setTimeout(() => {
            axios
              .get(`${API_URL}${name}`, {
                headers: {
                  'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                  'x-rapidapi-key':
                    '4bca5775a1msh257b6f1f625f7d4p1449eajsnc70830939a6f',
                },
              })
              .then((results) => {
                setPlayers(results.data.api.players);
              })
              .catch((err) => console.error);
        }, 300)
      );
    }
  };

  const onDrop = (ev: DragEvent, row: Number, column: Number) => {
    ev.preventDefault();
    var player = JSON.parse(ev.dataTransfer.getData('player'));
    const filteredPlayer = teamFormationPlayers.filter(
      (position: TeamFormationProps) => {
        return (
          position.row !== row ||
          (position.column !== column && position.row === row)
        );
      }
    );
    filteredPlayer.push({ row, column, player });
    setTeamFormationPlayers(filteredPlayer);
  };

  const searchPlayerInPosition = (row: Number, column: Number) => {
    const playerPosition = teamFormationPlayers.find(
      (position) => position.row === row && position.column === column
    );
    if (playerPosition?.player) {
      return playerPosition?.player;
    }
    return null;
  };

  const searchPlayerInitialsInPosition = (row: Number, column: Number) => {
    const playerPosition = teamFormationPlayers.find(
      (position) => position.row === row && position.column === column
    );
    if (playerPosition?.player) {
      const splittedName = playerPosition.player.player_name.split(/\s/g);
      const initials = `${splittedName[0] ? splittedName[0][0] : ''}${splittedName[1] ? splittedName[1][0] : ''}`;
      return initials;
    }
    return '+';
  };

  const onDragOver = (ev: DragEvent) => {
    ev.preventDefault();
  };

  const onDragStart = (ev: DragEvent, player: PlayerProps) => {
    ev.dataTransfer.setData('player', JSON.stringify(player));
  };

  const isPlayerSelected = (player: PlayerProps) => {
    const playerIndex = teamFormationPlayers.findIndex(playerInfo => playerInfo.player.player_id === player.player_id);
    return playerIndex >= 0;
  }

  const displayPlayersList = () => {
    if (players?.length) {
      return players.map((player: PlayerProps) => (
        <div
          key={`${player.player_id}`}
          className='search-results-item'
          style={{ cursor: isPlayerSelected(player) ? 'not-allowed' : 'pointer', color: isPlayerSelected(player) ? 'grey' : 'inherit'}}
          draggable={ isPlayerSelected(player) ? 'false' : 'true'}
          onDragStart={(event) => onDragStart(event, player)}
        >
          <div className='first-item-row'>
            <div>
              <span className='name-label'>
                <b>Name:</b>
              </span>
              &nbsp;<span className='name-value'>{player.player_name}</span>
            </div>
            <div>
              <span className='age-label'>
                <b>Age:</b>
              </span>
              &nbsp;<span className='age-value'>{player.age}</span>
            </div>
          </div>
          <div className='second-item-row'>
            <span className='nationality-label'>
              <b>Nationality:</b>
            </span>
            &nbsp;
            <span className='nationatily-value'>{player.nationality}</span>
          </div>
        </div>
      ));
    }
  };

  const displayColumn = (row: Number, column: Number) => {
    return (
      <div
        key={`row_${row}_col_${column}`}
        className='spots-col'
        onDrop={(event) => onDrop(event, row, column)}
        onDragOver={onDragOver}
      >
        <div className='spot-border'>
          <div className='spot-text'>
            <span>{searchPlayerInitialsInPosition(row, column)}</span>
          </div>
        </div>
        {
          searchPlayerInPosition(row, column) && 
            <span className="tooltiptext">{searchPlayerInPosition(row, column)?.player_name}</span>
        }
        
      </div>
    );
  };

  const displaySpots = () => {
    let formationStringArr = `${teamFormation}`.split('-');
    if (formationStringArr?.length) {
      let formationArr = formationStringArr.map((numberString) =>
        Number(numberString)
      );
      return formationArr.map((number, rowIndex) => {
        let columns = [];
        for (let spotIndex = 1; spotIndex <= number; spotIndex++) {
          columns.push(spotIndex);
        }
        return (
          <div key={`row_${rowIndex + 1}`} className='squad-spots-row'>
            {columns.map((column) => displayColumn(rowIndex + 1, column))}
          </div>
        );
      });
    }
    return '';
  };

  return (
    <Card title='Create your team'>
      <form onSubmit={handleSubmit(onSubmit)}>
          <input type="text" name="id" ref={register} hidden/>
        <div className='team-info-title'>
          <b>TEAM INFORMATION</b>
        </div>
        <div className='team-info-row'>
          <div className='first-column'>
            <div className='input-field'>
              <label htmlFor='name'>
                <b>Team Name</b>
              </label>
              <input
                id='name'
                name='name'
                ref={register({
                  required: "This is a required field."
                })}
                style={{ borderColor: errors?.name ? 'red' : '#dadada' }}
                type='text'
                placeholder='Insert team name'
                className='team-name-input'
              />
              <ErrorMessage errors={errors} name="name" render={({message}) => <p className='error-message'>{message}</p> }/>
            </div>

            <div className='editable-field'>
              <div className='editable-label'>
                <b>Description</b>
              </div>
              <textarea
                id='description'
                name='description'
                ref={register}
                className='description-input'
              ></textarea>
            </div>
          </div>

          <div className='second-column'>
            <div className='input-field'>
              <label htmlFor='website'>
                <b>Team Website</b>
              </label>
              <input
                id='website'
                name='website'
                ref={register({
                  required: "This is a required field.",
                  pattern: /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/i
                })}
                style={{ borderColor: errors?.website ? 'red' : '#dadada' }}
                type='text'
                placeholder='http://myteam.com'
                className='team-website-input'
              />
              <ErrorMessage errors={errors} name="website" render={({message}) => <p className='error-message'>{message ? message : 'The website address must be a valid url.'}</p> }/>
            </div>

            <div className='radio-group-wrapper'>
              <div className='team-type-label'>
                <b>Team Type</b>
              </div>
              <div className='radio-group'>
                <input
                  type='radio'
                  name='type'
                  id='real'
                  ref={register}
                  value='real'
                />
                <label className='type-label real-option-label' htmlFor='real'>
                  Real
                </label>
                <input
                  type='radio'
                  name='type'
                  id='fantasy'
                  ref={register}
                  value='fantasy'
                />
                <label
                  className='type-label fantasy-option-label'
                  htmlFor='fantasy'
                >
                  Fantasy
                </label>
              </div>
            </div>

            <div className='editable-field'>
              <div className='editable-label'>
                <b>Tags</b>
              </div>
              <textarea
                id='tags'
                name='tags'
                ref={register}
                className='tags-input'
              ></textarea>
            </div>
          </div>
        </div>
        <div className='squad-config-title'>
          <b>CONFIGURE SQUAD</b>
        </div>

        {/* <div>{ JSON.stringify(teamFormationPlayers)}</div> */}
        <div className='squad-config-row'>
          <div className='first-column'>
            <div className='squad-formation'>
              <label htmlFor='formation'>
                <b>Formation</b>
              </label>
              <select name='formation' id='formation' ref={register} onChange={handleFormationChange}>
                <option value='3-2-2-3'>3 - 2 - 2 - 3</option>
                <option value='1-3-2-3'>3 - 2 - 3 - 1</option>
                <option value='3-4-3'>3 - 4 - 3</option>
                <option value='2-2-3-3'>3 - 5 - 2</option>
                <option value='1-3-2-4'>4 - 2 - 3 - 1</option>
                <option value='1-1-3-4'>4 - 3 - 1 - 1</option>
                <option value='2-3-4'>4 - 3 - 2</option>
                <option value='2-4-4'>4 - 4 - 2</option>
                <option value='1-2-3-4'>4 - 5 - 1</option>
                <option value='2-3-1-4'>5 - 4 - 1</option>
              </select>

              <div className='squad-formation-field'>
                <div className='squad-middle-circle'></div>
                <div className='squad-middle'></div>
                <div className='squad-spots'>
                  {displaySpots()}
                  <div className='squad-spots-row'>
                    <div
                      className='spots-col'
                      onDrop={(event) => onDrop(event, 5, 1)}
                      onDragOver={onDragOver}
                    >
                      <div className='spot-border'>
                        <div className='spot-text'>
                        <span>{searchPlayerInPosition(5, 1)}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='second-column'>
            <div className='input-field'>
              <label htmlFor='search-name'>
                <b>Search Players</b>
              </label>
              <input
                id='search-name'
                data-testid='search-name'
                type='text'
                placeholder='Player name'
                className='search-name-input'
                onKeyUp={handleSearch}
              />
            </div>
            <div data-testid='search-results' className='search-results'>{displayPlayersList()}</div>
          </div>
        </div>
        <div className='actions-row'>
          <button type='submit' className='submit-button'>
            <b>Save</b>
          </button>
        </div>
      </form>
    </Card>
  );
};

export default Create;
