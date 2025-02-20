import axios from 'axios'
export const categoriess=async()=>{
    try{
     const response=await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
     console.log("first check .........",response.data.categories);
     return response.data.categories
    }catch(err){

    }
}

export const singleCategory=async(value)=>{
    try{
const response=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${value}`)
console.log("single datas",response.data.meals);
return response.data.meals
    }catch(err){

    }
}