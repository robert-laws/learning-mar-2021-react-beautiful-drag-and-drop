import { BUILD_LESSON } from '../types';

const lessonsReducer = (state, action) => {
  switch (action.type) {
    case BUILD_LESSON: {
      return {
        ...state,
        lesson: {
          ...state.lesson,
          [action.payload.inputName]: action.payload.value,
        },
      };
    }

    default:
      return state;
  }
};

export default lessonsReducer;
