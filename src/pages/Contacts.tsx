import { useEffect, useState } from 'react';

import { AppBox, Section, FlexBox, RightBox } from 'components/Other';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { useAppDispatch } from 'hooks';
import { fetchContacts } from 'redux/contacts/operations';
import { ERROR, myToast } from 'utils';

const Contacts: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const dispatchContacts = async () => {
      try {
        await dispatch(fetchContacts());
      } catch (err: any) {
        console.log(err);
        myToast("❌ We didn't get your contacts", ERROR);
      }
    };

    dispatchContacts();
  }, [dispatch]);

  const handleOnFilterChange = (value: string) => {
    setFilterValue(value);
  };

  return (
    <AppBox>
      <Section title="Phonebook" icon={<BsFillTelephoneFill />}>
        <FlexBox>
          <ContactForm title="Add contact" />

          <RightBox>
            <Filter
              title="Contacts"
              value={filterValue}
              handleOnChange={handleOnFilterChange}
            />
            <ContactList filterValue={filterValue} />
          </RightBox>
        </FlexBox>
      </Section>
    </AppBox>
  );
};

export default Contacts;
