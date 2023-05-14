import { DatePicker, Row, Col, Button, Input, Card } from 'antd';

import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import Title from 'antd/lib/typography/Title';
import BalanceValue from '../../../components/BalanceValue';

const App: React.FC = () => (

    <Card title={
        <>
            <Row gutter={16} align='middle'>
                <Col>
                    <span>Search Results</span>
                </Col>
            </Row>
        </>
    }
        extra={
            <>
                <Button icon={<UploadOutlined />} style={{ float: 'right' }}>
                    Upload Statement
                </Button>
            </>
        }
    >
        <Row align='middle'>
            <BalanceValue title="Opening Balance" value="100,000" />
           
            <Col>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title>-</Title>
                </div>
            </Col>

            <BalanceValue title="Debit" value="100,000" />

            <Col>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title>+</Title>
                </div>
            </Col>

            <BalanceValue title="Credit" value="100,000" />

            <Col>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Title>=</Title>
                </div>
            </Col>

            <BalanceValue title="Closing Balance" value="100,000" />

        </Row>
    </Card>
);

export default App;