import ShowProduct from "./ShowProduct";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import styles from "../styles/ShowProducts.module.css";

const ShowProducts = (props) => {
  const { data } = props;
  const itemsPerPage = 8;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <section className="shop background">
        <div className="container d_flex">
          <div className="contentWidth">
            <div className="heading d_flex">
              <div className="heading-left row  f_flex">
                <i className="fa fa-shopping-cart"></i>
                <h2>All Products</h2>
              </div>
            </div>
            <div className="product-content  grid1">
              {currentItems &&
                currentItems.map((product, index) => {
                  return <ShowProduct product={product} key={index} />;
                })}
            </div>
            <div data-testid="Paginate_option">
              <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                containerClassName={styles.pagination}
                pageLinkClassName={styles.page_num}
                previousLinkClassName={styles.page_num}
                nextLinkClassName={styles.page_num}
                activeLinkClassName={styles.active}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShowProducts;
