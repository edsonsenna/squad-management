import React from 'react';
import { FaSort } from 'react-icons/fa';

import Card from '../../components/Card/Card';
import './styles.css';

const Home = () => {
    return (
        <div>
            <Card title="My Teams" hasCreateButton={true}>
                <table>
                    <thead>
                        <tr>
                            <th id="name-column" className="table-head"><span>Name</span><FaSort className="sort-icon"/></th>
                            <th id="description-column" className="table-head"><span>Description</span><FaSort className="sort-icon" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="name-cell">Barcelona</td>
                            <td className="description-cell">Barcelona Squad</td>
                        </tr>
                    </tbody>
                </table>
            </Card>
        </div>
    );
}

export default Home;