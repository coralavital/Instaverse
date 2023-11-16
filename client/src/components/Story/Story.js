import React from 'react';
import { Card, Tooltip, Typography, Image } from 'antd';
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from '@ant-design/icons';

import styles from './styles';

const { Meta } = Card;
const { Link, Paragraph, Text } = Typography;

function Story({ story }) {
  return (
    <Card
      style={styles.card}
      cover={<Image src={Story.image} />}
      actions={[
        <div style={styles.actions}>
          <Tooltip placement='top' title='Like' color='magenta'>
            <HeartTwoTone twoToneColor='magenta' />
            &nbsp; {story.likes} &nbsp;
          </Tooltip>
        </div>,
        <Tooltip placement='top' title='Edit'>
          <EditOutlined onClick={() => {}} />
        </Tooltip>,
        <Tooltip placement='top' title='Like' color='red'>
          <DeleteTwoTone twoToneColor='red' onClick={() => {}} />
        </Tooltip>,
      ]}
    ></Card>
  );
}

export default Story;
