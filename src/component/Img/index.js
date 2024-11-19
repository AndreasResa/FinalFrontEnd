import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Img = () => {
    const [image, setImage] = useState({});
    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const db = getDatabase();
      // setLoading(true);
      const imageRef = ref(db, 'image');
      onValue(imageRef, (snapshot) => {
        const data = snapshot.val();
        setImage(data);
        // setLoading(false);
      });
    }, []);
    return (
        <img
        className="coverimage"
        src={`data:image/jpg;base64, ${image.link}`}
        alt="Cover Image"
        width="100%"
        height="336px"
        />
    )
};

export default Img;