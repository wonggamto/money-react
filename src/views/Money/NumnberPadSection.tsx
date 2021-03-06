import React, {useState} from 'react';
import Icon from '../../components/Icon';
import {Wrapper} from './NumberPadSection/Wrapper';
import {generateOutput} from './NumberPadSection/generateOutput';
type Props={
  value:number,
  onChange:(value:number) => void;
}
const NumberPadSection: React.FunctionComponent<Props> = ({onChange}) => {
  const [output, _setOutput] = useState('0');
  const setOutput = (output:string)=>{
    if(output.length>16){
      output = output.slice(0,16)
    }else if(output.length===0) {
      output='0';
    }
    _setOutput(output)
    onChange(Number(output))
  }
  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) {return;}
    if(text === 'OK'){
      //TODO
      return;
    }
    if('0123456789.'.split('').concat(['','清空']).indexOf(text)>=0){
      setOutput(generateOutput(text,output))
    }
  };
  return (
    <Wrapper>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button className="backspace">
          <Icon name="backspace"/>
        </button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className='ok'>OK</button>
        <button>.</button>
        <button className='zero'>0</button>
      </div>
    </Wrapper>
  );
};
export {NumberPadSection};