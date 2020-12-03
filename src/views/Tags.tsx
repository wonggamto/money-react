import React from 'react';
import Layout from 'components/Layout';
import {useTags} from 'useTags';
import {TopBar} from './TopBar';
import styled from 'styled-components';
import Icon from 'components/Icon';
import {Link} from 'react-router-dom';

const TagList = styled.ol`
  background: #FFF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  flex-wrap: wrap;
  
    
  > li{
    background: #f5f5f5;
    display: flex;
    width: 68px;
    height: 68px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    padding: 0 24px;
    border-radius: 30%;
    margin: 4px 6px ;
    overflow: hidden;
    > .oneLine{
    white-space: nowrap;
    text-overflow: ellipsis; 
    font-size: 12px;
    text-align: center;
   
    }
  }
  > button{
    width: 68px;
    height: 68px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 32px;
    border: none;
    border-radius: 30%;
    background: #F5F5F5;
    margin: 4px 6px;
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
            <span className="oneLine">{tag.name}111111fsfas111dsfasfasfs111111111</span>
          </li>
        )}
        <button className="add"><Icon name="add"/></button>
      </TagList>
    </Layout>
  );
}

export {Tags};