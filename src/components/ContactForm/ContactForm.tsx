import { Formik } from 'formik';
import * as yup from 'yup';

import { addContact } from 'redux/contacts/operations';
import { useAppDispatch, useContacts } from 'hooks';
import {
  ERROR,
  SUCCESS,
  isInContactsName,
  isInContactsNumber,
  myToast,
} from 'utils';
import { phoneRegExp } from '../../constants';

import {
  MyForm,
  FormBox,
  Label,
  Input,
  Error,
  Button,
  FormMainBox,
  H2,
} from './ContactForm.styled';
import { Spinner } from 'components/Other';

import { IContactValues } from 'types';

interface IProps {
  title: string;
}

export const ContactForm: React.FC<IProps> = ({ title = 'Add contact' }) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, contacts } = useContacts();

  // const {
  //   data: contacts,
  //   isLoading,
  //   isError,
  // } = useGetContactsQuery('', {
  //   pollingInterval: 3000,
  //   refetchOnMountOrArgChange: true,
  //   skip: false,
  // });
  // const [postContact, { isLoading: isPosting }] = usePostContactMutation();

  const initialValues: IContactValues = {
    name: '',
    number: '',
  };

  const schema = yup.object().shape({
    name: yup.string().max(50).required(),
    number: yup
      .string()
      .required()
      .matches(phoneRegExp, 'Phone number is not valid'),
  });

  if (isLoading) {
    return (
      <FormMainBox>
        <H2>{title}</H2>
        <Spinner />
      </FormMainBox>
    );
  } else if (isError || !contacts) {
    return (
      <FormMainBox>
        <H2>{title}</H2>Error
      </FormMainBox>
    );
  }

  const handleOnSubmit = async (
    contact: IContactValues,
    {
      resetForm,
    }: {
      resetForm: () => void;
    }
  ) => {
    const { name, number } = contact;

    try {
      if (isInContactsName(contacts, name)) {
        throw Error({ name: `Name "${name}" is already in your contacts` });
      } else if (isInContactsNumber(contacts, number)) {
        throw Error({ name: `Number "${number}" is already in your contacts` });
      }

      await dispatch(addContact(contact));
      myToast('✅ Contact was successfully added', SUCCESS);
      resetForm();
    } catch (err: any) {
      myToast(`❌ We couldn't add your contact, (${err.props?.name})`, ERROR);
      console.log(err);
    }
  };

  return (
    <FormMainBox>
      <H2>{title}</H2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleOnSubmit}
        validationSchema={schema}
      >
        {({ values }) => (
          <MyForm autoComplete="off">
            <FormBox>
              <Input name="name" type="text" value={values.name} />
              <Label htmlFor="name">Name</Label>
              <Error name="name" />
            </FormBox>
            <FormBox>
              <Input name="number" type="tel" value={values.number} />
              <Label htmlFor="number">Number</Label>
              <Error name="number" />
            </FormBox>
            <Button type="submit">
              {/* Тут бажано дізейблити на isPosting */}
              Add contact
            </Button>
          </MyForm>
        )}
      </Formik>
    </FormMainBox>
  );
};
