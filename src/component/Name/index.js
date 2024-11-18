import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Name = () => {
    const [name, setName] = useState({});
    // const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      const db = getDatabase();
      // setLoading(true);
      const nameRef = ref(db, "name");
      onValue(nameRef, (snapshot) => {
        const data = snapshot.val();
        setName(data);
        // setLoading(false);
      });
    }, []);
    return (
        <div id="Name">
            <div>
            <h1>{name.h1}</h1>
            </div>
        </div>
    )
};

export default Name;
