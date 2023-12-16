import { baseFetch, newStories } from "../../api/base-api";

const GET = async (): Promise<Response> => {
    const request = new Request(`${newStories}?print=pretty`);

    const result = await baseFetch(request);

    return result;
}

export { GET }