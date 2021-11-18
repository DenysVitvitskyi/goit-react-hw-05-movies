import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';

const Backdrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LoaderStyled = styled(Loader)`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
`;

export { Backdrop, LoaderStyled };