import React from 'react';

import Card from '../../components/Card/Card';
import './Create.css';

const Create = () => {
    return (
        <Card title="Create your team">
            <div className="team-info-title">
                <b>TEAM INFORMATION</b>
            </div>
            <div className="team-info-row">
                <div className="first-column">
                    <div className="input-field">
                        <label htmlFor="team-name"><b>Team Name</b></label>
                        <input type="text" placeholder="Insert team name" className="team-name-input"/>
                    </div>

                    <div className="editable-field">
                        <div className="editable-label"><b>Description</b></div>
                        <div contentEditable="true" className="description-input">
                            Teste
                        </div>
                    </div>
                </div>

                <div className="second-column">

                    <div className="input-field">
                        <label htmlFor="team-name"><b>Team Website</b></label>
                        <input type="text" placeholder="http://myteam.com" className="team-website-input"/>
                    </div>

                    <div className="radio-group-wrapper">
                        <div className="team-type-label"><b>Team Type</b></div>
                        <div className="radio-group">
                            <input type="radio" name="team-type" id="real"/>
                            <label className="real-option-label" htmlFor="real">Real</label>
                            <input type="radio" name="team-type" id="fantasy"/>
                            <label htmlFor="fantasy">Fantasy</label>
                        </div>
                    </div>

                    <div className="editable-field">
                        <div className="editable-label"><b>Tags</b></div>
                        <div contentEditable="true" className="tags-input">
                            <span>Test</span>Tags
                        </div>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default Create;