import { useEffect } from "react";

const API_URL =
  "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const API_URL = "https://www.google.com";
    // fetch the data using fetch API from the API_URL and Store it inside videos state variable
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);
}
