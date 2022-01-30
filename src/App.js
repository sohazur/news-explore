import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import News from "./components/News/News";

function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/everything?q=tesla&from=2021-12-30&sortBy=publishedAt&apiKey=c0e4ab90995e452b9cd75488dc88793b"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  return (
    <div className="App">
      <Row xs={1} md={2} className="g-4">
        {news.map((nw) => (
          <News news={nw}></News>
        ))}
      </Row>
    </div>
  );
}

export default App;
