import { DatePicker, Space, Row, Col, Button } from 'antd';
import Dropdown from '../../../components/Dropdown';
import React from 'react';
import TitleCard from '../../../components/Cards/TitleCard';
import GridContent from '../../../components/GridContent';

const App: React.FC = () => (
    <TitleCard
        title="Generate Reports"
        content={
            <>
                <GridContent>
                    <Row style={{ marginBottom: '16px' }}><b>Report Type</b></Row>
                    <Row gutter={16}>
                        <Col xs={24} sm={8}>
                            <Dropdown></Dropdown>
                        </Col>
                    </Row>
                    <br />

                    <Row gutter={16}>
                        <Col xs={24} sm={8}>
                            <Row style={{ marginBottom: '16px' }}><b>From Date</b></Row>
                            <DatePicker style={{ width: '100%' }} />
                        </Col>
                        <Col xs={24} sm={8}>
                            <Row style={{ marginBottom: '16px' }}><b>To Date</b></Row>
                            <DatePicker style={{ width: '100%' }} />
                        </Col>
                    </Row>
                    <br />
                    <Row gutter={16} justify="end">
                        <Col span={2}>
                            <Button style={{ width: '100%' }}>Reset</Button>
                        </Col>
                        <Col>
                            <Button type="primary" style={{ width: '100%' }}>Generate</Button>
                        </Col>
                    </Row>
                </GridContent>
            </>
        }
    />
);

export default App;