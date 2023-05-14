import React from 'react';
import { Tag } from 'antd';

export const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Report Type',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
    sorter: {
      compare: (a, b) => a.qty - b.qty,
      multiple: 1,
    },
  },
  {
    title: 'owner',
    dataIndex: 'owner',
    key: 'owner',
    sorter: {
      compare: (a, b) => a.owner - b.owner,
      multiple: 1,
    },
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: tags => (
      <>
        {tags.map(tag => {
          let color = 'blue';
          if (tag === 'accessory') {
            color = 'volcano';
          } else if (tag === 'clothing') {
            color = 'geekblue';
          } else if (tag === 'jewellery') {
            color = 'green';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
];

export const data = {
  totalElements: 8,
  content: [
    {
      key: '1',
      name: 'Personalized Bar Bracelet',
      description: 'This is a metal bracelet',
      qty: 32,
      owner: 'John Brown',
      category: ['jewellery', 'accessory'],
    },
    {
      key: '2',
      name: 'Handcraft Boots',
      description: 'Vegan-friendly leather',
      qty: 12,
      owner: 'John Green',
      category: ['clothing', 'living'],
    },
    {
      key: '3',
      name: 'Personalized Bar Bracelet',
      description: 'This is a metal bracelet',
      qty: 32,
      owner: 'John Brown',
      category: ['jewellery', 'clothing'],
    },
    // ...  
  ],
};