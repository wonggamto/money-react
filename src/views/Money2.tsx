import React from 'react';
import {CategorySection} from '../components/CategorySection';
import {TagSection} from '../components/TagSection';
import Icon from '../components/Icon';
import styled from 'styled-components';
import {Output} from '../components/OutPut';
import {TimeSection} from '../components/TimeSection';




// const NoteSection = styled.section``;
//
// const NumberPad = styled.section``;


function Money2() {
  return (
    <div className="wrapper">
      <CategorySection/>
      <TagSection/>
      <Output/>
      <TimeSection/>
    </div>
  );
}

export {Money2};
