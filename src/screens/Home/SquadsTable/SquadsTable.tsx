import React, { MouseEvent } from 'react';
import { FaPen, FaShareAlt, FaSort, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import { Squad, StateProps } from '../../../shared/Interfaces';
import './SquadsTable.css';

const SquadsTable = () => {

  const history = useHistory();
  const squads = useSelector((state: StateProps) => state.squads);
  const dispatch = useDispatch();

  const handleEditClick = (event: MouseEvent, squad: Squad) => {
    event.preventDefault();
    history.push('/create', { squad })
  }

  const handleDeleteClick = (event: MouseEvent, squad: Squad) => {
    event.preventDefault();
    if(window.confirm('Are you about deleting this squad?')) {
      dispatch({ type: 'DELETE_SQUAD', squad });
    }
  }

  const renderSquadsList = () => {
    if (squads.length) {
      return squads.map((squad) => (
        <tr key={`${squad.id}`} className='item-row'>
          <td className='name-cell'>{squad.name}</td>
          <td className='description-cell'>
            <span>{squad.description}</span>
            <div className='row-actions'>
              <div className="tooltip">
                <FaTrash fontWeight={200} className='action-icon' onClick={(event) => handleDeleteClick(event, squad)} />
                <span className="tooltiptext">Delete</span>
              </div>
              <div className="tooltip">
                <FaShareAlt className='action-icon' />
                <span className="tooltiptext">Share</span>
              </div>
              <div className="tooltip">
                <FaPen className='action-icon' onClick={(event) => handleEditClick(event, squad)}/>
                <span className="tooltiptext">Edit</span>
              </div>
            </div>
          </td>
        </tr>
      ));
    }
    return '';
  };

  return (
    <Card
      className='squads-card'
      title='My Teams'
      hasCreateButton={true}
      createRoute='create'
    >
      <table>
        <thead>
          <tr className='header-row'>
            <th id='name-header-cell' className='table-head'>
              <span>Name</span>
              <FaSort className='sort-icon' />
              <div className='divider'></div>
            </th>
            <th id='description-header-cell' className='table-head'>
              <span>Description</span>
              <FaSort className='sort-icon' />
            </th>
          </tr>
        </thead>
        <tbody>{renderSquadsList()}</tbody>
      </table>
    </Card>
  );
};

export default SquadsTable;
