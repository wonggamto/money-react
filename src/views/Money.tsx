import React from 'react';
import {CategorySection} from './Money/CategorySection';
import {TagSection} from './Money/TagSection';
import {Output} from './Money/OutPut';
import {TimeSection} from './Money/TimeSection';
import {NoteSection} from './Money/NoteSection';
import {NumberPadSection} from './Money/NumnberPadSection';


function Money() {
  return (
    <div className="wrapper">
      <CategorySection/>
      <TagSection/>
      <Output/>
      <TimeSection/>
      <NoteSection/>
      <NumberPadSection/>

    </div>
  );
}

export {Money};
