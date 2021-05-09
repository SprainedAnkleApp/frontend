import Image from '../../../images/mountain.jpg';

export const getFriends = async () => {
  const friends = [
    { id: 0, firstName: 'Bartosz', lastName: 'Kaszuba', profilePhoto: Image },
    { id: 1, firstName: 'Konrad', lastName: 'Dębiec', profilePhoto: Image },
  ];
  return friends;
};
