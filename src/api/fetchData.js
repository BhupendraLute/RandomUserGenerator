async function fetchData(apiEndpoint){
    try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(`api :: fetchData :: \n ${error}`);
        return null
    }
}

export default fetchData;