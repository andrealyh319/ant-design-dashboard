import React, { useEffect } from 'react';
import { Button, Card, Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

import GridContent from '../../components/GridContent/index';

import FiguresChartCard from '../../components/Cards/FiguresCard';
import Field from '../../components/Cards/Field';
import TabChartCard from '../../components/Cards/TabCard';
import TitleCard from '../../components/Cards/TitleCard';

// import PieChart from '../../components/Charts/PieChart';
import ReactDOM from 'react-dom';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

//ReactDOM.render(<PieChart />, document.getElementById('root'));

const AnalyticsDashboard: React.FC = () => (
  <>
    <GridContent>
      <Row gutter={24}>
        <Col {...topColResponsiveProps}>
          <FiguresChartCard
            title="total sales"
            action={
              <Tooltip title="hi">
                <InfoCircleOutlined />
              </Tooltip>
            }
            total={() => 6000}

            contentHeight={46}
          >
          </FiguresChartCard>
        </Col>

        <Col {...topColResponsiveProps}>
          <FiguresChartCard
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
          </FiguresChartCard>
        </Col>

        <Col {...topColResponsiveProps}>
          <FiguresChartCard
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
          </FiguresChartCard>
        </Col>

        <Col {...topColResponsiveProps}>
          <FiguresChartCard
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
          </FiguresChartCard>
        </Col>
      </Row>

      <TabChartCard />

      <Row gutter={24}>
        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <TitleCard title="Hi"
            content="hell" />
        </Col>

        <Col xl={12} lg={24} md={24} sm={24} xs={24}>
          <TitleCard title="FeeFiFoFum"
            content= "rmb to put piechart when it cn correctly render here"
          />
        </Col>
      </Row>
    </GridContent>
  </>
);

export default AnalyticsDashboard;

