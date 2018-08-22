import {Component, Input, Output} from '@angular/core';

@Component({
selector:'favorite',
templateUrl:'./favorite.component.html'
    
})
export class FavoriteComponent{

    @Input() isFavorite : boolean;

    viewMode = 'map';
    @Output() onClick(){
        this.isFavorite = !this.isFavorite;
    }

}