import React, {useState} from 'react';
import styled from 'styled-components';
import Icon from '../../components/Icon';

const Wrapper = styled.section`
    
   >.cleafix::after{
      content:'';
      display: block;
      clear: both;
      }
   > .outputWrapper{
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
    }
   > .pad{
      > button{
        float: left;
        width: 25%;
        height: 68px;
        border:1px solid #f8f8f8;
        background: #FFF;
        font-size: 18px;
      }
       > .ok{
          height: 136px;
          float: right;    
        }
        >.zero{
          width:50%;
        } 
        > .backspace{
          font-size: 24px;
        }
   }
`;
const NumberPadSection: React.FunctionComponent = () => {
  const [output, setOutput] = useState('0');

  const onClickButtonWrapper = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) {return;}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0'){
          setOutput(text);
        }else{
          setOutput(output + text)
        }
        break;
      case '':
        console.log('删除');
    }
  };

  return (
    <Wrapper>
      <div className="outputWrapper">
        <div className="icon">
          <Icon name="rmb"/>
        </div>
        <div className="output">
          {output}
        </div>
      </div>
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