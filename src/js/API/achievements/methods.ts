import { Achievement } from '../../models/interfaces';
import axios from 'axios';
import authHeader from '../auth/methods';
import { getAchievementsShortUrl, getUserAchievementsUrl } from './urls';

export const getAchievementsShort = async (): Promise<Achievement[]> => {
  console.log(getAchievementsShortUrl());
  try {
    const response = await axios.get<Achievement[]>(getAchievementsShortUrl(), {
      headers: authHeader(),
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    return [];
  }
};

export const getAchievements = async (
  userId: string
): Promise<Achievement[]> => {
  console.log(getAchievementsShortUrl());
  try {
    const response = await axios.get<Achievement[]>(
      getUserAchievementsUrl(userId),
      {
        headers: authHeader(),
      }
    );
    return response.data;
  } catch (error) {
    return [];
  }
};
