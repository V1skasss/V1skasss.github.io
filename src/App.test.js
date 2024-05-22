import renderer from 'react-test-renderer';
import Header from './Header';

test('Снапшот шапку', () => {
  let header = renderer.create(<Header />);
  let headerJson = header.toJSON();
  expect(headerJson).toMatchSnapshot();
});