import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getDetails from "../../api/profile";
import servers from "../../data/server";
import Navbar from "../../components/Navbar";
import DetailsHeader from "../../components/DetailsHeader";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/Loading Dots Blue.json";
import DetailsNav from "../../components/DetailsNav";

function Champions() {
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let { serverId, gameName, tagLine } = useParams();

  useEffect(() => {
    setResults(null);
    setLoading(true);
    setError(null);

    async function fetchData() {
      try {
        const server = servers.find((server) => server.id === Number(serverId));
        const data = await getDetails({ gameName, tagLine, server });
        setResults({ ...data, server });
      } catch (error) {
        console.error(error);
        setError(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  console.log(results);

  return (
    <div>
      <div>
        <Navbar />
        <DetailsHeader />
        <DetailsNav serverId={serverId} gameName={gameName} tagLine={tagLine} />
        <div>
          {loading && <Lottie animationData={loadingAnimation} />}
          {error && <p className="text-red-500">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Champions;
