import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userNick = signal<string | null>(null);

  /**
   * Проверка длинны пароля
   * @param nick - string
   *@param password - string
   * @return true or null
   * */
  login(nick: string, password: string){
    if(password.length >= 6){
      this.userNick.set(nick)
      return true
    }
    return false;
  }

  isAuthenticated(): boolean {
    return this.userNick() !== null;
  }

  logout(): void {
    return this.userNick.set(null);
  }
}
