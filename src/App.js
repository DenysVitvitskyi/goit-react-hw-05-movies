import { lazy, Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { NotFound } from './components/NotFound/NotFound';
import { Loader } from './components/Loader/Loader';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header/Header';

const HomePage = lazy(() =>
  import('./views/HomePage'),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage'),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage'),
);

const App = () => {
  const [status, setStatus] = useState('idle');
  const [loading, setLoading] = useState(false);

  const changeStatus = useCallback(status => {
    setStatus(status);
  }, []);

  useEffect(() => {
    if (status === 'resolved') {
      return;
    }
    const timerId = setTimeout(() => {
      setLoading(true);
    }, 300);
    return () => {
      clearInterval(timerId);
    };
  }, [status]);

  useEffect(() => {
    if (status === 'resolved') {
      setLoading(false);
    }
  }, [status]);

  return (
    <>
      {
        <Header>
        <Navigation />
      </Header> }
      {status === 'pending' && loading === true && <Loader />}
      <Suspense fallback={null}>
        <Switch>
          <Route path="/" exact>
            <HomePage setStatus={changeStatus} status={status} />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage setStatus={changeStatus} status={status} />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage setStatus={changeStatus} status={status} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Suspense>
      <Toaster />
    </>
  );
};

export default App;