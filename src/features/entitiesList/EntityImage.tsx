import React from 'react';
import { Entity } from '../../interfaces/Entity';

import { IMAGE_BASE_URL } from './api/api';
import { getEntityId, isCharacter, isPlanet, isStarship } from './utils';

interface Props {
    selectedEntity: Entity;
}

export function EntityImage({ selectedEntity }: Props): JSX.Element | null {
    if (isCharacter(selectedEntity)) {
        return (
            <img src={`${IMAGE_BASE_URL}/characters/${getEntityId(selectedEntity)}.jpg`} alt="" />
        );
    }

    if (isPlanet(selectedEntity)) {
        return (
            <img src={`${IMAGE_BASE_URL}/planets/${getEntityId(selectedEntity)}.jpg`} alt="" />
        );
    }

    if (isStarship(selectedEntity)) {
        return (
            <img src={`${IMAGE_BASE_URL}/starships/${getEntityId(selectedEntity)}.jpg`} alt="" />
        );
    }

    return null;
}
