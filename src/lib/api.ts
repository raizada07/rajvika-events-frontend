const STRAPI_API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337";

export async function fetchAPI(path: string, urlParamsObject = {}) {
    // Construct URL with query parameters
    const queryString = new URLSearchParams(urlParamsObject).toString();
    const requestUrl = `${STRAPI_API_URL}/api/${path}${queryString ? `?${queryString}` : ""}`;

    // Fetch data from Strapi
    const response = await fetch(requestUrl);
    const data = await response.json();
    return data;
}