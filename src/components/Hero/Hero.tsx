import {
  BackgroundBox,
  Title,
  Txt,
  BackgroundBlur,
  TitleTwo,
  FeatureUl,
  FeatureLi,
  LowerBox,
  LowerBoxTxt,
  FeatureTxt,
} from './Hero.styled';

import { BiMessageAltAdd, BiSearchAlt2, BiCustomize } from 'react-icons/bi';

const iconSize = 70;

export const Hero: React.FC = () => {
  return (
    <>
      {' '}
      <BackgroundBox>
        <BackgroundBlur>
          <Title>Welcome to Phonebook!</Title>
          <Txt>
            Phonebook is a convenient and easy-to-use program that helps you
            organize your contacts and keep them all in one place. With
            Phonebook, you can easily add, edit, and search for contacts, as
            well as group them together for even greater organization.
          </Txt>
        </BackgroundBlur>
      </BackgroundBox>
      <TitleTwo>Features</TitleTwo>
      <FeatureUl>
        <FeatureLi>
          <BiMessageAltAdd size={iconSize} />
          <FeatureTxt>Add new contacts with ease</FeatureTxt>
        </FeatureLi>
        <FeatureLi>
          <BiSearchAlt2 size={iconSize} />
          <FeatureTxt>
            Search for contacts by name, phone number, or email address
          </FeatureTxt>
        </FeatureLi>
        <FeatureLi>
          <BiCustomize size={iconSize} />
          <FeatureTxt>
            Customizable contact fields to suit your needs
          </FeatureTxt>
        </FeatureLi>
      </FeatureUl>
      <LowerBox>
        <img
          src="https://www.eatthe80.com/content/uploads/media/images/health-as-busy-professional-1.jpg"
          alt="business"
        />
        <LowerBoxTxt>
          Whether you're a busy professional, a student, or just someone who
          wants to keep their contacts organized, Phonebook has everything you
          need to manage your contacts efficiently and effectively.
        </LowerBoxTxt>
      </LowerBox>
    </>
  );
};
