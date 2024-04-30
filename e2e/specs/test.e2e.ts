import {describe, it} from 'mocha';
import LoginPage from '../pageobjects/login.page';

describe('Login Screen', () => {
  it('should login with valid credentials', async () => {
    await LoginPage.login('admin', 'SuperSecretPassword!');
  });
});
