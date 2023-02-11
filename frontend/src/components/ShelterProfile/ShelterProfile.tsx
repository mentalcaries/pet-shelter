import './ShelterProfile.css';
import logo from '../../images/rescue.svg';

const ShelterProfile = () => {
  return (
    <section className="shelter-profile">
      <div className="shelter-profile__details">
        <img src={logo} alt="" className="shelter-profile__image" />
        <h2 className="shelter-profile__title">Pet Love Shelter</h2>
        <p className="shelter-profile__location">Boulder, Colorado</p>
        <p className="shelter-profile__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          impedit minus saepe quibusdam provident dolorem necessitatibus, quis a
          ea odio similique nemo ullam. Vitae culpa, aliquid eos dicta sed
          sequi.
        </p>
        <div className="shelter-profile__buttons">
          <button className="shelter-profile__button">Donate</button>
          <button className="shelter-profile__button button__blue">Sponsor a Pet</button>
        </div>
      </div>

      <div className="shelter-profile__links">
        <h3 className="shelter-profile__suggestions">
          Animals at this shelter
        </h3>
        {/* Animals from this shelter */}
        {/* Pet Cards */}
      </div>

      <div className="shelter-profile__links">
        <h3 className="shelter-profile__suggestions">
          More shelters in the area
        </h3>
        {/* Animals from this shelter */}
        {/* Shelter Cards */}
      </div>
    </section>
  );
};

export default ShelterProfile;
