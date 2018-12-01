const key = "9b3fd7db34bee4b3bf83113f3914d6bf";

// url structure: get movie list
let page;
const url_base = "https://api.themoviedb.org/3";
const url_suffix_popular = "/movie/popular";
const url_suffix_key = `?api_key=${key}`;
const url_suffix_lang = "&language=en-US";
const url_suffix_page = `&page=${page || 1}`;
const url_complete_popular = `${url_base}${url_suffix_popular}${url_suffix_key}${url_suffix_lang}${url_suffix_page}`;
const url_popular = `${url_base}${url_suffix_popular}${url_suffix_key}${url_suffix_lang}`;

const url_suffix_search = "/search/movie";

const url_query = `${url_base}${url_suffix_search}${url_suffix_key}${url_suffix_lang}`;


// image url:
const url_img_base = "https://image.tmdb.org/t/p/";
// "backdrop_sizes": ["w300", "w780", "w1280", "original"]
const url_img_backdrop_size = "w1280";
// "poster_sizes": ["w92", "w154", "w185", "w342", "w500", "w780", "original"]
const url_img_poster_size = "w500";
const url_img_backdrop = url_img_base + url_img_backdrop_size;
const url_img_poster = url_img_base + url_img_poster_size;

export { url_popular, url_query, url_complete_popular, url_img_backdrop, url_img_poster };
