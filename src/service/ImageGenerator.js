const ImageGenerator = async(query) => {
    const response = await fetch(`https://lexica.art/api/v1/search?q=${query}`)
    const data = await response.json();
    return data;
};

export default ImageGenerator;