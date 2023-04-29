import styled from 'styled-components';
import { adaptFonts, other } from '../../constants';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Avatar = styled.img`
  width: 80px;
  aspect-ratio: 1 / 1;
  border: ${other.border};
  border-radius: 50%;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled.p`
  ${adaptFonts.sm}
`;

export const Email = styled.a`
  ${adaptFonts.sm}
`;

export const Button = styled.button`
  display: inline-block;
  ${adaptFonts.sm}
`;
