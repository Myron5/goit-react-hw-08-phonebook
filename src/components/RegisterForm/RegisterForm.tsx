import { useAppDispatch } from 'hooks';
import { register } from 'redux/auth/operations';
import {
  Button,
  Input,
  RegisterFormStyled,
  Title,
} from './RegisterForm.styled';

export const RegisterForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleOnRegister = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const form = e.currentTarget as typeof e.currentTarget & {
      reset: () => void;
      elements: {
        name: { value: string };
        email: { value: string };
        password: { value: string };
      };
    };

    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    await dispatch(register({ name, email, password }));

    form.reset();
  };

  return (
    <RegisterFormStyled autoComplete={'off'} onSubmit={handleOnRegister}>
      <Title>Register now</Title>
      <p>Name </p>
      <Input type="text" name="name" />
      <p>Email </p>
      <Input type="email" name="email" />
      <p>Eassword</p>
      <Input type="password" name="password" />
      <Button type="submit">Register</Button>
    </RegisterFormStyled>
  );
};
