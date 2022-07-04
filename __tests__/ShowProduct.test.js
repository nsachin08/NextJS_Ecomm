import { render, screen ,fireEvent} from '@testing-library/react'
import {AppWrapper} from "../context/StateProvider"
import '@testing-library/jest-dom'
import ShowProduct from "../components/ShowProduct"
import Banner1 from "../BannerImages/Banner1.jpg"
import {reducer} from "../context/reducer"


describe('Checking Product Component', () => {

    function renderProduct(data){
        return render(
            <AppWrapper>
             <ShowProduct product={data}/>
             </AppWrapper>
        )
    }

    const data1 = {id:1 , title:"Product Name" , price:500 , images:Banner1,quantity:1}
    const state = {
        basket: [],
    }

    test('Should render Product Elements ' , () =>{
        renderProduct(data1);
        const Product = screen.getByTestId('product_1');
        expect(Product).toHaveTextContent(data1.title)
        expect(Product).toHaveTextContent(data1.price)
    })

    test('Should Add to Cart upon clicking in Add to cart',()=>{
        const addAction ={
            type: "ADD_TO_BASKET",
            item: {
              id: data1.id,
              title: data1.title,
              price: data1.price,
              images: data1.images,
            },
        }
        const stateafter = {
            basket:[data1]
        }
         expect(reducer(state,addAction)).toEqual(stateafter);
         data1.quantity=2;
         const stateafter1 ={
            basket:[data1]
         }
         expect(reducer(state,addAction)).toEqual(stateafter1);


    })


});