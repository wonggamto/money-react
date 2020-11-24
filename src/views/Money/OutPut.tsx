import React from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

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

const Output: React.FunctionComponent = () => {
  return (
    <_Output>
      <div className="icon">
        <Icon name="rmb"/>
      </div>
      <div className="output"></div>
    </_Output>
  );
}

export {Output};