import React, { useState } from 'react';
import { FaPen, FaShareAlt, FaSort, FaTrash } from 'react-icons/fa';

import Card from '../../../components/Card/Card';
import './styles.css';

const squadsArr = [
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
    {
        id: 1,
        name: 'Barcelona',
        description: 'Barcelona Squad'
    },
]


const SquadsTable = () => {

    const [squads, setSquads] = useState(squadsArr)


    const renderSquadsList = () => {

        if(squads.length) {
        return (
            squads.map(squad => (
            <tr className='item-row'>
                <td className='name-cell'>{squad.name}</td>
                <td className='description-cell'>
                <span>{squad.description}</span>
                <div className='row-actions'>
                    <FaTrash fontWeight={200} className='action-icon' />
                    <FaShareAlt className='action-icon' />
                    <FaPen className='action-icon' />
                </div>
                </td>
            </tr>
            ))
        )
        }
        return '';
    }

    return (
        <Card className="squads-card" title='My Teams' hasCreateButton={true}>
            <table>
              <thead>
                <tr className='header-row'>
                  <th id='name-header-cell' className='table-head'>
                    <span>Name</span>
                    <FaSort className='sort-icon' />
                    <div className="divider"></div>
                  </th>
                  <th id='description-header-cell' className='table-head'>
                    <span>Description</span>
                    <FaSort className='sort-icon' />
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  renderSquadsList()
                }
              </tbody>
            </table>
          </Card>
    )
}

export default SquadsTable;