import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks';

import { FcCellPhone } from 'react-icons/fc';
import { LogoTab, Nav, Ul, Tab, UserMenuTab } from './AppBar.style';

export const AppBar: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Nav>
      <Ul>
        <LogoTab>
          <NavLink to="/">
            <FcCellPhone size={60} />
          </NavLink>
        </LogoTab>
        {!isLoggedIn && (
          <>
            <Tab>
              <NavLink to="/register">SignUp</NavLink>
            </Tab>
            <Tab>
              <NavLink to="/login">SignIn</NavLink>
            </Tab>
          </>
        )}

        {isLoggedIn && (
          <>
            <Tab>
              <NavLink to="/contacts">MyContacts</NavLink>
            </Tab>
          </>
        )}

        <UserMenuTab>
          <UserMenu />
        </UserMenuTab>
      </Ul>
    </Nav>
  );
};
