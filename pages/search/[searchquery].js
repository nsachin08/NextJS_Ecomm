import ShowProducts from '../../components/ShowProducts'
import Header from '../../components/Header'

function Search({data}){

    return (
        <>
            <Header />
            <div className='Products'>
                <ShowProducts data={data} />
            </div>

        </>
    )
}


export default Search

export async function getServerSideProps(context){


    const {params} = context
    const {searchquery} = params
    const response = await fetch(`https://sachinecomm.herokuapp.com/search/${searchquery}`)

    const data = await response.json()

    return {
        props:{
            data:data
        }
    }

}