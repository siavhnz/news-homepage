import { numberedNews } from "../../../store/numbered-news";
import NumberedNewsItem from "./Item";

const NumberedNews = () => {
  return numberedNews.map((item) => {
    return (
      <NumberedNewsItem key={item.number}
        image={item.image}
        title={item.title}
        number={item.number}
        description={item.description}
      />
    );
  });
};

export default NumberedNews;
