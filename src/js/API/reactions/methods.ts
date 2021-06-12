import { Reaction } from '../../models/interfaces';
import axios from 'axios';
import { getReactionUrl } from './urls';
import authHeader from '../auth/methods';

export const createReaction = async (
  postId: number,
  type: Reaction
): Promise<void> => {
  await axios.post<void>(
    getReactionUrl(postId),
    { type: type },
    {
      headers: authHeader(),
    }
  );
};

export const deleteReaction = async (
  postId: number,
  type: Reaction
): Promise<void> => {
  await axios.post<void>(
    getReactionUrl(postId),
    { type: type },
    {
      headers: authHeader(),
    }
  );
};
