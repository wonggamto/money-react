import React,{useState} from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const _NoteSection = styled.section`
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

const NoteSection:React.FunctionComponent = () =>{
  const [note,setNote] =useState('')
  return (
    <_NoteSection>
      <Icon name="note"/>
      <input type="text" placeholder="请添加备注"
             value={note}
             onChange={(e)=>setNote(e.target.value)}
      />
    </_NoteSection>
  );
}

export {NoteSection};