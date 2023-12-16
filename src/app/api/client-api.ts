import { storyItem } from "./base-api";
import { StoryResponse } from "./responses/story.response";

const getStoryById = async (storyId: string): Promise<StoryResponse> => {
    const url = new URL(`${storyItem}/${storyId}.json?print=pretty`)
    const request = new Request(url);

    const result = await fetch(request);

    return result.json();
}

export { getStoryById };