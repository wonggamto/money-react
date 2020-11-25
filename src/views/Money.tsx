import React,{useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumnberPadSection';
import {Output} from './Money/OutPut';

type Category = '-' | '+';
function Money() {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    note:'',
    category: '-' as Category,
    amount:0
  })
  return (
    <div className="wrapper">
      {selected.tags.join(',')}
      <hr/>
      {selected.note}
      <hr/>
      {selected.amount}
      <CategorySection value={selected.category}
                       onChange={(category)=>{
                         setSelected({
                           ...selected,
                           category:category
                         })
                       }}
      />
      <TagSection value={selected.tags}
                  onChange={(tags) => setSelected({
                    ...selected,
                    tags:tags
                  })}/>
      <Output value={selected.amount}
              onChange={(amount)=>{
                setSelected({
                  ...selected,
                  amount:amount
                })
              }}/>
      <TimeSection/>
      <NoteSection value={selected.note}
                   onChange={(note) =>{
                     setSelected({
                       ...selected,
                       note:note
                     })
                   }}/>
      <NumberPadSection value={selected.amount}
                             onChange={(amount)=>{
                               setSelected({
                                 ...selected,
                                 amount:amount
                               })
                             }}/>
    </div>
  );
}

export {Money};
