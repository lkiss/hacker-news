import { List, ListItem, ListItemText, Menu, MenuItem } from "@mui/material";
import React from "react";
import FilterListIcon from '@mui/icons-material/FilterList';


const options = [
    'News',
    'Posts',
    'Comments',
    'Ask',
];

export function FeedFilter() {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const open = Boolean(anchorEl);
    const handleClickListItem = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (
        event: React.MouseEvent<HTMLElement>,
        index: number,
    ) => {
        setSelectedIndex(index);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <List
                component="nav"
                aria-label="Feed"
            >
                <ListItem
                    id="feed-selector"
                    onClick={handleClickListItem}
                >
                    <FilterListIcon sx={{marginRight: "0.5em"}}/>
                    <ListItemText
                        primary={options[selectedIndex]}
                    />
                </ListItem>
            </List>
            <Menu
                id="feed-selector-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'lock-button',
                    role: 'listbox',
                }}
            >
                {options.map((option, index) => (
                    <MenuItem
                        key={option}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}