import logo from '../images/lincoln.png';


interface Shelters {
    id: number,
    name: string,
    location: string,
    photo: string
    img: string
}

const ShelterData: Shelters[] = [
    {
        id: 1,
        name: 'Dream Cats',
        location: 'Boulder, Colorado',
        photo: logo,
        img: logo,
    },
    {
        id: 2,
        name: 'Dream Dogs',
        location: 'New York, New York',
        photo: logo,
        img: logo,
    },
    {
        id: 3,
        name: 'Cherish Dogs',
        location: 'New York, New York',
        photo: logo,
        img: logo,
    }

]

export default ShelterData;