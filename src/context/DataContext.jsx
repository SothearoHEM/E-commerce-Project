import axios from 'axios';
import { createContext , useContext, useState} from 'react';

export const DataContext = createContext(null);

export const DataProvider = ({children}) => {
    const [data,setData] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            console.log('Fetched data:', response);
            const products = Array.isArray(response?.data?.data)
              ? response.data.data
              : Array.isArray(response?.data)
                ? response.data
                : [];
            setData(products);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        }
    };
    const getUniqueCategories = (data,property) => {
            let newVAL = data?.map((item)=>{
                return item[property];
            }
            );
            newVAL = ["All", ...new Set(newVAL)];
            return newVAL;
    }   
    const catagoryOnlyData = getUniqueCategories(data,'category');
    return <DataContext.Provider value={{data,setData,fetchData,getUniqueCategories,catagoryOnlyData}}>
        {children}
    </DataContext.Provider>
}

export const getData = () => useContext(DataContext);
export default DataProvider;