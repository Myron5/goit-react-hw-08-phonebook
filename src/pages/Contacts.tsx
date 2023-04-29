import { useEffect, useState } from 'react';

import { AppBox, Section, FlexBox, RightBox } from 'components/Other';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { useAppDispatch } from 'hooks';
import { fetchContacts } from 'redux/contacts/operations';

const Contacts: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>('');
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
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
