// imports
import { get, controller, bodyValidator, post } from './decorators';
import { Response, Request, NextFunction } from 'express';

// controller for login routes
@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
          <div>
              <label>Email</label>
              <input name="email"/>
          </div>
          <div>
              <label>Password</label>
              <input name="password" type="password"/>
          </div>
          <button>Submit</button>
      </form>
      <a href="/protected">Protected Page</a>
    `);
  }
  // route-handler for POST / login
  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response) {
    const { email, password } = req.body;
    if (email && password && email === 'admin@theadmin.com' && password === 'AdminPassword') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Invalid email or password');
    }
  }
  // route-handler for logout
  @get('/logout')
  getLogout(req: Request, res: Response) {
    req.session = undefined;
    res.redirect('/');
  }
}
