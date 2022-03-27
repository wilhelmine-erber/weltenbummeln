import { createContext, useState, useEffect } from "react";

export const HomepageContext = createContext();

const HomepageProvider = (props) => {

    // States from header
    const [input, setInput] = useState(''); // search field
    const [searchEl, setSearchEl] = useState(''); // search field
    const [isRegistered, setIsRegistered] = useState(false); // sign in

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dateDiff, setDateDiff] = useState(0)

    //Fetching Data from server
    //Fatching all houses
    const [arrCards, setArrCards] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/api/houses')
            .then(response => response.json())
            .then(data => setArrCards(data))
            .catch(err => { console.error("error: ", err) })
    }, [])

    //Share states from context
    const sharedData = { input, setInput, searchEl, setSearchEl, arrCards, setArrCards, isRegistered, setIsRegistered, startDate, setStartDate, endDate, setEndDate, dateDiff, setDateDiff };

    return <HomepageContext.Provider
        value={sharedData}>
        {props.children}
    </HomepageContext.Provider>
}

export default HomepageProvider;