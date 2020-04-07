import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Article } from 'src/app/store/reducers/articles.reducer';
import { Load } from '../../store/actions/articles.actions';
import { selectArticlesList } from '../../store/store';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles$: Observable<Article[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new Load());
    this.articles$ = this.store.pipe(select(selectArticlesList));
  }

}
