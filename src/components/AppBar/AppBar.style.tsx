import { adaptFonts, colors, other } from '../../constants';
import styled from 'styled-components';

export const Nav = styled.nav`
  background-color: #74992e;
  box-shadow: ${other.boxShadow};
`;
export const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px 40px;
`;

export const LogoTab = styled.li`
  mergin-right: 100px;
`;

export const Tab = styled.li`
  color: ${colors.txtWhite};
  ${adaptFonts.sm}
`;

export const UserMenuTab = styled.li`
  margin-left: auto;
  color: ${colors.txtWhite};
  ${adaptFonts.md}
`;
