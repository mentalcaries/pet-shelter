import './ShelterProfile.css';
import logo from '../../images/rescue.svg';
import pin from '../../images/location.png';
import PetCard from '../PetCard/PetCard';
import PetData from '../../services/petData';


const ShelterProfile = () => {
  return (
    <section className="shelter">
      <div className="shelter__details">
        <img src={logo} alt={`Logo for Pet Shelter`} className="shelter__logo" />
        <h2 className="shelter__title">Animal Rescue</h2>
        <div className="shelter__location">
        <img src={pin} alt="" className="shelter__pin" />
        <p className="shelter__caption">Boulder, Colorado</p>
      </div>
        <p className="shelter__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit minus saepe quibusdam provident dolorem necessitatibus, quis a
          ea odio similique nemo ullam. Vitae culpa, aliquid eos dicta sed
          sequi.
        </p>
        <div className="shelter__buttons">
          <button className="shelter__button">Donate</button>
          <button className="shelter__button button__blue">Sponsor a Pet</button>
        </div>
      </div>

      <div className="shelter__links">
        <h3 className="shelter__suggestions">
          Animals at this shelter
        </h3>
        <div className="suggestions__list">

        {PetData.map(pet => <PetCard pet={pet} cardType="mini"/>)}
        </div>
      </div>

      <div className="shelter__links">
        <h3 className="shelter__suggestions">
          More shelters in the area
        </h3>
        {/* Animals from this shelter */}
        {/* Shelter Cards */}
      </div>
    </section>
  );
};

export default ShelterProfile;
