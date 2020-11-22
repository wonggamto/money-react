import Icon from './Icon';
import styled from 'styled-components';
import React from 'react';

const _TimeSection = styled.section`
    height: 32px;
    background: #FFF;
    display: flex;
    align-items: center;
    font-size: 28px;
    padding: 0 18px;
    
    > .dayTime{
      font-size: 24px;
      padding-left: 12px;
    }
`;

function TimeSection() {
  return (
    <_TimeSection>
      <Icon name="calendar"/>
      <div className="dayTime">
        2020.11.23 0:26 星期一
      </div>
    </_TimeSection>
  );
}

export {TimeSection};
