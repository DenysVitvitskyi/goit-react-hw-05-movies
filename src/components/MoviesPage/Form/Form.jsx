import { useEffect, useState } from 'react';
import { Button, FormStyled, Input } from './Form.styled';
import PropTypes from 'prop-types';
import PropTypes from 'prop-types';

const Form = ({ handleQuery }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query.length <= 1) {
      return;
    }
    handleQuery(query);
  }, [query, handleQuery]);

  const onSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value
      .trim()
      .toLowerCase()
      .split(' ')
      .join('+');
    setQuery(value);
  };

  return (
    <FormStyled onSubmit={onSubmit}>
      <Input type="text" name="query" autoFocus={true} autoComplete="off" />
      <Button type="submit">Search</Button>
    </FormStyled>
  );
};

Form.propTypes = {
  handleQuery: PropTypes.func,
};

export { Form };