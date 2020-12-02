import React from 'react';
import Layout from '../components/Layout';
import {useTags} from '../useTags';
import {TopBar} from './TopBar';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { Link } from 'react-router-dom';

const TagList = styled.ol`
  font-size: 32px;
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  flex-wrap: nowrap;
  > li{
    list-style: none;
    width:68px;
    height: 68px;
    margin: 0 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    border-radius: 30%;
  }
  > button{
              
`;
const Button = styled.button`
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
          </li>
        )}
      </TagList>
      <Button><Icon name="add"/></Button>
    </Layout>
  );
}

export {Tags};