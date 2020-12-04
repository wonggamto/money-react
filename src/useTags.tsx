import {useState} from 'react';
import {createId} from './lib/createId';

const defaultTags = [
  {id: createId(), name: 'gas'},
  {id: createId(), name: 'transportation'},
  {id: createId(), name: 'foods'},
  {id: createId(), name: 'clothes'}
];
const useTags = () => {
  const [tags, setTags] = useState<{ id: number; name: string }[]>(defaultTags);
  const findTag = (id: number) => tags.filter(tag => tag.id === id)[0];
  return {
    tags,
    setTags,
    findTag
  };
};
export {useTags};