import React from 'react';
import useDataTable from '../../../components/DataTable/index.js';
import * as constants from './data.js';
import { Button, Card, Col, Row } from 'antd';
import Dropdown from '../../../components/Dropdown';
import { DownloadOutlined } from '@ant-design/icons';


function ShowReportHistory() {
    const {
        DataTable,
        hasSelected,
        currentPage,
        pageSize,
        resetPagination,
    } = useDataTable({
        columns: constants.columns,
        dataSource: constants.data,
        updateEntityPath: 'update-product',
    });

    return (
        <>
            <Card title={
                <>
                    <Row gutter={16} align='middle'>
                        <Col>
                        <span>Report History</span>
                        </Col>
                        <Col span={3}>
                            <Dropdown />
                        </Col>
                    </Row>
                </>
            }
                extra={
                    <>
                        <Button
                            icon={<DownloadOutlined />}
                            type="primary"
                            style={{ float: 'right' }}
                        >
                            Download
                        </Button>
                    </>
                }>
                <DataTable />
            </Card>
        </>
    );
}

export default ShowReportHistory;