import { Component, Input } from "@angular/core";
import { CardContent } from "./card.interface";

@Component(
    {
        selector:'app-card',
        templateUrl:'./card.component.html',
        styleUrls:['./card.component.scss']
    }
)
export class CardComponent{
    @Input() cardContent!:CardContent;
}