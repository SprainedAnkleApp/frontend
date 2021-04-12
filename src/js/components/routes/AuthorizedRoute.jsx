import { Route, Redirect } from 'react-router';
import { isAuthenticated } from '../../API/auth/methods';

const AuthorizedRoute = ({ component: Component, ...rest }) => {
  if (!isAuthenticated()) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: rest.location?.pathname },
        }}
      />
    );
  }
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default AuthorizedRoute;
