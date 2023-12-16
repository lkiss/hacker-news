"use client"

import { Box, AppBar, Toolbar, Button, Typography } from '@mui/material'
import { FeedFilter } from './components/feed-filter/feed-filter.component';
import "./layout.scss";

export default function RootLayout({children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <title>Hacker News</title>
      </head>
      <body>
          <Box>
            <AppBar position="fixed" sx={{ backgroundColor: "#ff6600" }}>
              <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
                <div className={"layout-left"}>
                  <img src='./favicon.ico' alt='favicon.ico'></img>
                  <Typography role={"heading"} variant="h6" component="div" sx={{ margin: "0 1em 0 1em", flexGrow: 1 }}>
                    Hacker News
                  </Typography>
                  <FeedFilter></FeedFilter>
                </div>
                <Button color="inherit">Login</Button>
              </Toolbar>
            </AppBar>
          </Box>
          <div className='layout-router'>
            {children}
          </div>
      </body>
    </html>
  )
}
