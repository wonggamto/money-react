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
  return {
    tags,
    setTags
  };
};
export {useTags};