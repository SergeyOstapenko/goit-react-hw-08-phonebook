import homeCover from '../../images/home.jpeg';
import s from './Home.module.css';

const Home = () => {
  const home = homeCover;
  return (
    <div className={s.wrapper}>
      <img className={s.wrapper_img} src={home} alt="cover"></img>
    </div>
  );
};

export default Home;