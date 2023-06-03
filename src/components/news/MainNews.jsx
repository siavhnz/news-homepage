const MainNews = () => {
  return (
    <secion>
      <picture>
        <source
          media="(max-width: 686px)"
          srcSet="/images/image-web-3-mobile.jpg"
        />
        <source
          media="(min-width: 689px)"
          srcSet="/images/image-web-3-desktop.jpg"
        />
        <img
          srcSet="/images/image-web-3-mobile.jpg"
          alt="The Bright Future of Web 3.0?"
        />
      </picture>
      <div className="sxl:flex">
        <h1 className="pr-8 flex-1 pt-6 font-Inter text-[2.5rem] font-bold leading-10 sxl:pt-8 sxl:text-[3.5rem] sxl:leading-[3.65rem]">
          The Bright Future of Web 3.0?
        </h1>
        <div className="flex-1">
          <p className="pt-4 leading-[1.65rem] text-dark-grayish-blue sxl:pt-7 sxl:leading-6">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div className="pt-8 sxl:pt-12">
            <a className="bg-soft-red px-8 py-4 text-sm uppercase tracking-[0.28rem] text-white transition-all duration-700 hover:cursor-pointer hover:bg-very-dark-blue">
              Read more
            </a>
          </div>
        </div>
      </div>
    </secion>
  );
};

export default MainNews;
