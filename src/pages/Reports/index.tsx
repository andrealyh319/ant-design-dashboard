import { DatePicker, Space } from 'antd';
import React from 'react';
import GenerateReports from './GenerateReports';
import ReportHistory from './ReportHistory';

const App: React.FC = () => (
    <>
        <GenerateReports />
        <br />
        <ReportHistory />
    </>
);

export default App;