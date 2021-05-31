import Image from '../../../images/mountain.jpg';
import { Friend } from '../../models/interfaces';

export const getFriends = async (): Promise<Friend[]> => {
  const friends = [
    { id: 0, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 1, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 2, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 3, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 4, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 5, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 6, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 7, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 8, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 9, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 10, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 11, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 12, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 13, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
    { id: 14, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 15, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
  ];
  return friends;
};
