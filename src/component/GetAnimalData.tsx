import  { useEffect, useState } from 'react'
import axios from "axios"
import moment from 'moment';
import { AnimalModel } from '../models/AnimalModel';
import { CheckHunger } from '../function/CheckHunger';
export const GetAnimalData = (setLoading: (state:boolean) => void, setAnimalList: (state:AnimalModel[]) => void) => {
    const [animals, setAnimals] = useState<AnimalModel[]>(JSON.parse(localStorage.getItem("animals")  || '[]') )
    useEffect(() => {
if(animals.length >= 1) return;
const Data = async() => {
  if (shouldUpdate) { 
  try {
      setLoading(true)
      const response = await axios.get<AnimalModel[]>('https://animals.azurewebsites.net/api/animals')
          localStorage.setItem(
            'animals',
            JSON.stringify(
              response.data.map(item => ({
                ...item,
                lastFed: moment(item.lastFed).format('YYYY-MM-DD HH:mm'),
                feedStatut:'full'
              }))
            )
          );
          setAnimals(JSON.parse(localStorage.getItem("animals")  || '[]'))
            CheckHunger()
            setAnimalList(JSON.parse(localStorage.getItem("animals")  || '[]'))
  } catch (error) {
    console.log('error')
  } finally{
    setInterval(() => {
      setLoading(false)
        }, 3000 ); 
  }
   }
 }
let shouldUpdate = true;
Data()
return () => { shouldUpdate = false}
 }) 
}
