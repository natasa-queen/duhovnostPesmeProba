import React from 'react'
import { Link } from 'gatsby'

import { Card, CardTitle, CardText, CardSubtitle, CardBody } from 'reactstrap'


const Post = ({ title, autor, path, datum, body }) => {
    return (
        
        <>
        <h1>nestoo</h1>

        <Card>
            <h1>Heloooo</h1>
            <CardBody>
                <CardTitle>
                    <h1>{title}</h1>
                </CardTitle>
                {/* <CardSubtitle>
                    {datum}
                    {autor}
                </CardSubtitle>
                <CardText>{body}</CardText>
                <Link to={path}>Procitaj vise</Link> */}
            </CardBody>
        </Card>
        
        </>
    )
}

export default Post
