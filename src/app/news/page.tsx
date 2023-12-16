"use client"

import { Box, List, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { StoryItem } from "../components/story-item/story-item.component";
import { GET } from "./api/route";

export default function NewsPage() {
    const [storyIds, setStoryIds] = useState<string[]>([]);

    useEffect(()=>{
        GET()
        .then<string[]>(result => result.json())
        .then(result => setStoryIds(result))
    }, [])

    return (
        <Box>
            <List>
                {
                    storyIds
                        .slice(0, 10).sort((a, b) => (+b) - (+a))
                        .map(storyId =>
                            <ListItem disablePadding key={storyId}>
                                <StoryItem storyId={storyId} />
                            </ListItem>)
                }
            </List>
        </Box>
    )
}