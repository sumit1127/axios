import axios from "axios";
import { useEffect } from "react";

const App = () => {
  const fetchData = () => {
    // get method
    axios
      .get("https://api.bbm.com/posts")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // making get request with qwery params
    // axios
    //   .get("https://api.bbm.com/posts", {
    //     params: {
    //       category: "Oppenheimer",
    //       limit: 42,
    //     },
    //   })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    //post request with the data
    // const newData = {
    //   title: "new Data ",
    //   content: `The axios.post method
    //     employed to send newData object to server`,
    // };
    // axios
    //   .post("https://api.bbm.com/posts", newData)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    //making get request with custom headers
    // const config = {
    //   headers: {
    //     Authorization: "Bearer ACCESS_TOKEN",
    //   },
    // };

    // axios
    //   .get("https://api.example.com/protected-resource", config)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // concurrent request
    // const requestForPost = axios.get("https://api.bbm.com/posts");
    // const requestForTitle = axios.get("https://api.bbm.com/titles");

    // axios
    //   .all([requestForPost, requestForTitle])
    //   .then(
    //     axios.spread((requestForPost, requestForTitle) => {
    //       console.log(requestForPost);
    //       console.log(requestForTitle);
    //     })
    //   )
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>axios</div>;
};

export default App;
