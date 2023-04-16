import styled from 'styled-components';

import { colors, other } from '../../constants';
import { cunsomFonts } from 'utils';

export const Ul = styled.ul`
  display: inline-flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px 40px;

  margin-top: 35px;
`;

export const Li = styled.li`
  display: flex;

  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;

  padding: 15px 20px;

  box-shadow: ${other.boxShadow};
`;

export const Name = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  width: 200px;

  overflow: hidden;
`;

export const Number = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  width: 200px;

  overflow: hidden;
`;

export const Date = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 8px;

  width: 130px;
  ${cunsomFonts(8, 10, 12)}

  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 15px;
  padding: 8px 15px;
  aspect-ratio: 1 / 1;

  ${cunsomFonts(12, 14, 16)}
  color: ${colors.txtBlack};

  background-color: ${colors.generalBackground};
  border-radius: 50%;
  border: none;
  box-shadow: none;
  transition: box-shadow ${other.animation};

  &:hover,
  &:focus {
    box-shadow: ${other.boxShadow};
  }
`;
