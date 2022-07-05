import { useSelector, useDispatch } from 'react-redux';
import { createSlice } from '@reduxjs/toolkit';

// Slice
const clicksSlice = createSlice({
  name: 'contacts',
  initialState: { value: [] },
  reducers: {
    add(state, actions) {
      return state;
    },
    // delete(state, actions) {
    //   return state;
    // },
  },
});

export const clicksReducer = clicksSlice.reducer;

/**
 *    const contact = {
      id: nameInputId(),
      name,
      number,
    };

    setContacts(state => {
      const isExistName = state.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      );

      if (isExistName) {
        toast.error(`${name} is already in contacts`);
        return state;
      }

      return [contact, ...state];
    }); 
 */

// const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 0 },
//   reducers: {
//     increment(state, action) {
//       state.value += action.payload;
//     },
//     reset(state) {
//       state.value = 0;
//     },
//   },
// });

// export const clicksReducer = clicksSlice.reducer;

export const { add } = clicksSlice.actions;

// // Selectors
// export const getClicks = state => state.clicks.value;

// // Hooks
// export const useClicks = () => {
//   const dispatch = useDispatch();
//   const numberOfClicks = useSelector(getClicks);
//   const handleIncrement = value => dispatch(increment(value));
//   const handleReset = () => dispatch(reset());

//   return {
//     numberOfClicks,
//     increment: handleIncrement,
//     reset: handleReset,
//   };
// };
