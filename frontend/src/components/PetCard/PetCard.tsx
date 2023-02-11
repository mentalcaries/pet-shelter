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

const PetCard = ({ pet, cardType }: { pet: Pet; cardType?: string }) => {
  const { name, birthDate, type, photo, city } = pet;

  const age = calculateCurrentAge(birthDate);

  return (
    <article className={`card ${cardType === 'mini' ? 'card__mini' : ''}`}>
      <img
        src={photo}
        alt=""
        className={`card__image ${
          cardType === 'mini' ? 'card__image_mini' : ''
        }`}
      />
      <h3 className="card__title">{name}</h3>

      <div className="card__location">
        <img src={pin} alt="" className="card__pin" />
        <p className="card__text">{city}</p>
      </div>
      {cardType !== 'mini' ? (
        <div className="card__buttons">
          <button className="card__button card__button_pet">{type}</button>
          <button className="card__button card__button_age">{age}</button>
        </div>
      ) : (
        ''
      )}
    </article>
  );
};

export default PetCard;
