import { DatePicker, Row, Col, Button, Input, Card } from 'antd';
import Title from 'antd/lib/typography/Title';

function BalanceValue(props) {

    return (
        <>
            <Col span={6} flex='auto'>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '5px' }}>
                    <Row style={{ padding: '5px' }}>
                        <span style={{ color: 'gray' }}>{props.title}</span>
                    </Row>
                    <Row align="middle">
                        <h1>SGD</h1>
                        <Title>{props.value}</Title>
                    </Row>
                </div>
            </Col>
        </>
    )
}

export default BalanceValue;