import React, { ReactNode } from 'react';
import { Card } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

interface AppProps {
  content: ReactNode;
  title: string;
}

const App: React.FC<AppProps> = (props) => {
  return (
    <>
      <br />
      <Card
        style={{ width: '100%' }}
        title={props.title}
        extra={<a href="#"><MoreOutlined /></a>}
      >
        {props.content}
      </Card>
    </>
  );
};

export default App;
