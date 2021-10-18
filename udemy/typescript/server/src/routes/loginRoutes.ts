// imports
import { Router, Request, Response, NextFunction } from 'express';

// necessary interface for body
interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

// new middleware to require authorization
function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  } else {
    res.status(403);
    res.send('You are not permitted to visit this page');
  }
}

// init router
const router = Router();

// route-handler for 'login'
router.get('/login', (req: Request, res: Response) => {
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
});

// route-handler for POST / login
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  if (email && password && email === 'admin@theadmin.com' && password === 'AdminPassword') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

// root route-handler
router.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(
      `
        <div>
          <div>You are logged in.</div>
          <a href="/protected">Protected Page</a>
          <br/>
          <a href="/logout">Logout</a>
        </div>
      `
    );
  } else {
    res.send(
      `
        <div>
          <div>You are not logged in.</div>
          <a href="/login">Login</a>
        </div>
      `
    );
  }
});

// route-handler for logout
router.get('/logout', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

// route-handler for the protected page
router.get('/protected', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to the protected route, logged in user!');
});

// exporting router
export { router };
