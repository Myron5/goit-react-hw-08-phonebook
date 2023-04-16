import React, { useState } from 'react';

import { AppBox, Section, FlexBox, RightBox } from './GeneralContainers';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { BsFillTelephoneFill } from 'react-icons/bs';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App: React.FC = () => {
  const [filterValue, setFilterValue] = useState<string>('');

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
      <ToastContainer position="bottom-right" newestOnTop />
    </AppBox>
  );
};
