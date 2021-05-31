import { Reaction } from '../../models/interfaces';
import axios from 'axios';
import { getReactionUrl } from './urls';
import authHeader from '../auth/methods';

export const createReaction = async (
  postId: number,
  type: Reaction
): Promise<void> => {
  try {
    await axios.post<void>(
      getReactionUrl(postId),
      { type: type },
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
  type: Reaction
): Promise<void> => {
  try {
    await axios.post<void>(
      getReactionUrl(postId),
      { type: type },
      {
        headers: authHeader(),
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
};
