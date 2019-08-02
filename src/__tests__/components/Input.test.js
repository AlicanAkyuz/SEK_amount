import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Input from '../../components/Input';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Input
      title="Sek Amount"
      type="text"
      value="SEK"
      placeholder="Sek Amount"
      onchange={e => e.target.value}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('correctly renders 5 props', () => {
  const tree = renderer
    .create(
      <Input
        title="Sek Amount"
        type="text"
        value="SEK"
        placeholder="Sek Amount"
        onchange={e => e.target.value}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('handles both string and number value types', () => {
  const tree = renderer
    .create(
      <Input
        title="Sek Amount"
        type="text"
        value={15}
        placeholder="Sek Amount"
        onchange={e => e.target.value}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
