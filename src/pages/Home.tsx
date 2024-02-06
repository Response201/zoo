import  { useState } from 'react'
import image from '../assets/images/header.jpg'
import ShowHungryanimals from '../component/ShowHungryanimals'
import { Background } from '../component/Background'
import { GetAnimalData } from '../component/GetAnimalData'
import { AnimalModel } from '../models/AnimalModel'
import { Loading } from '../component/Loading'
const Home =  () => {
const [loading, setLoading] = useState<boolean>(false)
const [animalList, setAnimalList] =  useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]'))
/* hämtar data och uppdaterar loading samt animalList, localstorage */
GetAnimalData(setLoading, setAnimalList)
  return (
  <article className='homeArticle'  id='scrollTo'> 
<section className='headerContainer'>
<Background />
<h1 className='text'>Mata djuren</h1>
<h1 className='text-shadow'>Mata djuren</h1>
<section className='imageContainer'> <img src={image} alt="background"  /></section>
    </section>
  <section className='HomeContainer'> 
  {!loading ?
  <section className='HomeSection'>
<ShowHungryanimals animalList={animalList} setAnimalList={setAnimalList} />
</section>
: <Loading />
}
  </section>
</article>
  )
}
export default Home
