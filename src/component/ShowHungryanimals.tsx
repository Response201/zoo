import { AnimalModel } from '../models/AnimalModel'
import { Animal } from './Animal'
interface Function{
  animalList:AnimalModel[];
  setAnimalList:  (animalList: AnimalModel[]) => void;
}
export const ShowHungryanimals =  ({animalList, setAnimalList}: Function) => { 
if(animalList.length >= 1){
  const urgentHungryAnimal:AnimalModel[] =  animalList.filter((animalItem:AnimalModel) => {
if ( animalItem.feedStatut === 'urgent') {
return {...animalItem}
}
})
const hungryAnimal:AnimalModel[] =  animalList.filter((animalItem:AnimalModel) => {
    if ( animalItem.feedStatut === 'hungry') {
    return {...animalItem}
    }
    })
    return(
    <section className='hungryAnimalsContainer'> 
       {urgentHungryAnimal.length >= 1 ? <section>
    <h2>Djur som behöver mat omgående</h2>
  <section className='manyObjectsContainer allAnimalContainer'>
  {urgentHungryAnimal.map(animalItem =>
  <Animal 
  idAnimal={animalItem.id}
      name={animalItem.name}
      isFed={animalItem.isFed}
      lastFed={animalItem.lastFed} 
      showButton={true}
      animalList={animalList}
      setAnimalList={setAnimalList}
      feedStatut={animalItem.feedStatut}
      key={animalItem.id}
      />
    )}
  </section>
  </section> : ''}
  {hungryAnimal.length >= 1 ?
    <section >
    <h2>Djur som behöver mat snart</h2>
  <section className='manyObjectsContainer allAnimalContainer'>
  {hungryAnimal.map(animalItem =>
  <Animal 
  idAnimal={animalItem.id}
      name={animalItem.name}
      isFed={animalItem.isFed}
      lastFed={animalItem.lastFed} 
      showButton={true}
      animalList={animalList}
      setAnimalList={setAnimalList}
      feedStatut={animalItem.feedStatut}
      key={animalItem.id}
      />
    )}
  </section>
  </section> : '' }
<section className='hungryAnimalsContainer___text--NoHunger'> 
{  urgentHungryAnimal.length <= 0 && hungryAnimal.length  <= 0 ?   <h2>Alla djur har fått mat </h2> : ''        }
</section>
  </section>)}
}
export default ShowHungryanimals
