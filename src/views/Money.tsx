import React from 'react';
import {CategorySection} from '../components/CategorySection';
import {TagSection} from '../components/TagSection';
import styled from 'styled-components';
import {Output} from '../components/OutPut';
import {TimeSection} from '../components/TimeSection';
import Icon from '../components/Icon';
import {NoteSection} from '../components/NoteSection';


const NumberPadSection = styled.section`
   >.cleafix::after{
      content:'';
      display: block;
      clear: both;
      }
   > .pad{
      > button{
        float: left;
        width: 25%;
        height: 68px;
        border:1px solid #f8f8f8;
        background: #FFF;
        font-size: 18px;
      }
      > .ok{
        height: 136px;
        float: right;    
      }
      .zero{
        width:50%;
      }
    
   }
`;


function Money() {
  return (
    <div className="wrapper">
      <CategorySection/>
      <TagSection/>
      <Output/>
      <TimeSection/>
      <NoteSection/>
      <NumberPadSection>
        <div className="pad clearfix">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>
            <Icon name="backspace"/>
          </button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className="ok">OK</button>
          <button>.</button>
          <button className="zero">0</button>
        </div>
      </NumberPadSection>
    </div>
  );
}

export {Money};
