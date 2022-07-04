import { render, screen ,fireEvent} from '@testing-library/react'
import {AppWrapper} from "../context/StateProvider"
import {reducer} from "../context/reducer"
import '@testing-library/jest-dom'
import Cart from "../components/Cart"
import Banner1 from "../BannerImages/Banner1.jpg"


describe('Checking Cart Component', () => {

        function renderCart(data){
            return render(
                <AppWrapper>
                 <Cart product={data}/>
                 </AppWrapper>
            )
        }
        const data1 = {id:1 , title:"Product Name" , price:500 , image:Banner1,quantity:7}
        const data2 = {id:8 , title:"Product Name" , price:700 , image:Banner1,quantity:2}
        var state ={
            basket:[data1,data2],
        }


        test('Should render Cart Elements ' , () =>{
            renderCart(data1);
            const Cartelement = screen.getByTestId('cart_1');
            const Image = screen.getByAltText('Product Image');
            expect(Image).toBeInTheDocument();
            expect(Cartelement).toBeInTheDocument();
            expect(Cartelement).toHaveTextContent(data1.title);
            expect(Cartelement).toHaveTextContent(data1.price);
        })
        test('Should render correct quantity in input field' , () =>{
            renderCart(data1);
            const InputField = screen.getByTestId('cart_quantity_1');
            expect(InputField).toBeInTheDocument();
            expect(InputField).toHaveAttribute("type","number");
            expect(InputField).toHaveValue(data1.quantity);
        })
        
        test('Should delete the cart item' , () =>{
            renderCart(data2);
            const deleteAction = {
                type: "DELETE_FROM_BASKET",
                item: {
                id: data1.id,
                },
            }
            const stateafter ={
                basket:[data2],
            }
            const logSpy = jest.spyOn(console, 'log');
            expect(reducer(state,deleteAction)).toEqual(stateafter);
            const deleteButton = screen.getByLabelText("Remove Button");
            fireEvent.click(deleteButton);
            expect(logSpy).toHaveBeenCalledWith('Deleted');
        })
        test('Should show changed quantiy in input field' , () =>{
            renderCart(data2);
            const InputField = screen.getByTestId('cart_quantity_8');
            fireEvent.change(InputField,{target:{value:10}});
            expect(InputField).toHaveValue(10);
            const logSpy = jest.spyOn(console, 'log');
            const updateButton = screen.getByLabelText("Update Button");
            fireEvent.click(updateButton);
            expect(logSpy).toHaveBeenCalledWith('Updated');

        })

       
    });