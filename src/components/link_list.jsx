import React from 'react';
import LinkListItem from './link_list_item';

const LinkList = (props) => {
  const linkItems = props.links.map((link) => {
    return (
      <LinkListItem
        key={link.id}
        link={link}
      />
    );
  });

  return (
    <ul>
      {linkItems}
    </ul>
  );
};

export default LinkList;
