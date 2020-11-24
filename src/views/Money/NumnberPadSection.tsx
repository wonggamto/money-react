import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const _NumberPadSection = styled.section`
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
const NumberPadSection: React.FunctionComponent = () => {
  return (
    <_NumberPadSection>
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
    </_NumberPadSection>
  );
};
export {NumberPadSection};