import { Select } from 'antd';
import React from 'react';

const handleChange = (value: string) => {
    console.log(`selected ${value}`);
};

const App: React.FC = () => (
    <>
        <Select
            defaultValue="lucy"
            style={{ width: '100%' }}
            onChange={handleChange}
            options={[
                {
                    value: 'jack',
                    label: 'Jack',
                },
                {
                    value: 'lucy',
                    label: 'Lucy',
                },
                {
                    value: 'disabled',
                    disabled: true,
                    label: 'Disabled',
                },
                {
                    value: 'Yiminghe',
                    label: 'yiminghe',
                },
            ]}
        />
    </>
);

export default App;