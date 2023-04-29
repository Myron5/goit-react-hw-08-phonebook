import styled from 'styled-components';
import { adaptFonts, colors } from '../../constants';

const backgroundImage =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zg2MTOyM-0tchHlFvewzCcrVt8P8HETeiyBuoZcuNVHabtf7p8iIig48c4-H8S5OLsI&usqp=CAU';

export const BackgroundBox = styled.div`
  aspect-ratio: 25 / 16;

  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BackgroundBlur = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;

  width: 100%;
  height: 100%;
  background-color: transparent;
  backdrop-filter: blur(4px);
`;

export const Title = styled.h1`
  margin-top: 300px;

  color: ${colors.txtWhite};
  ${adaptFonts.lg}
  text-align: center;
`;

export const Txt = styled.p`
  max-width: 700px;

  color: ${colors.txtWhite};
  ${adaptFonts.sm}
  text-align: center;
`;

export const TitleTwo = styled.h2`
  margin-top: 100px;

  color: ${colors.txtBlack};
  ${adaptFonts.md}
  text-align: center;
`;

export const FeatureUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 30px;
  padding: 40px 80px;
`;

export const FeatureLi = styled.li`
  display: inline-flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: center;
  width: 300px;
  height: 140px;
`;

export const FeatureTxt = styled.p`
  margin-top: auto;
  text-align: center;
`;

export const LowerBox = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  padding: 40px 80px;
`;

export const LowerBoxTxt = styled.p`
  padding: 40px 80px;
`;
