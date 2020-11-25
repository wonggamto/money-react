import styled from 'styled-components';
import React, {useState} from 'react';
import Icon from '../../components/Icon';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.section`
    font-size: 18px;
    height: 80px;
    background: #464699;
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    > ul{
      margin: 0 68px;
      display: flex;
      width: 168px;
      height: 36px;
      justify-content: center;
      align-items: center;
      background: #5A5AA3;
      border-radius: 18px;
      > li{
        width: 50%;
        height: 28px;
        align-items: center;
        justify-content: center;
        padding-top: 4px;
        text-align: center;
        &.selected{
          background: #fff;
          color:#5A5AA3;
          border-radius: 14px;
          margin: 4px 4px;
        }
      }
    }
`;
const CategorySection: React.FunctionComponent = () => {
  const categoryMap = {'-': '支出', '+': '收入'};
  const [categoryList] = useState<('-' | '+')[]>(['-', '+']);
  const [category, setCategory] = useState('-');
  return (
    <Wrapper>
      <NavLink to='/statistics'>
        <Icon name="back"/>
      </NavLink>
      <ul>
        {categoryList.map(c =>
          <li key={c}
              className={category === c ? 'selected' : ''}
              onClick={() => {setCategory(c);}}>
            {categoryMap[c]}
          </li>
        )}

      </ul>
    </Wrapper>
  );
};
export {CategorySection};
