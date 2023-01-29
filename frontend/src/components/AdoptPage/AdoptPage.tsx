import PetCard from '../PetCard/PetCard';
import './AdoptPage.css';
import { Pet } from '../PetCard/PetCard';
import Categories from '../Categories/Categories';
import { useEffect, useState } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { getPetByLocation } from '../../utils/api';

const AdoptPage = ({
  setSearchResults,
  searchResults,
}: {
  setSearchResults: Function;
  searchResults: [];
}) => {
  const [petLocation, setPetLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [displayedResults, setDisplayedResults] = useState([])


  useEffect(()=>{
    setDisplayedResults(searchResults)
  }, [searchResults])

  const handleLocationSubmit = (event: any) => {
    event.preventDefault();
    if (petLocation === '') return;

    setIsLoading(true);
    getPetByLocation(petLocation).then((data) => setSearchResults(data));
    setIsLoading(false);
    setPetLocation('');
  };

  const handlePetSelection = (selection: string) => {
    const filteredArray = searchResults.filter(
      (pet: Pet) => pet.type === selection
    );
    setDisplayedResults(filteredArray);
  };

  return (
    <section className="adopt">
      <h1 className="adopt__title">Adopt Your Pet</h1>
      <form className="adopt__search" onSubmit={handleLocationSubmit}>
        <label className="form__label" htmlFor="search">
          Look for pets in your area
        </label>
        <input
          type="text"
          className="form__input adopt__input"
          placeholder="Search your area"
          value={petLocation}
          onChange={(event) => setPetLocation(event.target.value)}
        />
      </form>
      <Categories onSelection={handlePetSelection} />

      <section className="results">
        {isLoading && <ColorRing />}

        {/* Create Results Section */}
        {displayedResults &&
          displayedResults.map((pet: Pet) => <PetCard pet={pet} key={pet.id} />)}
      </section>
    </section>
  );
};

export default AdoptPage;
