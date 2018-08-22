import {Pipe, PipeTransform} from '@angular/core';


@Pipe({
    name:'Summary'
})
export class SummaryPipe implements PipeTransform{ 
 transform(value:string,limit?:number){
    if(!value){
        return null;
    }else{
        console.log(limit)
        return value.substr(0,limit)+ '....';
    }
 }
}