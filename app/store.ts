import {
  configureStore,
  combineReducers,
  ThunkAction,
  Action,
  AnyAction,
  CombinedState,
} from "@reduxjs/toolkit";
import { createWrapper, Context, HYDRATE } from "next-redux-wrapper";
import themeReducer, { TTheme } from "../features/theme/themeSlice";
import counterReducer from "../features/counter/counterSlice";
import newsReducer from "../features/news/newsSlice";
import advertisesReducer from "../features/advertises/advertisesSlice";

export interface State {
  theme: TTheme;
}

/*
const reducer = (state: any, action: AnyAction): CombinedState<State> => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      const combineReducer = combineReducers({
        theme: themeReducer,
      });
      return combineReducer(state, action);
    }
  }
};
*/

/**
 * 비동기 함수 처리를 위해 thunk 리덕스 함수룰 사용해야하는데
 * 이때 redux-thunk 미들웨어를 리덕스 store 생성시 추가해야 한다.
 * configureStore 함수는 이미 자동으로 이 세팅이 되어 있어서 thunks 를 사용할 수 있다.
 */
export const store = configureStore({
  //reducer,
  reducer: {
    theme: themeReducer,
    counter: counterReducer,
    news: newsReducer,
    advertises: advertisesReducer,
  },
});

// create a makeStore function
const makeStore = () => store;

const wrapper = createWrapper(makeStore, { debug: true });

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default wrapper;
