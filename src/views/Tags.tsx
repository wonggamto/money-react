import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import {TopBar} from './TopBar';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  display: flex;
  flex-wrap: wrap;
  padding: 12px 24px;
  overflow: scroll;
 > li{
    background: #F5F5F5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 68px;
    height: 68px;
    font-size: 32px;
    margin: 6px 6px;
    border-radius: 30%;
  }
    > button{
      width: 68px;
      height: 68px;
      font-size: 32px;
      margin: 4px 6px;
      border: none;
      border-radius: 30%; 
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #F5F5F5;
   }
`;
function Tags() {
  const {tags} = useTags();
  return (
    <Layout>
      <TopBar/>
      <TagList>
        {tags.map(tag =>
          <li key={tag.id}>
            <Link to={'/tags/' + tag.id}>
              <Icon name={tag.name}/>
            </Link>
            <span className="oneLine">{tag.id}:{tag.name}</span>
          </li>
        )}
        <button className="add"><Icon name="add"/></button>
      </TagList>
    </Layout>
  );
}

export {Tags};