import { collection,getDocs,addDoc} from "firebase/firestore";
import { useState } from "react";
import db from "../services";


const useFirebase = () => {

  const [productos,setProductos] = useState([]);

  const getColData = async () => {
    try {
      const data = collection(db, 'products');
      const col = await getDocs(data);
      const resp = col.docs.map( (doc) => doc={ id:doc.id, ...doc.data()} )
      setProductos(resp)
    } catch (error) {
      console.log(error)
    }
    
  }

  const generateTicket =  async ({datos}) => {

    try {
        const col = collection(db,"ordenes")
        const order =  await addDoc(col,datos)
        console.log(order)
    } catch (error) {
        console.log(error)
    }
  };

  return {
    productos,
    getColData,
    generateTicket
  };
};

export default useFirebase;