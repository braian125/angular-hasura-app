import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders} from '@angular/common/http';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { stringify } from '@angular/compiler/src/util';
import { CommonModule } from '@angular/common';



@NgModule({
  exports: [
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ]
})
export class GraphQlModule { 
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = 'bvanegasapp.herokuapp.com/';

    const authHeader = new HttpHeaders()
    .set('X-HASURA-ACCESS-KEY', 'secret')
    .set('ContentType', 'application/json')
    .set('Authorisation', `Bearer ${localStorage.getItem('access_token')}`)
    .set('X-Hasura-Role', 'user')
    .set('X-Hasura-User-Id', stringify(localStorage.getItem('userId')))

    console.log(localStorage.getItem('user_id'));
    const http = httpLink.create({uri, headers: authHeader});	
    apollo.create({
      link: http,
      cache: new InMemoryCache()
    });
  }
}
