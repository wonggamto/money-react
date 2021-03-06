import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon';

const Wrapper= styled.section`
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
type Props ={
  value:number,
  onChange:(value:number) => void;
}
const Output: React.FunctionComponent<Props> = (props) => {
  const output = props.value.toString()
  return (
    <Wrapper>
      <div className="icon">
        <Icon name="rmb"/>
      </div>
      <div className="output">
        {output}
      </div>
    </Wrapper>
  );
}

export {Output};