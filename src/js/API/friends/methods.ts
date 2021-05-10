import Image from '../../../images/mountain.jpg';
import { Friend } from '../../models/interfaces';

export const getFriends = async (): Promise<Friend[]> => {
  const friends = [
    { id: 0, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 1, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
  ];
  return friends;
};
