import Image from "next/image"
import { useAppContext } from "../../context/StateProvider";
import Header from '../../components/Header'


const ProductDetail = ({data}) =>{
    const {state, dispatch} = useAppContext();
  
    const addToBasket = () => {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: data._id,
          title: data.title,
          price: data.price,
          image: data.images,
        },
      });
    };


    return (
        <>
        <Header/>
        <div className="productdetail__window">
            <div className="productdetail__image">
                <Image src={data.images} alt=""></Image>
            </div>
            <div className="productdetail__info">
                <h4 className="productdetail__head">{data.title}</h4>are quam odio, a scelerisque libero rutrum nec. Nunc id turpis vel justo gravida tristique auctor nec purus. Nam cursus auctor augue, eget feugiat risus consequat ac.

In consectetur eget purus ac ullamcorper. Nunc finibus orci ac turpis hendrerit congue. is neque id, sollicitudin neque. Nam interdum viverra enim, a consequat nisl tempor at. Fusce aliquet tortor a ligula convallis malesuada.
                <p className="productdetail__cost">Rs .{data.price}</p>
            </div>
            <div className="productdetail__option">
                <button onClick={addToBasket} className="productdetail__button">Add to basket</button>
            </div>
        </div>
        </>
    );

}

export default ProductDetail;



export async function getServerSideProps(context){

    const {params} = context
    const {productid} = params
    const url = 'http://'+context.req.headers.host + '/api/product/'+productid;
    const response = await fetch(url)

    const data = await response.json()

    return {
        props:{
            data:data
        }
    }

}