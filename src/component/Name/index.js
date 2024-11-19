import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import FadeLoader from "react-spinners/FadeLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const Name = () => {
  const [name, setName] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const nameRef = ref(db, "name");
    onValue(nameRef, (snapshot) => {
      const data = snapshot.val();
      setName(data);
      setLoading(false);
    });
  }, []);
  return (
    <div id="Name">
      {!loading && (
        <div>
          <h1>{name.h1}</h1>
        </div>
      )}
      {loading && (
        <FadeLoader cssOverride={override} size={50} color="#ffffff" />
      )}
    </div>
  );
};

export default Name;
