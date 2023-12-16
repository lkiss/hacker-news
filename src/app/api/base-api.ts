const hostname = "https://hacker-news.firebaseio.com";
const apiVersion = "v0";
const baseUrl = `${hostname}/${apiVersion}`

const newStories = `${baseUrl}/topstories.json`;
const storyItem = `${baseUrl}/item`;

const baseFetch = async (request: Request) => {
    let result = new Response;
    try {
        result = await fetch(request, { next: { revalidate: 60 } });

        if (!result.ok) {
            console.log(result.body);
        }
    }
    catch (error) {
        console.log(error);
    }

    return result;
}

export { baseFetch, baseUrl, newStories, storyItem }