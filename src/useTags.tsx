import {useState} from 'react';

const useTags = () => {
  const [tags, setTags] = useState<{id:number;name:string}[]>([
    {id:1,name:'gas'},
    {id:2,name:'transportation'},
    {id:3,name:'foods'},
    {id:4,name:'clothes'}]);
  return{
    tags,
    setTags
  }
};
export {useTags}