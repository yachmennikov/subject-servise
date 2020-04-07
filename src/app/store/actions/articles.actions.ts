import { Action } from '@ngrx/store';
import { Article } from '../reducers/articles.reducer';

export enum ArticlesActionTypes {
  Load = '[Article] Load',
  LoadSuccess = '[Article] Load Success',
  LoadFail = '[Article] Load Fail'
}

export class Load implements Action {
  readonly type = ArticlesActionTypes.Load;
}

export class LoadSuccess implements Action {
  readonly type = ArticlesActionTypes.LoadSuccess;
  constructor(public payload: Article[]) { }
}

export class LoadFail implements Action {
  readonly type = ArticlesActionTypes.LoadFail;
  constructor(public payload: string) { }
}

// union types
export type ArticlesActions = Load | LoadSuccess | LoadFail;
