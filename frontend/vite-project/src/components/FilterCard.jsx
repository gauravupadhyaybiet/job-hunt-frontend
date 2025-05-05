import React from "react"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DamIcon } from "lucide-react"
import { Label } from "./ui/label"
import { useState } from "react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setSearchedQuery } from "@/redux/jobSlice"
const filterData=[
    {
        filterType:"Location",
        array : ["Delhi NCR","Banglore","Hyderabad","Pune","Mumbai"]
    },
    {
        filterType:"Industry",
        array : ["Frontend Developer","Backand Developer","FullStack Developer","Pune","Mumbai"]

    },
    {
        filterType:"salary",
        array : ["0-40K","42-1lakh","1lakh to 5lakh"]
    }
]

const FilterCard = () =>{
    const [selectedValue,setSelectedValue] = useState('');
    const dispatch = useDispatch();
    const changeHandler = (value) => {
        setSelectedValue(value);
    }
    useEffect(()=>{
        dispatch(setSearchedQuery(selectedValue));
        
    },[selectedValue]);
    return (
        <div className="w-full bg-white p-3 rounded-md">
            <h1  className="font-bold text-lg">Filter jobs</h1>
            <hr className="mt-3"/>
            <RadioGroup value = {selectedValue} onValueChange = {changeHandler} >
                {
                    filterData.map((data,index)=>(
                        <div>
                            <h1 className="font-bold text-lg">{data.filterType}</h1>
                            {
                                data.array.map((item,idx)=>{
                                    const itemId = `r${index}-${idx}`
                                    return(
                                        <div className='flex items-center space-x-2 my-2'>
                                        <RadioGroupItem value={item} id={itemId}/>
                                        <Label htmlFor={itemId}>{item}</Label>
                                        
                                        </div>
                                    )







                                })
              
                                    
                                    

                                    
                            }
                                
                            
                        </div>

                    ))
                }

            </RadioGroup>

        </div>
    )
}
export default FilterCard