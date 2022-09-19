import type { NextPage } from 'next';
import Header from '../components/header/header';
import styles from '../styles/Home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
};

export default Home;
