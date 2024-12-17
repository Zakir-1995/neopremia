import "./BreakingNews.css";
/* eslint-disable react/prop-types */
const BreakingNews = ({ message }) => {
  return (
    <div className="breaking-news-container relative ">
      <div className="breaking-news-scroll">
        <span className="text-lg">{message}</span>
      </div>
    </div>
  );
};

export default BreakingNews;
