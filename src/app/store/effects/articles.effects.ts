import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArticlesService } from '../../servises/articles.service';
import * as articlesActions from '../actions/articles.actions';

@Injectable()
export class ArticlesEffects {

  constructor(private articlesServise: ArticlesService,
              private actions$: Actions) {}

  @Effect()
  loadArticles: Observable<Action> = this.actions$.pipe(
    ofType(articlesActions.ArticlesActionTypes.Load),
    switchMap( action =>
      this.articlesServise.getArticles().pipe(
        map(articles => (new articlesActions.LoadSuccess(articles))),
        catchError(err => of(new articlesActions.LoadFail(err)))
      )
    )
  );
}
