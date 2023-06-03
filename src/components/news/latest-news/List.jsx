import { latestNews } from "../../../store/latest-news";
import LatestNewsItem from "./Item";

const LatestNews = () => {
  return (
    <aside className="mt-20 bg-very-dark-blue px-5 lg:mt-0 sxl:min-w-[21.875rem] sxl:px-6">
      <h3 className="py-4 text-[2rem] font-extrabold text-soft-orange sxl:pb-4 sxl:pt-6 sxl:text-[2.5rem]">
        New
      </h3>
      {latestNews.map((item, index) => {
        return (
          <LatestNewsItem
            key={index}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </aside>
  );
};
export default LatestNews;
