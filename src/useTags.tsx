import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<string[]>(['transportation', 'gas', 'medical', 'gift']);
  return{
    tags,
    setTags
  }
};
export {useTags}