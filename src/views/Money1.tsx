import React from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Icon from '../components/Icon';

const TagsSection = styled.section`
    background: #FFF;
    display: flex;
    padding: 12px 0;
    flex-wrap: wrap;
    > .iconWrapper{
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-size: 32px;
      width: 25%; 
      margin: 0 16px;
      border-radius: 10%;
      background: #f5f5f5;
      > span{
      margin: 4px;
      font-size: 14px;
      }
    }
    
`;

const NoteSection = styled.section`
    height: 44px; 
    font-size: 22px;
    background: #FFF;
    display: flex;
    align-items: center;
    padding: 22px;
    > label{
      display: inline-block;
      margin-left: 22px;
      flex-grow: 1; 
      > input{
        display: block;
        width:100%;
        height: 44px;
      }
    }
`;

const CategorySection = styled.section`
     height: 88px;
     background: #464699;
     color:white;
     font-size:18px;
     display: flex;
     justify-content: center;
     align-items: center;
     > .categoryWrapper{
        display: flex;
        width: 164px;
        height: 36px;
        align-items: center;
        justify-content: center;
        text-align: center;
        background: #5A5AA3;
        border-radius: 18px;
        > .pay{
          width: 50%;
          height: 28px;
          align-items: center;
          justify-content: center;
          padding-top: 4px;
          &.selected{
            background: #fff;
            color: #5A5AA3;
            border-radius: 14px;
            margin: 4px 4px;
          }
        }
        > .income{
          width: 50%;
          height: 28px;
          align-items: center;
          justify-content: center;
          padding-top: 4px;
          //border:1px solid pink; 
        }
     }
    
`;

const NumberPad = styled.section`
    height: 58px;
    background: #F4F6F9;
    font-size: 24px;
    display: flex;
    align-items: center;
    > label{
      display: flex;
    }
    
`;

const TimePanel = styled.section`
  height: 44px; 
  font-size: 22px;
  background: #FFF;
  display: flex;
  align-items: center;
  padding: 22px;
  > .dayDemo{
    margin-left: 22px;
    font-size: 18px;
  }
`;

const OutPut = styled.section`
    font-size: 18px;
    height: 58px;
    background: #F4F6F9;
    display: flex;
    align-items: center;
    padding: 0 22px;
    justify-content: space-between;
    > .outputIcon{
      font-size: 24px;
    }
    > .price{
      font-size: 24px;
    }
`;

function Money1() {
  return (
    <div className="wrapper">
      <CategorySection>
        <div className="categoryWrapper">
          <div className="pay selected">支出</div>
          <div className="income">收入</div>
        </div>
      </CategorySection>
      <TagsSection>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
        <div className="iconWrapper">
          <Icon name="gift"/>
          <span>购物</span>
        </div>
      </TagsSection>
      <OutPut>
        <div className="outputIcon">
          <Icon name="rmb"/>
        </div>
        <div className="price">
          100
        </div>
      </OutPut>
      <TimePanel>
        <Icon name="calendar"/>
        <div className="dayDemo">
          2020年11月20日 01:22 星期五
        </div>
      </TimePanel>
      <NoteSection>
        <Icon name="note"/>
        <label>
          <input type="text" placeholder="东莞一日游"/>
        </label>
      </NoteSection>
    </div>
  );
}

export default Money1;