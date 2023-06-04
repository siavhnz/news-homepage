const LatestNewsItem = ({ title, description }) => {
  return (
    <div className="mb-5 border-b border-dark-grayish-blue pb-7 last:mb-0 last:border-none">
      <h3 className="pt-1 text-[1.27rem] font-extrabold text-white transition-all duration-700 hover:cursor-pointer hover:text-soft-orange">
        <a href="#">{title}</a>
      </h3>
      <p className="pt-1 leading-7 text-dark-grayish-blue">{description}</p>
    </div>
  );
};

export default LatestNewsItem;
