
export const pictureofdayData = async () => {

    const API_KEY = "ZD6tZnrYEg3lvEDi9NY8Y3Mg3ZDUfJXcTdn7Myah";
    const response = await fetch(`https://api.nasa.gov/planetary/apod?date=2014-10-01&api_key=${API_KEY}`);

    const data = await response.json();
    
    return data;
}
