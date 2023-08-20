import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';
import err from '../assets/images/error.png';
import { Link, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if (error.status === 404) {
    return (
      <Wrapper className='full-page'>
        <div>
          <img src={img} alt='not found' />
          <h3>Ohh! Page not found</h3>
          <p>We cant seem to find what your are looking for...</p>
          <Link to='/'>back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper className='full-page'>
      <div>
        <img
          src={err}
          alt='error'
          style={{
            width: '250px',
            height: '250px',
            margin: 'auto',
            marginBottom: '2rem',
          }}
        />
        <h3>Ohh! Something went wrong</h3>
        <p>Pls retry again...</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
