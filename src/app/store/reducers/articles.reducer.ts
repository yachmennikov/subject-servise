import { ArticlesActionTypes, ArticlesActions } from '../actions/articles.actions';

export interface Article {
  title: string;
  text: string;
  author: string;
}

export interface ArticlesState {
  articles: Article[];
}

const initilState: ArticlesState = {
  articles: []
};

export const articlesReducer = (state = initilState, action: ArticlesActions): ArticlesState => {
  switch (action.type) {
    case ArticlesActionTypes.LoadSuccess:
      return { ...state, articles: action.payload };
    case ArticlesActionTypes.LoadFail:
      return { ...state, articles: [] };
    default:
      return state;
  }
};


