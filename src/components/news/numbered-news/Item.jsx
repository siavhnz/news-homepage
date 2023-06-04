const NumberedNewsItem = ({ number, image, title, description }) => {
  return (
    <div className="flex flex-1 gap-x-7">
      <img alt={title} src={image} className="w-[6.25rem] self-start" />
      <div>
        <p className="text-3xl font-bold text-grayish-blue">{number}</p>
        <h2 className="pt-1 text-lg font-bold text-very-dark-blue transition-all duration-700 hover:text-soft-red">
          <a href="#">{title}</a>
        </h2>
        <p className="pt-2 text-dark-grayish-blue">{description}</p>
      </div>
    </div>
  );
};

export default NumberedNewsItem;
