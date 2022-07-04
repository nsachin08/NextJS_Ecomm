import { reducer } from "../context/reducer";
import Banner1 from "../BannerImages/Banner1.jpg"

describe('Reducer All functions', () => {

  

    const data1 = {id:1 , title:"Product Name" , price:500 , image:Banner1,quantity:7}
    const data2 = {id:2 , title:"Product Name" , price:700 , image:Banner1,quantity:2}
    const data3= {id:3 , title:"Product Name" , price:300 , image:Banner1}
    const state ={
        basket:[data1,data2],
    }
    test(' Deleting from Basket' , () =>{
        const deleteAction = {
            type: "DELETE_FROM_BASKET",
            item: {
            id: data1.id,
            },
        }
        const stateafter ={
            basket:[data2],
        }
        expect(reducer(state,deleteAction)).toEqual(stateafter);
    })

    test('Adding to Basket', () =>{
        const addAction ={
            type: "ADD_TO_BASKET",
            item: {
              id: data3.id,
              title: data3.title,
              price: data3.price,
              image: data3.image,
            },
        }
        data3.quantity=1;
        const stateafter ={
           
            basket:[data2,data3],
        }
        expect(reducer(state,addAction)).toEqual(stateafter);
          
    })
    test('Updating the Basket', () =>{
        const UpdateAction ={
            type: "ON_CHANGE_BASKET",
             item: {
            quantity: 8,
            id: 3,
      },
        }
        data3.quantity=8;
        const stateafter ={
            basket:[data2,data3],
        }
        expect(reducer(state,UpdateAction)).toEqual(stateafter);
          
    })

    test('Default Cheking',() =>{
        const NoAction ={
            type: "DEFAULT",
      }
      expect(reducer(state,NoAction)).toEqual(state);
    })

});