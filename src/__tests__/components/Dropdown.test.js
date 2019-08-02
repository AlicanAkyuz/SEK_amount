import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Dropdown from '../../components/Dropdown';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Dropdown
      notFound={false}
      countries={[
        {
          name: 'Sweden',
          capital: 'Stockholm',
          population: 100,
          currencies: [{ code: 'SEK' }],
          numericCode: 617298,
        },
      ]}
      sekAmount={130}
      sekRates={{ CAD: 0.97 }}
    />,
    div,
  );
  ReactDOM.unmountComponentAtNode(div);
});

it('correctly renders its required props as defined by prop types', () => {
  const tree = renderer
    .create(
      <Dropdown
        notFound={false}
        countries={[
          {
            name: 'Sweden',
            capital: 'Stockholm',
            population: 100,
            currencies: [{ code: 'SEK' }],
            numericCode: 617298,
          },
        ]}
        sekAmount={130}
        sekRates={{ CAD: 0.97 }}
      />,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
