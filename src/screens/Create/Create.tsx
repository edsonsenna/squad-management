import React, { KeyboardEvent, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import Card from '../../components/Card/Card';
import './Create.css';
import { PlayerProps } from '../../shared/Interfaces';

const API_URL = 'https://api-football-v1.p.rapidapi.com/v2/players/search/';

const defaultValues = {
    type: "real"
}

const Create = () => {

    const { register, handleSubmit } = useForm({ defaultValues });

    const [debounceTime, setDebounceTime] = useState(setTimeout(() => {}, 300));
    const [players, setPlayers] = useState([]);

    const onSubmit = (data: Object) => {
        console.log('Handle Submit!!', data);
    }

    const handleSearch = (event: KeyboardEvent<HTMLInputElement>) => {

        if(debounceTime) {
            clearTimeout(debounceTime);
            setDebounceTime(setTimeout(() => {}, 300));
        }

        const name = event?.currentTarget?.value;

        if(name) {
            
            setDebounceTime(setTimeout(() => {
                axios.get(`${API_URL}${name}`, { headers: {
                    'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
                    'x-rapidapi-key': '4bca5775a1msh257b6f1f625f7d4p1449eajsnc70830939a6f'
                }})
                .then((results) => { 
                    console.log('[FetchingData]', results)
                    setPlayers(results.data.api.players);
                })
                .catch((err) => console.error);
            }, 300));
        }
        
        
    }

    const displayPlayersList = () => {

        if(players?.length) {
            return (players.map((player: PlayerProps) => (
                <div key={`${player.player_id}`} className="search-results-item" draggable="true">
                    <div className="first-item-row">
                        <div>
                            <span className="name-label"><b>Name:</b></span>&nbsp;<span className="name-value">{player.player_name}</span>
                        </div>
                        <div>
                            <span className="age-label"><b>Age:</b></span>&nbsp;<span className="age-value">{player.age}</span>
                        </div>
                    </div>
                    <div className="second-item-row">
                        <span className="nationality-label"><b>Nationality:</b></span>&nbsp;<span className="nationatily-value">{player.nationality}</span>
                    </div>
                </div>
            )))
        }
    }

    return (
        <Card title="Create your team">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="team-info-title">
                    <b>TEAM INFORMATION</b>
                </div>
                <div className="team-info-row">
                    <div className="first-column">
                        <div className="input-field">
                            <label htmlFor="name"><b>Team Name</b></label>
                            <input id="name" name="name" ref={register} type="text" placeholder="Insert team name" className="team-name-input"/>
                        </div>

                        <div className="editable-field">
                            <div className="editable-label"><b>Description</b></div>
                            <textarea id="description" name="description" ref={register} className="description-input"></textarea>
                        </div>
                    </div>

                    <div className="second-column">

                        <div className="input-field">
                            <label htmlFor="website"><b>Team Website</b></label>
                            <input id="website" name="website" ref={register} type="text" placeholder="http://myteam.com" className="team-website-input"/>
                        </div>

                        <div className="radio-group-wrapper">
                            <div className="team-type-label"><b>Team Type</b></div>
                            <div className="radio-group">
                                <input type="radio" name="type" id="real" ref={register} value="real"/>
                                <label className="type-label real-option-label" htmlFor="real">Real</label>
                                <input type="radio" name="type" id="fantasy" ref={register} value="fantasy"/>
                                <label className="type-label fantasy-option-label" htmlFor="fantasy">Fantasy</label>
                            </div>
                        </div>

                        <div className="editable-field">
                            <div className="editable-label"><b>Tags</b></div>
                            {/* <div contentEditable="true" className="tags-input">
                                <span>Test</span>Tags
                            </div> */}
                            <textarea id="tags" name="tags" ref={register} className="tags-input"></textarea>
                        </div>
                    </div>
                </div>
                <div className="squad-config-title"><b>CONFIGURE SQUAD</b></div>
                <div className="squad-config-row">
                    <div className="first-column">
                        <div className="squad-formation">
                            <label htmlFor="team-formation"><b>Formation</b></label>
                            <select name="team-formation" id="team-formation">
                                <option value="">3 - 2 - 2 - 3</option>
                                <option value="">3 - 2 - 3 - 1</option>
                                <option value="">3 - 4 - 3</option>
                                <option value="">3 - 5 - 2</option>
                                <option value="">4 - 2 - 3 - 1</option>
                                <option value="">4 - 3 - 1 - 1</option>
                                <option value="">4 - 3 - 2</option>
                                <option value="">4 - 4 - 2</option>
                                <option value="">4 - 5 - 1</option>
                                <option value="">5 - 4 -1</option>
                            </select>

                            <div className="squad-formation-field">
                                <div className="squad-middle-circle"></div>
                                <div className="squad-middle"></div>
                                <div className="squad-spots">
                                    <div className="squad-spots-row">
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="squad-spots-row">
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="squad-spots-row">
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="squad-spots-row">
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="squad-spots-row">
                                        <div className="spots-col">
                                            <div className="spot-border">
                                                <div className="spot-text">
                                                    <span>+</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="second-column">
                        <div className="input-field">
                            <label htmlFor="search-name"><b>Search Players</b></label>
                            <input id="search-name" type="text" placeholder="Player name" className="search-name-input" onKeyUp={handleSearch}/>
                        </div>
                        <div className="search-results">
                            { displayPlayersList() }
                        </div>
                    </div>
                </div>
                <div className="actions-row">
                    <button type="submit" className="submit-button">
                        <b>Save</b>
                    </button> 
                </div> 
            </form>
        </Card>
    )
}

export default Create;