import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {LogoApiService} from '../../shared/services/logo-api.service';
import {map, Observable} from 'rxjs';
import {Source} from '../model/source.entity';
import {Article} from '../model/article.entity';
import {SourceAssembler} from './source.assembler';
import {ArticleAssembler} from './article.assembler';
import {SourcesResponse} from './source.response';
import {TopHeadlinesResponse} from './top-headlines.response';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  private baseUr = environment.newsProviderApiBaseUrl;
  private newsEndpoint = environment.newsProviderNewsEndpointPath;
  private sourcesEndpoint = environment.newsProviderSourcesEndpointPath;
  private apiKey = environment.newsProviderApiKey;

  constructor(private http: HttpClient, private logoApiService: LogoApiService) { }

  getSources(): Observable<Source[]> {
    return this.http.get<SourcesResponse>(`${this.baseUr}${this.sourcesEndpoint}`,{
      params: { apiKey: this.apiKey }
    }).pipe(
      map(res => SourceAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(res))
    );
  }


  getArticlesBySourceId(sourceId: string): Observable<Article[]> {
    return this.http.get<TopHeadlinesResponse>(`${this.baseUr}${this.newsEndpoint}`,{
      params: { apiKey: this.apiKey, sources: sourceId }
    }).pipe(
      map(res => ArticleAssembler.withLogoApiService(this.logoApiService).toEntitiesFromResponse(res))
    );;
  }

}
