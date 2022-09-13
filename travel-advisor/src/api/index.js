import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw, ne) => {
    try {
        const {data: { data }} = await axios.get(URL, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng ,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Key': 'a52dd9ac78msh485c94d3790b6f1p16fd02jsnf66d182e4d3e',
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
            }
          });

        return data;
    } catch(error){
        console.log(error)
    }
}
