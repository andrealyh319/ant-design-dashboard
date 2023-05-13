import { Card } from 'antd';
import React, { useState } from 'react';
import { MoreOutlined } from '@ant-design/icons';

const tabListNoTitle = [
    {
        key: 'article',
        tab: 'article',
    },
    {
        key: 'app',
        tab: 'app',
    },
    {
        key: 'project',
        tab: 'project',
    },
];

const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
};

const App: React.FC = () => {
    const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

    const onTab2Change = (key: string) => {
        setActiveTabKey2(key);
    };

    return (
        <>
            <Card
                style={{ width: '100%' }}
                tabList={tabListNoTitle}
                activeTabKey={activeTabKey2}
                tabBarExtraContent={<a href="#"><MoreOutlined/></a>}
                onTabChange={onTab2Change}
            >
                {contentListNoTitle[activeTabKey2]}
            </Card>
        </>
    );
};

export default App;