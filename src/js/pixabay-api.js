// key: 44685360-74500565ee10f6b109a60bbe8


export function getImage(image) {
    const URL = 'https://pixabay.com/api';
    const API_KEY = '44685360-74500565ee10f6b109a60bbe8';
    const params = new URLSearchParams({
        q: image,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });
    const url = `${URL}?key=${API_KEY}&${params}`;
    return fetch(url).then((response) => {
        if (!response.ok) { throw new Error(response.status); }
        return response.json();
    }).catch((error) => { console.log(error) });
        
        
        // data => data.json());
    
};


// getImage("cat").then((data) => { console.log(data) }).catch((error) => { console.log(error) });