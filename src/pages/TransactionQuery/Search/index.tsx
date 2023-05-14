import { DatePicker, Row, Col, Button, Input } from 'antd';
import Dropdown from '../../../components/Dropdown';
import React from 'react';
import TitleCard from '../../../components/Cards/TitleCard';
import GridContent from '../../../components/GridContent';

const App: React.FC = () => (
    <TitleCard
        title="Search"
        content={
            <>
                <GridContent>
                    <Row gutter={16}>
                        <Col xs={24} sm={8}>
                            <Row style={{ marginBottom: '16px' }}><b>NRIC</b></Row>
                            <Input></Input>
                        </Col>
                        <Col xs={24} sm={8}>
                            <Row style={{ marginBottom: '16px' }}><b>Reference Number</b></Row>
                            <Input></Input>
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
                            <Button type="primary" style={{ width: '100%' }}>Search</Button>
                        </Col>
                    </Row>
                </GridContent>
            </>
        }
    />
);

export default App;