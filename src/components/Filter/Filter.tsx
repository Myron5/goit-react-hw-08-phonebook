import { BsSearch } from 'react-icons/bs';
import { FilterBox, H2, InputBox, Input, Label } from './Filter.styled';

interface IProps {
  title: string;
  value: string;
  handleOnChange: (value: string) => void;
}

export const Filter: React.FC<IProps> = ({
  title = 'Contacts',
  value,
  handleOnChange,
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    handleOnChange(value);
  };

  return (
    <FilterBox>
      <H2>{title}</H2>
      <InputBox>
        <Input name="filter" type="text" onChange={onChange} value={value} />
        <BsSearch />
        <Label htmlFor="filter">Find contacts by name</Label>
      </InputBox>
    </FilterBox>
  );
};
