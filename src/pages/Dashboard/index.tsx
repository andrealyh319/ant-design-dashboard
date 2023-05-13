import React from 'react';
import { Button, Card, Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import GridContent from '../../components/GridContent/index';

import ChartCard from '../../components/Charts/ChartCard';
import Field from '../../components/Charts/Field';

const topColResponsiveProps = {
    xs: 24,
    sm: 12,
    md: 12,
    lg: 12,
    xl: 6,
    style: { marginBottom: 24 },
};

const AnalyticsDashboard: React.FC = () => (
    <>
        <GridContent>
            <Row gutter={24}>
                <Col {...topColResponsiveProps}>
                    <ChartCard
                        title="total sales"
                        action={
                            <Tooltip title="hi">
                                <InfoCircleOutlined />
                            </Tooltip>
                        }
                        total={() => 6000}

                        contentHeight={46}
                    >
                    </ChartCard>
                </Col>

                <Col {...topColResponsiveProps}>
                    <ChartCard
                        title="total sales"
                        action={
                            <Tooltip title="hi">
                                <InfoCircleOutlined />
                            </Tooltip>
                        }
                        total={() => 6000}
                        footer={
                            <Field label="yolo swag" value="hihihih" />
                        }
                        contentHeight={46}
                    >
                    </ChartCard>
                </Col>

                <Col {...topColResponsiveProps}>
                    <ChartCard
                        title="total sales"
                        action={
                            <Tooltip title="hi">
                                <InfoCircleOutlined />
                            </Tooltip>
                        }
                        total={() => 6000}
                        footer={
                            <Field label="yolo swag" value="hihihih" />
                        }
                        contentHeight={46}
                    >
                    </ChartCard>
                </Col>

                <Col {...topColResponsiveProps}>
                    <ChartCard
                        title="total sales"
                        action={
                            <Tooltip title="hi">
                                <InfoCircleOutlined />
                            </Tooltip>
                        }
                        total={() => 6000}
                        footer={
                            <Field label="yolo swag" value="hihihih" />
                        }
                        contentHeight={46}
                    >
                    </ChartCard>
                </Col>
            </Row>
        </GridContent>
    </>
);

export default AnalyticsDashboard;