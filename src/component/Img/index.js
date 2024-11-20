import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState, CSSProperties } from "react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
};
const Img = () => {
  const [image, setImage] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const db = getDatabase();
    setLoading(true);
    const imageRef = ref(db, "image");
    onValue(imageRef, (snapshot) => {
      const data = snapshot.val();
      setImage(data);
      setLoading(false);
    });
  }, []);
  return (
    <div>
      {!loading && (
        <img
          className="coverimage"
          src={`data:image/jpg;base64, ${image.link}`}
          alt="Cover Image"
          width="100%"
          height="336px"
        />
      )}
      {loading && (
        <PacmanLoader cssOverride={override} size={50} color="#ffffff" />
      )}
    </div>
  );
};

export default Img;
