export const getGift = async (category) => {
  const url =
    `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=f5YyEIq3WsbJtj5kzkHOor72eNZcjpoo`;

  const res = await fetch(url);
  const { data } = await res.json();

  const gift = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_large.url,
    };
  });

  return gift;

};