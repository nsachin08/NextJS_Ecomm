function Announcement() {
  return (
    <>
      <section className="annocument background" data-testid="Announcement">
        <div className="container f_flex ">
          <div className="img" >
            <img
              src="/announcement/banner-1.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="img" >
            <img
              src="/announcement/banner-2.png"
              width="100%"
              height="100%"
              alt=""
            />
          </div>
          <div className="img">
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
