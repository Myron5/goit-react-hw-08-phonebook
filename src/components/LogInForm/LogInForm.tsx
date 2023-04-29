import { useAppDispatch } from 'hooks';
import { logIn } from 'redux/auth/operations';
import { Button, Input, LogInFormStyled, Title } from './LogInForm.styled';
import { ERROR, myToast } from 'utils';

export const LogInForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOnLogIn = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const form = e.currentTarget as typeof e.currentTarget & {
      reset: () => void;
      elements: {
        email: { value: string };
        password: { value: string };
      };
    };

    const email = form.elements.email.value;
    const password = form.elements.password.value;

    try {
      await dispatch(logIn({ email, password }));

      form.reset();
    } catch (err: any) {
      console.log(err);
      myToast("❌ We didn't get your contacts", ERROR);
    }
  };

  return (
    <LogInFormStyled autoComplete={'off'} onSubmit={handleOnLogIn}>
      <Title>LogIn now</Title>
      <p>Email</p>
      <Input type="email" name="email" />
      <p>Password</p>
      <Input type="password" name="password" />
      <Button type="submit">LogIn</Button>
    </LogInFormStyled>
  );
};
