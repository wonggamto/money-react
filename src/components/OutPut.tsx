import React from 'react';
import Icon from './Icon';
import styled from 'styled-components';

const _Output = styled.section`
    background: #f5f5f5;
    display: flex;
    font-size: 22px;
    padding: 12px ;
    align-items: center;
    height: 58px;
    justify-content: space-between;
    > .output{
      font-size: 24px;
      padding-right: 8px;
    }
    > .icon{
      font-size: 24px;
      padding-left: 8px;
    }
`;

function Output() {
  return (
    <_Output>
      <div className="icon">
        <Icon name="rmb"/>
      </div>
      <div className="output">123456.7890</div>
    </_Output>
  );
}

export {Output};