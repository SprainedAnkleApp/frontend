import { Message } from '../../models/interfaces';
import axios from 'axios';
import { getMessagesSocketUrl } from './urls';
import authHeader from '../auth/methods';

export const getMessages = async (id: number): Promise<Message[]> => {
  const messages = [
    { senderId: id, content: 'Test' },
    { senderId: 5, content: 'TestTest' },
    { senderId: id, content: 'TestTestTest' },
    { senderId: 5, content: 'TestTestTestTest' },
    { senderId: id, content: 'TestTestTestTestTest' },
    { senderId: 5, content: 'TestTestTestTestTestTest' },
    {
      senderId: id,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
    {
      senderId: 5,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
    { senderId: id, content: 'Test' },
    { senderId: 5, content: 'TestTest' },
    { senderId: id, content: 'TestTestTest' },
    { senderId: 5, content: 'TestTestTestTest' },
    { senderId: id, content: 'TestTestTestTestTest' },
    { senderId: 5, content: 'TestTestTestTestTestTest' },
    {
      senderId: id,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
    {
      senderId: 5,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
    { senderId: id, content: 'Test' },
    { senderId: 5, content: 'TestTest' },
    { senderId: id, content: 'TestTestTest' },
    { senderId: 5, content: 'TestTestTestTest' },
    { senderId: id, content: 'TestTestTestTestTest' },
    { senderId: 5, content: 'TestTestTestTestTestTest' },
    {
      senderId: id,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
    {
      senderId: 5,
      content:
        'Atu jakies dluzsze wiadomosci tak tylko zeby sprawdzic czy to sie miesci',
    },
  ];
  return messages;
};
