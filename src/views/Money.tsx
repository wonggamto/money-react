import React, {useState} from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumnberPadSection';
import {Output} from './Money/OutPut';
import styled from 'styled-components';

type Category = '-' | '+';

const Wrapper= styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

function Money() {
  const [selected, setSelected] = useState({
    tagIds: [] as number[],
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
    <Wrapper>
      <CategorySection value={selected.category}
                       onChange={(category) => onChange({category})}/>
      <TagSection value={selected.tagIds}
                  onChange={(tagIds) => onChange({tagIds})}/>
      <Output value={selected.amount}
              onChange={(amount) => onChange({amount})}/>
      <TimeSection/>
      <NoteSection value={selected.note}
                   onChange={(note) => onChange({note})}/>
      <NumberPadSection value={selected.amount}
                        onChange={(amount) => onChange({amount})}/>
    </Wrapper>
  );
}

export {Money};
