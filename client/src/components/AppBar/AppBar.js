import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Image, Typography, Button, Avatar } from 'antd';
import Logo from '../../images/instaverse.png';
import styles from './styles';

const { Title } = Typography;
const { Header } = Layout;

export default function AppBar() {
  const user = null;

  return (
    <div>
      <Header style={styles.header}>
        <Link to='/'>
          <div style={styles.homeLink}>
            <Image width={30} preview={false} src={Logo} />
            &nbsp;
            <Title style={styles.title}>Instaverse</Title>
          </div>
        </Link>
        {!user ? (
          <Link to='/authform'>
            <Button htmlType='button' style={styles.login}>Log in</Button>
          </Link>
        ) : (
          <div style={styles.userInfo}>
            <Avatar style={styles.avatar} alt='username' size='Large'>U</Avatar>
            <Title>Jhon Doe</Title>
            <Button htmlType='button'>Log out</Button>
          </div>
        )}
      </Header>
    </div>
  );
}
