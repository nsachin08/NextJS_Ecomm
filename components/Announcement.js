function Announcement() {
  const mystyle = {
    width: "382px",
    height: "332px",
  };
  const mystyle1 = {
    width: "778px",
    height: "332px",
  };
  return (
    <>
      <section className="annocument background" data-testid="Announcement">
        <div className="container f_flex ">
          <div className="img" style={mystyle}>
            <img
              src="/announcement/banner-1.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="img" style={mystyle1}>
            <img
              src="/announcement/banner-2.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="img" style={mystyle}>
            <img
              src="/announcement/banner-1.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Announcement;
