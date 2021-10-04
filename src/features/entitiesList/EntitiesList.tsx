import React, { useEffect } from 'react';
import { List, Typography, Row, Col } from 'antd';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoadingStatus, toggledEntity, selectError, selectLoadingStatus, selectSelectedEntity } from './entitiesListSlice';
import { fetchEntities } from './fetch';
import { selectFilteredEntities } from './selectFilteredEntities';
import { Entity } from '../../interfaces/Entity';

const { Title } = Typography;

const IMAGE_BASE_URL = 'https://starwars-visualguide.com/assets/img';

const getEntityId = (entity: Entity): string => (
    entity.url.replace(/[^0-9]+/g, '')
);

const excludeUnnecessaryFields = ([field, value]: [field: string, value: string]): boolean => {
    return field !== 'name'
    && field !== 'homeworld'
    && field !== 'films'
    && field !== 'species'
    && field !== 'vehicles'
    && field !== 'starships'
    && field !== 'created'
    && field !== 'edited'
    && field !== 'url'
    && field !== 'pilots'
    && field !== 'residents'
};

const isCharacter = (entity: Entity): boolean => (
    'hair_color' in entity
);

const isPlanet = (entity: Entity): boolean => (
    'terrain' in entity
);

const isStarship = (entity: Entity): boolean => (
    'starship_class' in entity
);

export function EntitiesList(): JSX.Element {
    const loadingStatus = useAppSelector(selectLoadingStatus);
    const error = useAppSelector(selectError);
    const filteredEntitiesList = useAppSelector(selectFilteredEntities);
    const selectedEntity = useAppSelector(selectSelectedEntity);
    const dispatch = useAppDispatch();

    const onSelectEntity = (entity: Entity) => {
        dispatch(toggledEntity(entity));
    };

    useEffect(() => {
        if (loadingStatus === LoadingStatus.idle) {
            dispatch(fetchEntities());
        }
    }, [dispatch, loadingStatus]);

    return (
        <Row justify="center" style={{ marginTop: '50px' }}>
            <Col span={4}>
                {loadingStatus === LoadingStatus.loading && 'loading...'}
                {loadingStatus === LoadingStatus.succeeded && (
                    <List
                        bordered
                        dataSource={filteredEntitiesList}
                        renderItem={entity => (
                            <List.Item onClick={() => onSelectEntity(entity)}>
                                {entity.name}
                            </List.Item>
                        )}
                    />
                )}
                {loadingStatus === LoadingStatus.failed && error}
            </Col>
            <Col span={4} />
            {selectedEntity ? (
                <Col span={4}>
                    {isCharacter(selectedEntity) && (
                        <img src={`${IMAGE_BASE_URL}/characters/${getEntityId(selectedEntity)}.jpg`} alt="" />
                    )}
                    {isPlanet(selectedEntity) && (
                        <img src={`${IMAGE_BASE_URL}/planets/${getEntityId(selectedEntity)}.jpg`} alt="" />
                    )}
                    {isStarship(selectedEntity) && (
                        <img src={`${IMAGE_BASE_URL}/starships/${getEntityId(selectedEntity)}.jpg`} alt="" />
                    )}

                    <Title>{selectedEntity.name}</Title>

                    {Object.entries(selectedEntity)
                        .filter(excludeUnnecessaryFields)
                        .map(([field, value]) => (
                            <div>
                                <span style={{ fontWeight: 700 }}>{field}:</span> {value}
                            </div>
                        )
                    )}
                </Col>
            ) : (
                <Col span={4} />
            )}
        </Row>
    );
}
