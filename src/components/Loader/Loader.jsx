import { LoaderStyled, Backdrop } from './Loader.styled';

const Loader = () => {
  return (
    <Backdrop>
      <LoaderStyled type="Oval" height={75} width={75} />;
    </Backdrop>
  );
};

export { Loader };