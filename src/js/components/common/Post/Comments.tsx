import { Comment as CommentType } from '../../../models/interfaces';
import React from 'react';

export type CommentsProps = {
  comments: CommentType[];
};

const Comments = ({ comments }: CommentsProps) => {
  return (
    <div>
      {comments.map((comment) => (
        <p>{comment.text}</p>
      ))}
    </div>
  );
};

const AddComment = () => {};

Comments.AddComment = AddComment;

export default Comments;
