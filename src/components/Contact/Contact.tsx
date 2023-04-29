import { deleteContact } from 'redux/contacts/operations';
import { useAppDispatch } from 'hooks';

import { Li, Name, Number, Button } from './Contact.styled';
import { RxAvatar, RxMobile, RxCross1 } from 'react-icons/rx';

import { IContact } from 'types';
import { ERROR, SUCCESS, myToast } from 'utils';

interface IPops {
  contact: IContact;
}

export const Contact: React.FC<IPops> = ({ contact }) => {
  const { id, name, number } = contact;
  const dispatch = useAppDispatch();

  const handleOnDelete = async (id: string) => {
    try {
      await dispatch(deleteContact(id));
      myToast('✅ Contact was deleted successfully', SUCCESS);
    } catch (err: any) {
      console.log(err);
      myToast("❌ Contact wasn't deleted sucessfully", ERROR);
    }
  };

  return (
    <Li>
      <Name>
        <RxAvatar />
        {name}
      </Name>
      <Number>
        <RxMobile size={20} />
        {number}
      </Number>
      <Button type="button" onClick={() => handleOnDelete(id)}>
        {/* Тут бажано дізейблити на деліт */}
        <RxCross1 />
      </Button>
    </Li>
  );
};
