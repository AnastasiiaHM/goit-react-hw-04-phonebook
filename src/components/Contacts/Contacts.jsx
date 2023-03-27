import PropTypes from 'prop-types';
import { Item } from './ContactsItem';

export const Contacts = ({ contacts, onClick }) => {
  return (
    <ol>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <Item id={id} name={name} number={number} onClick={onClick} />{' '}
        </li>
      ))}{' '}
    </ol>
  );
};
