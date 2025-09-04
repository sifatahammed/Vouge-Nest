import { createContext, useEffect, useState } from "react"; 
import axios from 'axios';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import {Products} from "../assets/assets"


export const ShopContext = createContext(); 

const ShopContextProvider = (props) => { 
    const currency = '$'; 
    const delivery_fee = 10; 
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalCount += cartItems[items][item]
                    }
                }
                catch(error){
                
                }
            }   
        }
        return totalCount;
    }
    const value = { 
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch, getCartCount
    } 
    return ( 
        <ShopContext.Provider value={value}> 
            {props.children}
        </ShopContext.Provider> 
    ) 
} 
export default ShopContextProvider;