import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const inputFilterHandler = evt => {
    dispatch(addFilter(evt.target.value));
  };
  return <input type="text" style={{margin: '10px'}} name="filter" onChange={inputFilterHandler} />;
};

