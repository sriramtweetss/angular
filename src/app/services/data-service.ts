import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/catch';
import {appError} from '../common/app-error';
import {notFoundError} from '../common/not-found-error';
import {BadInput} from '../common/bad-input';
import 'rxjs/add/observable/throw';

import { Observable } from '../../../../../../node_modules/rxjs';

import 'rxjs/Rx';






@Injectable()
export class DataService {
  
  constructor(private url:string, private http :Http) {
    
   }
   getAll(){
      // return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
     //return this.http.get(this.url).map(response => response.json()).catch(this.handleError);
     return this.http.get(this.url).pipe(map(response => response.json())).catch(this.handleError);
    // return this.http.get(this.url).pipe(map(response => response.json()))).catch(this.handleError);
   }

   create(resource){
    // return new Observable(new appError);
      return this.http.post(this.url,JSON.stringify(resource)).catch(
      this.handleError)
   }

   private handleError(error: Response){
 if(error.status===404){
   
         return Observable.throw(new notFoundError(error));
       }
       if(error.status===400){
return Observable.throw(new BadInput(error.json()));
       }
       return Observable.throw(new appError(error));
   }

   delete(id){
     //return new Observable(new appError);
     return this.http.delete(this.url+ '/'+id.id).catch(this.handleError);
   }
   update(resource){
     return this.http.patch(this.url+ '/'+resource.id,JSON.stringify({isRead:true})).catch(this.handleError);
   }


}