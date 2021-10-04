import React, { useEffect } from 'react';
import { List, Typography, Row, Col } from 'antd';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { LoadingStatus, toggledEntity, selectError, selectLoadingStatus, selectSelectedEntity } from './entitiesListSlice';
import { fetchEntities } from './fetch';
import { selectFilteredEntities } from './selectFilteredEntities';
import { Entity } from '../../interfaces/Entity';
import { excludeUnnecessaryFields } from './utils';
import { EntityImage } from './EntityImage';

const { Title } = Typography;

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
                    <EntityImage selectedEntity={selectedEntity} />

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
