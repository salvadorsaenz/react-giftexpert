export const getGifs = async(category) => {
    const api_key = '0WZvmZ3Hm5OoH8vuh7nqWFTUgs9KUl0G';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map( img => {
        return {
            id: img.id
            , title: img.title
            , url: img.images?.downsized_medium.url
        }
    });

    return gifts;
};