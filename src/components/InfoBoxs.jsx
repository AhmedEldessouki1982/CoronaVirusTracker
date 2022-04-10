import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

export default function (props) {
    return (
        <div >
            <Card className = 'InfoBoxs__Card'>
                <CardContent >
                    <Typography color = 'text.secondary'>
                        {props.Title}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.CurrentCases}
                    </Typography>
                    <Typography>
                        {props.TotalCases} Total
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}