import React from 'react'
import { Link } from 'react-router-dom'
import {Row, Col, Collection , CollectionItem} from 'react-materialize'
export default props =>(
    <div>
        <Row>
            <Col s={2}>
                <Collection>
                    <CollectionItem href='#'>Alvin</CollectionItem>
                    <CollectionItem href='#' active>Alvin</CollectionItem>
                    <CollectionItem href='#'>Alvin</CollectionItem>
                    <CollectionItem href='#'>Alvin</CollectionItem>
                </Collection>
            </Col>
            <Col s={10} >
                TEste
            </Col>
        </Row>
        
    </div>
)