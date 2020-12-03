import {useState} from 'react';
import {createId} from './lib/createId';

const useTags = () => {
  const [tags, setTags] = useState<{id:number;name:string}[]>([
    {id:createId(),name:'gas'},
    {id:createId(),name:'transportation'},
    {id:createId(),name:'foods'},
    {id:createId(),name:'clothes'}]);
  return{
    tags,
    setTags
  }
};
export {useTags}