import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Interface from '../../components/Interface';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Interface primaryMessage="Loading..." secondaryMessage="The app is loading" />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('When received a primary and a secondary text prop, it correctly renders a h3 tag for the primary and a h5 tag for the secondary text', () => {
  const tree = renderer
    .create(<Interface primaryMessage="Loading..." secondaryMessage="The app is loading" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
