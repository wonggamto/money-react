import Icon from '../../components/Icon';
import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.section`
    height: 32px;
    background: #FFF;
    display: flex;
    align-items: center;
    font-size: 28px;
    padding: 0 18px;
    > .dayTime{
      font-size: 12px;
      padding-left: 12px;
    }
`;

const TimeSection:React.FunctionComponent =() =>{
  return (
    <Wrapper>
      <Icon name="calendar"/>
      <div className="dayTime">
        2020.11.23 0:26 星期一
      </div>
    </Wrapper>
  );
}

export {TimeSection};
