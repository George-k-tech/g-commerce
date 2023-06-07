const getDogsImage = async() =>{
    const res = await fetch('https://dog.ceo/api/breeds/image/random', {cache: "no-store"})
    return res.json();
}

export {getDogsImage}