import { ReactNode } from 'react';
import styled from 'styled-components';
import { media, colors, adaptFonts, other } from '../../constants';

export const AppBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.generalBackground};
`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  padding-left: 10px;
  padding-right: 10px;

  max-width: 100%;

  @media screen and (min-width: ${media.mobile}) {
    max-width: 320px;
  }

  @media screen and (min-width: ${media.tablet}) {
    max-width: 760px;

    padding-left: 15px;
    padding-right: 15px;
  }

  @media screen and (min-width: ${media.desktop}) {
    max-width: 1200px;

    padding-left: 20px;
    padding-right: 20px;
  }
`;

const SectionBox = styled.section`
  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${media.tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @media screen and (min-width: ${media.desktop}) {
    padding-top: 90px;
    padding-bottom: 90px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  margin-bottom: 20px;
  @media screen and (min-width: ${media.tablet}) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${media.desktop}) {
    margin-bottom: 35px;
  }
`;

const H1 = styled.h1`
  color: ${colors.txtBlack};
  font-size: ${adaptFonts.md};
`;

// -------------------------- Added boxes -------------------------------

export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 50px;

  @media screen and (min-width: ${media.tablet}) {
    flex-direction: row;
  }
`;

export const RightBox = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;

  padding: 30px 30px 40px 30px;
  margin-top: 50px;

  background-color: ${colors.white};
  box-shadow: ${other.boxShadow};
  border: ${other.border};
  border-radius: ${other.borderRadius}px;

  @media screen and (min-width: ${media.tablet}) {
    margin-top: 0px;
  }
`;

export const CenterBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;

// -------------------------- Added finish -------------------------------

export const Section = ({ title, icon, children }: ISectionProps) => {
  return (
    <SectionBox>
      <Container>
        <FlexDiv>
          <H1>{title}</H1>
          {icon}
        </FlexDiv>
        {children}
      </Container>
    </SectionBox>
  );
};

interface ISectionProps {
  title: string;
  icon: ReactNode;
  children: ReactNode | ReactNode[];
}
