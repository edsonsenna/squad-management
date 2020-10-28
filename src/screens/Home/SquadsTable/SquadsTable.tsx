import React, { MouseEvent, useState } from 'react';
import { FaPen, FaShareAlt, FaSort, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Card from '../../../components/Card/Card';
import { Squad, StateProps } from '../../../shared/Interfaces';
import './SquadsTable.css';

interface SortProps {
  direction: String,
  fieldToSort: String;
}

const SquadsTable = () => {

  const history = useHistory();
  const squads = useSelector((state: StateProps) => state.squads);
  const [ sortBy, setSortBy ] = useState<SortProps>({ direction: 'asc', fieldToSort: 'name'});
  const dispatch = useDispatch();

  const handleEditClick = (event: MouseEvent, squad: Squad) => {
    event.preventDefault();
    history.push('/create', { squad })
  }

  const handleDeleteClick = (event: MouseEvent, squad: Squad) => {
    event.preventDefault();
    if(window.confirm('Are you sure about deleting this squad?')) {
      dispatch({ type: 'DELETE_SQUAD', squad });
    }
  }

  const renderSquadsList = () => {
    if (squads.length) {
      const order = sortBy.direction === 'asc' ? -1 : 1;
      const sortedSquads = squads.sort((firstItem, secondItem) => {
          const firstFieldToCompare = sortBy.fieldToSort === 'name' ? firstItem.name : firstItem.description;
          const secondFieldToCompare = sortBy.fieldToSort === 'name' ? secondItem.name : secondItem.description;
          return firstFieldToCompare.toLocaleLowerCase() < secondFieldToCompare.toLocaleLowerCase() ? order : (order * -1);
        }
      )
      return sortedSquads.map((squad) => (
        <tr key={`${squad.id}`} className='item-row'>
          <td className='name-cell'>{squad.name}</td>
          <td className='description-cell'>
            <span>{squad.description}</span>
            <div className='row-actions'>
              <div className="tooltip" onClick={(event) => handleDeleteClick(event, squad)}>
                <FaTrash fontWeight={200} className='action-icon delete-icon' />
                <span className="tooltiptext">Delete</span>
              </div>
              <div className="tooltip">
                <FaShareAlt className='action-icon' />
                <span className="tooltiptext">Share</span>
              </div>
              <div className="tooltip" onClick={(event) => handleEditClick(event, squad)}>
                <FaPen className='action-icon' />
                <span className="tooltiptext">Edit</span>
              </div>
            </div>
          </td>
        </tr>
      ));
    }
    return '';
  };

  const onSortClick = (fieldToSort: String) => {
    const direction = sortBy.direction === 'asc' ? 'dsc' : 'asc';
    setSortBy({ direction, fieldToSort}) 
  }

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
              <FaSort data-testid="name-sort-icon" className='sort-icon' onClick={() => onSortClick('name')}/>
              <div className='divider'></div>
            </th>
            <th id='description-header-cell' onClick={() => onSortClick('description')} className='table-head'>
              <span>Description</span>
              <FaSort className='sort-icon' />
            </th>
          </tr>
        </thead>
        <tbody data-test="squads-list-table">{renderSquadsList()}</tbody>
      </table>
    </Card>
  );
};

export default SquadsTable;
