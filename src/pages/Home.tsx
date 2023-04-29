import { Hero } from 'components/Hero/Hero';
import { SectionBox } from 'components/Other';

const Home: React.FC = () => {
  return (
    <SectionBox first={true}>
      <Hero />
    </SectionBox>
  );
};

export default Home;
