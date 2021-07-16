import { ReactComponent as Cross } from './cross.svg';
import { ReactComponent as Sort } from './sort.svg';
import { sortBy } from 'lodash';
import React from 'react';
const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENT: list => sortBy(list, 'num_comments').reverse(),
    POINT: list => sortBy(list, 'points').reverse(),
  };
const List = ({ list, onRemoveItem }) =>{
    const [sort, setSort] = React.useState({
        sortKey: 'NONE',
        isReverse: false,
      });

    const handleSort = sortKey => {
        const isReverse = sort.sortKey === sortKey && !sort.isReverse;
    
        setSort({ sortKey: sortKey, isReverse: isReverse });
      };
    
      const sortFunction = SORTS[sort.sortKey];
      const sortedList = sort.isReverse
    ? sortFunction(list).reverse()
    : sortFunction(list);

    
    
    return(
   <div>
     <div style={{display:'flex',marginBottom:'10px'}}>
        <span style={{ width: '40%' }}>
           
          <button  className="button button_small" type="button" onClick={() => handleSort('TITLE')}>
           Title <Sort height='10px' width='30px'/>
          </button>

        </span>
        <span style={{ width: '28%' }}>
       
          <button  className="button button_small" type="button" onClick={() => handleSort('AUTHOR')}>
           
          Author <Sort height='10px' width='30px'/>
          </button>

        </span>
        <span style={{ width: '12%' }}>
      
          <button  className="button button_small" type="button" onClick={() => handleSort('COMMENT')}>
          Comments <Sort height='10px' width='30px'/>
          </button>

        </span>
        <span style={{ width: '10%' }}>
        
          <button  className="button button_small" type="button" onClick={() => handleSort('POINT')}>
          Points <Sort height='10px' width='30px'/>
          </button>
        </span>
        
      </div>

    {sortedList.map(item => (
      <Item
        key={item.objectID}
        item={item}
        onRemoveItem={onRemoveItem}
      />

    ))}
  </div>
)
    }

const Item = ({ item, onRemoveItem }) => (
  <div className="item">
    <span style={{ width: '40%' }}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{ width: '30%' }}>{item.author}</span>
    <span style={{ width: '10%' }}>{item.num_comments}</span>
    <span style={{ width: '10%' }}>{item.points}</span>
    <span style={{ width: '10%' }}>
      <button
        type="button"
        onClick={() => onRemoveItem(item)}
        className="button button_small"
      >
        <Cross height="18px" width="18px" />
      </button>
    </span>
  </div>
);
export default List;