import {getServerSideProps} from "../pages/product/[productid]"
const data1 = {id:1 , title:"Product Name" , price:500}


describe('getServerSideProps',() =>{

    window.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          data: data1
        })
    })
  );


  it("should call productid api", async () => {
    const context={
        params:{
            productid:1
        },
        req:{
            headers:{
                host:'localhost'
            }
        }
    }
    const response = await getServerSideProps(context);
    expect(response).toEqual(
      expect.objectContaining({
        props: {
          data: {
            data: data1
          }
        }
      })
    );
  });
})


