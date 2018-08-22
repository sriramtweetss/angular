


import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import {appError} from '../common/app-error';
import {notFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import 'rxjs/add/observable/throw';

import { map } from 'rxjs/operators';
import { Observable } from '../../../../../../node_modules/rxjs';


import {DataService} from './data-service';



@Injectable()
export class PostService extends DataService{

  constructor( http :Http) {
    super('https://jsonplaceholder.typicode.com/posts',http);
   }
   
}