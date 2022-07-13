import FlashCards from "./FlashCards";

const FlashDeals = () => {
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h2>Flash Deals</h2>
          </div>
          <FlashCards />
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
