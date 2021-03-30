import { shortenText } from '../utils/functions';
import { wordCount, attachUserName } from '../../server/utils';
import { shortText, longText, posts, users } from './__data__/testData';


test('shortenText will not alter texts with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });
  
  test('shortenText will cut off all text after 100 characters and add three periods', () => {
    const shortened = shortenText(longText);
    expect(shortened).not.toHaveLength(longText.length);
    expect(shortened.slice(-3)).toBe('...');
  });
  
  test('wordCount will count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
  });
  
  test('attachUserName attach a users full name to the post', () => {
    const newPosts = attachUserName(users, posts);
    expect(newPosts[0]).toHaveProperty('displayName');
  });
  
  test('attachUserName will remove all posts without matching usernames', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });