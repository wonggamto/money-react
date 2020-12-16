import React, { useRef} from 'react';
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
  input:string;
  ref:any;
} & React.InputHTMLAttributes<HTMLInputElement>
const NoteSection: React.FunctionComponent<Props> = (props) => {
  const note = props.value
  const onChange:ChanveEventHandler<HTMLInputElement> = (e) => {
      props.onChange(e.target.value)
  };
  return (
    <Wrapper>
      <Icon name="note"/>
      <input type="text" placeholder={props.placeholder}
             ref={refInput}
             value = {note}
             onChange={onChange}/>
    </Wrapper>
  );
};
export {NoteSection};
