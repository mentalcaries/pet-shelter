import './PetCard.css';
import pin from '../../images/location.png';
import { calculateCurrentAge } from '../../utils/dates';


export type Pet = {
  id: number;
  name: string;
  birthDate: string;
  type: string;
  photo: string;
  city: string;
};

const PetCard = ({ pet }: { pet: Pet }) => {
  const { name, birthDate, type, photo, city } = pet;
  
  const age = calculateCurrentAge(birthDate)

  return (
    <article className="card">
      <img src={photo} alt="" className="card__image" />
      <h3 className="card__title">{name}</h3>

      <div className="card__location">
        <img src={pin} alt="" className="card__pin" />
        <p className="card__text">{city}</p>
      </div>

      <div className="card__buttons">
        <button className="card__button card__button_pet">{type}</button>
        <button className="card__button card__button_age">{age}</button>
      </div>
    </article>
  );
};

export default PetCard;
