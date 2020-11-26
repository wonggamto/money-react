import React from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';

const Wrapper = styled.div`
    height:68px;
    background: #464699;
    font-size: 68px;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
`;

const TopBar = () => {
  return (
    <Wrapper>
      <Icon name="logo"/>
    </Wrapper>
  );
};
export {TopBar}