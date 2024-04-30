import {$} from '@wdio/globals';
import Page from './page';

class LoginPage extends Page {
  public get inputUsername() {
    return $('~textinput.username');
  }

  public get inputPassword() {
    return $('~textinput.password');
  }

  public get btnLogin() {
    return $('~button.login');
  }

  public async login(username: string, password: string) {
    await this.inputUsername;
    await this.inputUsername.waitForExist({timeout: 6000});
    await this.inputUsername.setValue(username);

    await this.inputPassword;
    await this.inputPassword.waitForExist({timeout: 6000});
    await this.inputPassword.setValue(password);

    await this.btnLogin;
    await this.btnLogin.waitForExist({timeout: 6000});
    await this.btnLogin.click();
  }
}

export default new LoginPage();
