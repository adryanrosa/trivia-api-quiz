import styled from 'styled-components';

const Settings = styled.button`
  display: block;
  margin-left: auto;
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral100};
  opacity: 0.625;
`;

export default Settings;
