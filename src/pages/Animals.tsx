import  { useState } from 'react'
import { AnimalModel } from '../models/AnimalModel';
import { Animal } from '../component/Animal';
import { Background } from '../component/Background';
const Animals = () => {
  const [animalList, setAnimalList] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))
  return (<article className='animalArticle'  id='scrollTo'>
<Background />
    <h2>Alla våra djur</h2>
<section className='manyObjectsContainer'> 
{animalList.map((animalItem) => {
          return (
          <section key={animalItem.id} >
<Animal 
idAnimal={animalItem.id}
    name={animalItem.name}
    shortDescription={animalItem.shortDescription}
    imageUrl={animalItem.imageUrl}
    isFed={animalItem.isFed}
    lastFed={animalItem.lastFed} 
    showButton={true}
    animalList={animalList}
    setAnimalList={setAnimalList}
    feedStatut={animalItem.feedStatut}
    />
    </section>
)
      })}
</section>
  </article>)}
export default Animals
