import TestUtils from '@utils/testUtils';
import App from '@app';

describe('This will test App component', () => {
  test('Should check if tests working correctly', async () => {
    expect(1).toBe(1);
  });

  test('Should check app container', async () => {
    expect(1).toBe(1);
    const screen = TestUtils.renderWithRouter(<App />);
    const appContainer = await screen.findByTestId('application-container');
    expect(appContainer).toBeInTheDocument();
  });
});
