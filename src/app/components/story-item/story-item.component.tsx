"use client"

import { StoryResponse } from "@/app/api/responses/story.response";
import { Chip, ListItemText } from "@mui/material";
import { useEffect, useState } from "react"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import LaunchIcon from '@mui/icons-material/Launch';
import "./story-item.component.scss"
import { getStoryById } from "../../api/client-api";
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import fromUnixTime from 'date-fns/fromUnixTime';



export interface StoryItemProps {
    storyId: string;
}

export function StoryItem({ storyId }: StoryItemProps) {
    const [story, setStory] = useState<StoryResponse | undefined>();

    useEffect(() => {

        async function getStoryItemById() {
            const result = await getStoryById(storyId);

            setStory(result);
        }

        getStoryItemById();

    }, [storyId]);

    function handleVoteClick(vote: boolean){
        console.log(`Vote clicked ${vote} for ${storyId}`);
    }

    return (
        <div className="story-item">

            <div className="story-item-link">
                <a href={story?.url?.toString() || ""}>
                    <LaunchIcon sx={{ fontSize: "2.5em" }}></LaunchIcon>
                </a>
            </div>
            <div className="story-item-description">
                <ListItemText className="story-item-title" primary={story?.title} secondary={story?.url?.toString()} />
                <Chip clickable={true} onClick={() => handleVoteClick(true)} icon={<ThumbUpIcon />} label="Like" variant="outlined" />
                <Chip clickable={true} onClick={() => handleVoteClick(false)} icon={<ThumbDownIcon />} label="Dislike" variant="outlined" />
                <Chip label={`${story?.score} points by ${story?.by}`} variant="outlined" />
                {
                    story?.time 
                    ?
                    <Chip label={formatDistanceToNow(fromUnixTime(story.time))} variant="outlined" />
                    :
                    <Chip label="N/A" variant="outlined" />
                }
                <Chip label={`Comments ${story?.descendants || 0}`} variant="outlined" />
            </div>
        </div>

    )
}