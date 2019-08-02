import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import DropdownList from '../../components/DropdownList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <DropdownList
      name="Germany"
      capital="Berlin"
      population="80000000"
      currencyCode="EUR"
      sekValue="0.98"
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('correctly renders its required props as defined by prop types', () => {
  const tree = renderer
    .create(
      <DropdownList
        name="Germany"
        capital="Berlin"
        population="80000000"
        currencyCode="EUR"
        sekValue="0.98"
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
