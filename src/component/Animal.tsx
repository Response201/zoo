import  {  useState } from 'react'
import { Link } from 'react-router-dom';
import placeholder from '../assets/images/placeholder.jpg'
import { AnimalModel } from '../models/AnimalModel';
import { OnClickFeedAnimal } from '../function/OnClickFeedAnimal';
import { CheckHunger } from '../function/CheckHunger';
import { Heart } from './Heart';
interface Animal {
    idAnimal:number;
    name:string;
    latinName?:string;
    yearOfBirth?:number;
    shortDescription?:string;
    longDescription?:string;
    imageUrl?:string;
    medicine?:string;
    isFed:boolean;
    lastFed: string;
    feedStatut:string
}
interface Function{
  showButton:boolean;
  animalList:AnimalModel[];
  setAnimalList:  (animalList: AnimalModel[]) => void;
}
interface Props extends Animal, Function {}
export const Animal = ({idAnimal, name,latinName,yearOfBirth,shortDescription,longDescription,imageUrl,medicine,isFed,lastFed,showButton,  setAnimalList, animalList, feedStatut}:Props ) => {
  const [image, setimage] = useState<string>('start')
 /* timer => /* kallar checkHunger vid start samt engång i minuten */
   setInterval(() => {
    let  updatedAnimalList:AnimalModel[] = CheckHunger();
    setAnimalList(updatedAnimalList) 
      }, 60000 ); 
/* kallar feedanimal funktion som uppdaterar lastfed för det aktuella djuret, samt kör  funktionen CheckHunger  */
const onClickFeedAnimal = (id:number) => {
  
  let updatedAnimalList:AnimalModel[] | undefined = OnClickFeedAnimal(id, animalList) 
  if(updatedAnimalList && setAnimalList)
     setAnimalList(updatedAnimalList)
     let updatedAnimalListcheck:AnimalModel[]  = CheckHunger();
     setAnimalList(updatedAnimalListcheck) 
}
  return (
<section className='standardContainer animalContainer '>
<section className='animalContainer___nameAndImg'>
<h2>{name} <span className='animalContainer___nameAndImg__latinName'> {latinName ? `(${latinName})`: ''}</span> </h2>
     {imageUrl ? <section className='animalContainer___nameAndImg___imgContainer'> <img  
      src={image === 'showimage' ? imageUrl : placeholder} alt={name}
      onLoad={() => { if(image === 'start'){setimage('showimage')}}}
      onError={() =>{setimage('stop')} }
      /></section>
       : ''} 
      </section>
      <p>{shortDescription}</p>
      {longDescription? <p> {longDescription}</p> : ''}
      <section className='animalContainer___medecinAndBirthFoodContainer'> 
     { medicine?  <p>Mediciner: {medicine}</p> : ''}  {yearOfBirth? <p>Född: {yearOfBirth}</p> :''}     <section className='animalContainer___FoodStatusContainer'> <p>Senast matad: {lastFed}</p> <Heart feel={feedStatut}  /></section> 
     </section>
<section className={showButton ?'animalContainer___btnContainer':'animalContainer___btnContainer--one'}> 
<button className={showButton ? 'normalBtn': 'animalContainer___btnContainer___hide'}> <Link to={`/animal/${idAnimal}`} > Läs mer </Link></button> 
<button className={isFed ? 'animalContainer___btnContainer___hollow': 'feedBtn'} onClick={(e) => isFed ? '' : onClickFeedAnimal(idAnimal) }>Mata</button>  </section>
</section>
  )
}
