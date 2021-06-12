import { Comment } from '../../models/interfaces';
import axios from 'axios';
import authHeader from '../auth/methods';
import { getCommentUrl } from './urls';
import { getUserById } from '../user/methods';

export const getComments = async (wallItemId: number): Promise<Comment[]> => {
  try {
    const response = await axios.get<any>(getCommentUrl(wallItemId), {
      headers: authHeader(),
    });
    const userId = response.data.content[0].userId;
    const user = await getUserById(userId);

    return response.data.content.map((content: { content: any }) => {
      return {
        user: user,
        text: content.content,
      };
    });
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
    { content: comment.text },
    {
      headers: authHeader(),
    }
  );
};
