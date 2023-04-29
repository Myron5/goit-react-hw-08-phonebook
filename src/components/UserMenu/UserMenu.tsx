import { useAppDispatch, useAuth } from 'hooks';
import { logOut } from 'redux/auth/operations';

import {
  UserBox,
  Avatar,
  InfoBox,
  Name,
  Email,
  Button,
} from './UserMenu.styled';

export const UserMenu: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const dispatch = useAppDispatch();

  const {
    user: { name, email },
  } = useAuth();

  const handleOnLogOut = async () => {
    await dispatch(logOut());
  };

  return (
    <>
      {isLoggedIn ? (
        <UserBox>
          <Avatar
            src="https://bip.cnrs.fr/wp-content/uploads/2019/11/user.jpg"
            alt="User avatar"
          />
          <InfoBox>
            <Name>{name}</Name>
            <Email href={`mailto:${email}`}>{email}</Email>
            <Button type="button" onClick={handleOnLogOut}>
              Log Out
            </Button>
          </InfoBox>
        </UserBox>
      ) : (
        <p>Not authorized</p>
      )}
    </>
  );
};
