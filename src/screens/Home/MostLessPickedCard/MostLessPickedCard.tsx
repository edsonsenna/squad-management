import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { PlayerProps, StateProps } from '../../../shared/Interfaces';

import './MostLessPickedCard.css';

interface PickedsProps {
    id?: Number;
    count: number,
    player: PlayerProps
}

const MostLessPickedCard = () => {

    const squads = useSelector((state: StateProps) => state.squads);
    const [ mostPicked, setMostPicked ] = useState<PickedsProps | null>(null);
    const [ lessPicked, setLessPicked ] = useState<PickedsProps | null>(null);
    const [ totalPlayers, setTotalPlayers ] = useState<Number>(0);

    useEffect(() => {
        const calculateMostLessPicked = () => {
            let pickeds: PickedsProps[] = [];
            let totalChoices = 0;
            squads.forEach(squad => {
                squad.players.forEach(playerInfo => {
                    totalChoices++;
                    const findPlayerIndex = pickeds.findIndex((value) =>  value.id === playerInfo.player.player_id);
                    if(findPlayerIndex > 0) {
                        pickeds[findPlayerIndex].count++;
                    } else {
                        pickeds.push({
                            id: playerInfo.player.player_id,
                            count: 1,
                            player: playerInfo.player
                        });
                    }
                })
            });
            setTotalPlayers(totalChoices);
            pickeds = pickeds.sort((firstItem, secondItem) => firstItem.count < secondItem.count ? -1 : 1);
            setLessPicked(pickeds[0]);
            setMostPicked(pickeds[pickeds.length - 1]);
        }
        calculateMostLessPicked();
    }, [squads]);

    
    const getMostPickedInitials = () => {
        if (mostPicked?.player) {
            const splittedName = mostPicked.player.player_name.split(/\s/g);
            const initials = `${splittedName[0] ? splittedName[0][0] : ''}${splittedName[1] ? splittedName[1][0] : ''}`;
            return initials;
        }
        return '-';
    }
    const getMostPickedPercentage = () => {
        if(mostPicked?.count) {
            return ((mostPicked.count / Number(totalPlayers)) * 100).toFixed(0);
        }
        return '0';
    }
    const getLessPickedInitials = () => {
        if (lessPicked?.player) {
            const splittedName = lessPicked.player.player_name.split(/\s/g);
            const initials = `${splittedName[0] ? splittedName[0][0] : ''}${splittedName[1] ? splittedName[1][0] : ''}`;
            return initials;
        }
        return '-';
    }
    const getLessPickedPercentage = () => {
        if(lessPicked?.count) {
            return ((lessPicked.count / Number(totalPlayers)) * 100).toFixed(0);
        }
        return '0';
    }

    return (
        <div className="most-less-card">
            <div className="middle"></div>
            <div className="middle-circle"></div>
            <div className="most-picked-item">
                <span className="less-picked-title"><b>Most picked player</b></span>
                <div className="most-picked-border">
                    <div className="most-picked-initials" data-testid="most-picked-initials">
                        <span>{getMostPickedInitials()}</span>
                    </div>
                </div>
                <div className="most-picked-percentage" data-testid="most-picked-percentage">
                    <b>{getMostPickedPercentage()}%</b>
                </div>
            </div>
            <div className="less-picked-item">
                <span className="less-picked-title"><b>Less picked player</b></span>
                <div className="less-picked-border">
                    <div className="less-picked-initials" data-testid="less-picked-initials">
                        <span>{getLessPickedInitials()}</span>
                    </div>
                </div>
                <div className="less-picked-percentage" data-testid="less-picked-percentage">
                    <b>{getLessPickedPercentage()}%</b>
                </div>
            </div>
        </div>
    )
}

export default MostLessPickedCard;