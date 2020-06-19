import axios from 'axios';
import JSZip from 'jszip';

const isHost = (url) => {
    return url.indexOf(".jpg") !== -1 || url.indexOf(".png") !== -1 
        || url.indexOf(".gif") !== -1 || url.indexOf(".gifv") !== -1;
}
const saveAs = (data, name) => {
    const url = window.URL.createObjectURL(new Blob([data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', name); //or any other extension
    document.body.appendChild(link);
    link.click();
}
const downloadImg = async (url, id) => {
    const button = document.getElementById(id + '-download-image');
    button.innerHTML = 'Downloading';
    if (isHost(url)) {
        const response = await axios.get('https://young-moon-cab4.tnah-work.workers.dev/?' + url,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/image/*'
            }
        })
        saveAs(response.data, 'RVN_helper_' + id);
        button.innerHTML = 'Downloaded';
    } 
    else if (url.startsWith("http://imgur.com/a/") || url.startsWith("https://imgur.com/a/")) {
        let albumID = url.substring(url.lastIndexOf("/") + 1);
        const response = await axios.get("https://api.imgur.com/3/album/" + albumID,
        {
            headers: {
                'Content-Type': 'application/json',
                "authorization": "Client-ID 0d6763dedc73059"
            }
        });
        let zip = new JSZip();
        let queue = response.data.data.images.map((image) => {
            return axios.get('https://young-moon-cab4.tnah-work.workers.dev/?' + image.link,
            {
                responseType: 'arraybuffer',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
                zip.file(image.id + '.png', response.data, { base64: true });
            });                        
        });
        await Promise.all(queue);
        let data = await zip.generateAsync({ type: 'uint8array'});
        saveAs(data, 'RVN-' + albumID + '.zip');
        button.innerHTML = 'Downloaded';
    }
    else if (url.startsWith("http://imgur.com/") || url.startsWith("https://imgur.com/")) {
        var imageID = url.substring(url.lastIndexOf("/") + 1);
        const response = await axios.get("https://api.imgur.com/3/image/" + imageID,
        {
            responseType: 'arraybuffer',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/image/*',
                "authorization": "Client-ID 0d6763dedc73059"
            }
        })
        saveAs(response.data, 'RVN_helper_' + id);
        button.innerHTML = 'Downloaded';
    }
}
export default downloadImg;