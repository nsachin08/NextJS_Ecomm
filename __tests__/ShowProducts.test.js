import { render, screen ,fireEvent} from '@testing-library/react'
import ShowProducts from '../components/ShowProducts'
import Banner1 from "../BannerImages/Banner1.jpg"
import '@testing-library/jest-dom'

describe('Cheking Show Multiple Products', () =>{

    const data = [
        {id:1 , title:"Product1 Name" , price:500 , images:Banner1,quantity:7},
        {id:2 , title:"Product2 Name" , price:700 , images:Banner1,quantity:2},
        {id:3 , title:"Product3 Name" , price:900 , images:Banner1,quantity:2},
        {id:4 , title:"Product4 Name" , price:1000 , images:Banner1,quantity:2},
        {id:5 , title:"Product5 Name" , price:500 , images:Banner1,quantity:7},
        {id:6 , title:"Product6 Name" , price:700 , images:Banner1,quantity:2},
        {id:7 , title:"Product7 Name" , price:900 , images:Banner1,quantity:2},
        {id:8 , title:"Product8 Name" , price:1000 , images:Banner1,quantity:2},
        {id:9 , title:"Product9 Name" , price:700 , images:Banner1,quantity:2},
        {id:10 , title:"Product10 Name" , price:900 , images:Banner1,quantity:2},
        {id:11 , title:"Product11 Name" , price:1000 , images:Banner1,quantity:2}
    ]

    test('Loading Multiple Products',()  =>{

        render(<ShowProducts data={data} />);
        const Product1 = screen.getByTestId('product_1');
        const Product2 = screen.getByTestId('product_2');
        const Product3 = screen.getByTestId('product_3');
        const Product4 = screen.getByTestId('product_4');
        expect(Product1).toBeInTheDocument();
        expect(Product2).toBeInTheDocument();
        expect(Product3).toBeInTheDocument();
        expect(Product4).toBeInTheDocument();
        expect(screen.queryByTestId('product_11')).not.toBeInTheDocument();
        expect(screen.queryByTestId('product_8')).not.toBeInTheDocument();

        

    })



})