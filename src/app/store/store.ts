import * as Articles from './reducers/articles.reducer';
import { createSelector, ActionReducerMap } from '@ngrx/store';

export interface AppState {
  articles: Articles.ArticlesState;
}

export const reducers: ActionReducerMap<AppState> = {
  articles: Articles.articlesReducer
};

export const selectArticles = (state: AppState) => state.articles;
export const selectArticlesList = createSelector(
  selectArticles,
  (state: Articles.ArticlesState) => state.articles
);
