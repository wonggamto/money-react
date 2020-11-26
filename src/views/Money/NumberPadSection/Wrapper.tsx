import styled from 'styled-components';

const Wrapper = styled.section`
   >.cleafix::after{
      content:'';
      display: block;
      clear: both;
      }
      > .icon{
        font-size: 24px;
        padding-left: 8px;
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
          background: #464699;  
          color: #ffffff;
        }
        >.zero{
          width:50%;
        } 
        > .backspace{
          font-size: 24px;
        }
   }
`;
export {Wrapper};