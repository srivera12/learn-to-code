// imports
import { controller, get, use } from './decorators';
import { Request, Response, NextFunction } from 'express';

// middleware to require authorization
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('You are not permitted to visit this page');
  }
}

// root controller class
@controller()
class RootController {
  @get('/')
  getRoot(req: Request, res: Response) {
    if (req.session?.loggedIn) {
      res.send(
        `
          <div>
            <div>You are logged in.</div>
            <a href="/protected">Protected Page</a>
            <br/>
            <a href="/auth/logout">Logout</a>
          </div>
        `
      );
    } else {
      res.send(
        `
          <div>
            <div>You are not logged in.</div>
            <a href="/auth/login">Login</a>
          </div>
        `
      );
    }
  }
  // route-handler for the protected page
  @get('/protected')
  @use(requireAuth)
  getProtected(req: Request, res: Response) {
    res.send('Welcome to the protected route, logged in user!');
  }
}
