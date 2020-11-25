import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumnberPadSection';
import {Output} from './Money/OutPut';

type Category = '-' | '+';

function Money() {
  const [selected, setSelected] = useState({
    tags: [] as string[],
    note: '',
    category: '-' as Category,
    amount: 0
  });
  const onChange = (obj: Partial<typeof selected>) => {
    setSelected({
      ...selected,
      ...obj
    });
  };
  return (
    <div className="wrapper">
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <TagSection value={selected.tags}
                  onChange={(tags) => onChange({tags})}/>
      <Output value={selected.amount}
              onChange={(amount) => onChange({amount})}/>
      <TimeSection/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}/>
    </div>
  );
}

export {Money};
