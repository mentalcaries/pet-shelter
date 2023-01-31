import { useState } from 'react';
import './Search.css';
import searchDecoration from '../../images/spiral-down-pink.png';
import searchPet from '../../images/search-pet.png';
import { useEffect } from 'react';
import FormPage from '../FormPage/FormPage';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getPetByLocation } from '../../utils/api';

interface SearchQuery {
  query: string;
}

const Search = ({ setSearchResults }: { setSearchResults: Function }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    formState,
    reset,
  } = useForm({
    defaultValues: {
      query: '',
    },
    mode: 'onChange',
  });

  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset({ query: '' });
    }
    if (formState.isDirty) {
      setErrorMessage('');
    }
  }, [formState, reset]);

  const navigation = useNavigate();

  const submitSearchData = ({ query }: SearchQuery) => {
    getPetByLocation(query)
      .then((data) => {
        setSearchResults(data);
        navigation('/adopt');
      })
      .catch(() => {
        setErrorMessage('No pets found for this city. Try another');
      });
  };
  return (
    <FormPage
      title="Start Here"
      decoration={searchDecoration}
      submitHandler={handleSubmit(submitSearchData)}
    >
      <>
        <label className="form__label" htmlFor="search">
          Look for pets in your area
        </label>
        <input
          {...register('query', {
            required: 'Please enter a city',
            minLength: {
              value: 2,
              message: 'City name must be at least 2 characters',
            },
          })}
          className="form__input"
          placeholder="Type your city"
        />
        <p className="form__error">{errors.query?.message || errorMessage}</p>
        <input
          type="submit"
          className={`form__submit form__submit_search ${
            !isValid ? 'form__submit_disabled' : ''
          }`}
          disabled={!isDirty && !isValid}
        />
        <div className="search__buttons">
          <Link to="/login" className="search__link">
            <button className="search__button">Login</button>
          </Link>
          <Link to="/register" className="search__link">
            <button className="search__button">Register</button>
          </Link>
        </div>
        <img src={searchPet} alt="" className="search__image" />
      </>
    </FormPage>
  );
};

export default Search;
