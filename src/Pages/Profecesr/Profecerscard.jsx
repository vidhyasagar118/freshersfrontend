import React, { useEffect, useState } from "react";
import "./Profecer.css";
import { API_URL } from "../../config";

const normalizeName = (name = "") =>
  name.toLowerCase().replace(/\./g, "").replace(/\s+/g, " ").trim();

const imageMap = {
  "dr vikash pareek": "/profecers/vikash.jpeg",
  "dr sunil kumar": "/profecers/sunil.jpeg",
  "dr shubham kumar": "/profecers/subham.jpeg",
  "dr arvind kumar": "/profecers/arvind.jpeg",
};

const Profecerscard = () => {
  const [profecerdata, setProfecerdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfecers = async () => {
      try {
        const res = await fetch(`${API_URL}/profecers`);
        const data = await res.json();
        setProfecerdata(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfecers();
  }, []);

  return (
    <div className="Profecerscardmaindiv">
      <h1>PROFESSORS DETAILS</h1>

      <div className="Profecersdiv">
        {loading ? (
          <h2>Loading...</h2>
        ) : (
          profecerdata.map((prof) => {
            const cleanName = normalizeName(prof.name);

            return (
              <div className="profCard" key={prof._id}>
                <div className="profImgWrapper">
                  <img
                    src={imageMap[cleanName] || "/profecers/subham.jpeg"}
                    alt={prof.name}
                  />
                </div>

                <h3 className="profName">{prof.name.trim()}</h3>
                <p className="profRole">{prof.role}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Profecerscard;
