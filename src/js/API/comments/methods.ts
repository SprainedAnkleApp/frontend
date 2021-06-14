import { Comment } from '../../models/interfaces';
import axios from 'axios';
import authHeader from '../auth/methods';
import { getCommentUrl } from './urls';

export const getComments = async (wallItemId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get<Comment[]>(getCommentUrl(wallItemId), {
      headers: authHeader(),
    });
    return response.data;
  } catch (error) {
    return [];
  }
};

export const postComment = async (
  wallItemId: number,
  comment: Comment
): Promise<void> => {
  await axios.post(
    getCommentUrl(wallItemId),
    { content: comment.content },
    {
      headers: authHeader(),
    }
  );
};
