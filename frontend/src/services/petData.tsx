import barnaby from '../images/barnaby.png'
export interface Pets {
    id: number,
    name: string,
    birthDate: string,
    photo: string,
    type: string,
    city: string
    img? : string

}

const PetData: Pets[] = [
    {
        id: 1,
        name: 'Barnaby',
        birthDate: 'Jan, 2022',
        photo: barnaby,
        type: 'Cat',
        city: 'Boulder'
    },
    {
        id: 2,
        name: 'Mary',
        birthDate: 'Jan, 2022',
        photo: barnaby,
        type: 'Cat',
        city: 'Boulder'
    },
    {
        id: 3,
        name: 'Maryann',
        birthDate: 'Jan, 2022',
        photo: barnaby,
        type: 'Cat',
        city: 'Boulder'
    }

]

export default PetData;