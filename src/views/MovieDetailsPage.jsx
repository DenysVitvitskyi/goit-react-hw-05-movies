  import { useHistory, useLocation, useParams, Route, useRouteMatch } from 'react-router-dom';
  import { getMovieDetails } from '../api/fetchMovies';
  import { lazy, useEffect, useState } from 'react';
  import PropTypes from 'prop-types';
  import { Container } from '../components/Container/Container';
//   import { MovieImage } from '../components/MovieDetails/MovieImage/MovieImage';
//   import { MainContent } from '../components/MovieDetails/MainContent/MainContent';
//   import { MovieDescription } from '../components/MovieDetails/MovieDescription/MovieDescription';
//   import { AdditionalInfo } from '../components/MovieDetails/AdditionalInfo/AdditionalInfo';
//   import noPhoto from 'assets/images/no_photo.png';
//   import { ButtonGoBack } from '../components/MovieDetails/ButtonGoBack/ButtonGoBack';
//   import { MainContentWrapper } from '../components/MovieDetails/MainContentWrapper/MainContentWrapper';
  
//   const Cast = lazy(() =>
//     import('components/MovieDetails/Cast/Cast' /* webpackChunkName: 'cast' */),
//   );
//   const Reviews = lazy(() =>
//     import(
//       'components/MovieDetails/Reviews/Reviews' /* webpackChunkName: 'reviews' */
//     ),
//   );
  
//   const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  
  const MovieDetailsPage = ({ setStatus, status }) => {
    const [movie, setMovie] = useState({});
    const { movieId } = useParams();
    const { path } = useRouteMatch();
    const location = useLocation();
    const history = useHistory();
  
    useEffect(() => {
      setStatus('pending');
      getMovieDetails(Number(movieId)).then(data => {
        setMovie({ ...data });
        setStatus('resolved');
      });
    }, [movieId, setStatus]);
  
    const onGoBackClick = () => {
      history.push(location?.state?.from ?? '/');
    };
  
    const { poster_path, title, release_date, vote_average, overview, genres } =
      movie;
    return (
      <>
        <MainContentWrapper>
          <Container>
            <ButtonGoBack onClick={onGoBackClick} />
            {status === 'resolved' && (
              <MainContent>
                <MovieImage
                  url={poster_path}
                  title={title}
                />
                <MovieDescription
                  title={title}
                  releaseYear={Number.parseInt(release_date)}
                  userScore={Math.round(Number(vote_average) * 10)}
                  overview={overview}
                  genres={genres && genres.map(genre => genre.name).join(', ')}
                />
              </MainContent>
            )}
          </Container>
        </MainContentWrapper>
        {status === 'resolved' && (
          <AdditionalInfo location={location?.state?.from} />
        )}
        {/* <Route path={`${path}/cast`}>
          <Cast />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews />
        </Route> */}
      </>
    );
  };
  
  MovieDetailsPage.propTypes = {
    setStatus: PropTypes.func.isRequired,
    status: PropTypes.string.isRequired,
  };
  
  export default MovieDetailsPage;