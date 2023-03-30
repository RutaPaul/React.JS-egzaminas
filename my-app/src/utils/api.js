const getFlats = async () => {
    try {
        const response = await fetch("https://cdn.rawgit.com/abbassiddiqi/airbnb-api/bbd1300a/flats.json");
        if(response.status === 200){
            return await response.json();
        } else {
            console.log(response);
        }
    }
    catch (ex){
        console.log(ex);
    }
}

const getHomePageUrl = () => {
    return "http://localhost:3000/";
}

export {
    getFlats,
    getHomePageUrl
}