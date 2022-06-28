import Head from "next/head"
import ShowProducts from '../components/ShowProducts'
import Header from '../components/Header'

export default function Home({data}) {
  
  return (
    <>
    <Head>
        <title>Ecomm</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <Header  />
    <div className='Home'>
      <ShowProducts data={data} />
    </div>
    </>
  )
}

export async function getServerSideProps(context)
{ 
    const url = 'http://'+context.req.headers.host + '/api/products';
    const response = await fetch(url);
    const data = await response.json()

    return {
      props:{
          data:data
      }
    }
}
