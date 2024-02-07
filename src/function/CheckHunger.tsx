import moment from 'moment';
import { AnimalModel } from '../models/AnimalModel';

export const CheckHunger = () =>  {
        const animalList = JSON.parse(localStorage.getItem("animals") || '[]') as AnimalModel[];
        const newDate = moment(new Date());
        const newList:AnimalModel[] = animalList.map((animal: AnimalModel) => {
          const duration = moment.duration(newDate.diff(animal.lastFed));
          const hours:number = duration.hours();
          const day:number = duration.days();
          const year:number = duration.years();
    
          if( hours >= 4 || day >= 1 || year >= 1){
            return { ...animal, isFed: false, feedStatut: 'urgent' }}


          else if(hours >= 3 ){
            return { ...animal, isFed: false, feedStatut: 'hungry' }}

          else{
           return { ...animal, isFed: true, feedStatut: 'full' }}

        });

  localStorage.setItem('animals',  JSON.stringify(newList))
return newList
};
