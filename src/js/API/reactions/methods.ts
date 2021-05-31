import axios from 'axios';
import { getReactionUrl } from './urls';
import authHeader from '../auth/methods';

export const createReaction = async (
  postId: number,
  type: string
): Promise<void> => {
  try {
    await axios.post<void>(
      getReactionUrl(postId),
      { reactionType: type },
      {
        headers: authHeader(),
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const deleteReaction = async (
  postId: number,
  type: string
): Promise<void> => {
  try {
    await axios.delete<void>(getReactionUrl(postId), {
      data: { reactionType: type },
      headers: authHeader(),
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
