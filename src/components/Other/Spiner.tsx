import styled, { keyframes } from 'styled-components';
import { CgSpinner } from 'react-icons/cg';
import { CenterBox } from 'components/Other';

const spin = keyframes`
0% {
  transform: rotate(0deg);
}
100% {
  transform: rotate(1turn);
}
`;

export const SimpleSpinner = styled(CgSpinner)`
  display: inline-block;
  animation: ${spin} 0.85s linear infinite;
`;

export const Spinner = () => {
  return (
    <CenterBox>
      <SimpleSpinner />
    </CenterBox>
  );
};

Spinner.defaultProps = {
  size: 40,
};
