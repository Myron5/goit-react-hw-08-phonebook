import { useNavigate } from 'react-router-dom';
import { SectionBox } from 'components/Other';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <SectionBox>
      <p>... Сторінку не знайдено 😪 </p>
      <button onClick={() => navigate('/', { replace: true })}>
        Повернутись на домашню
      </button>
    </SectionBox>
  );
};

export default NotFound;
