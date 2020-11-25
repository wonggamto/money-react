import React, {useState, useRef} from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
    height: 32px;
    background: #FFF;
    display: flex;
    align-items: center;
    font-size: 28px;
    padding: 0 20px;
    flex-grow: 1;
    > input{
      display: block;
      width: 100%;
      height: 32px;
      padding: 12px;
      border: none;
      font-size: 12px;
    }
`;
type Props = {
  value:string;
  onChange:(value:string) => void;
}
const NoteSection: React.FunctionComponent<Props> = (props) => {
  const note = props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <Icon name="note"/>
      <input type="text" placeholder="请添加备注"
             ref={refInput}
             defaultValue = {note}
             onBlur={onBlur}/>
    </Wrapper>
  );
};
export {NoteSection};