import Error404 from 'components/Pages/Error404';

describe('Component: App', () => {
  it('should match its snapshot', () => {
    const tree = renderer.create(
      <Error404 />
    ).toJSON()

    expect(tree).toMatchSnapshot();
  });
});
