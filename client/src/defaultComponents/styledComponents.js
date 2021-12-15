import styled from 'styled-components';

export const FullScreenFixed = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #00000029;
`;

export const CenteredDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
`;

export const PushRight = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`;
