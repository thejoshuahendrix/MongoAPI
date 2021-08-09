import React from 'react'
import {
    Card, CardImg,  CardBody,
    CardTitle, CardSubtitle, 
  } from 'reactstrap';

const IconCard = (props) => {
      
      
        return (
          <div className="innercard"style={{width:"300px"}}>
            <Card className="m-4 w-10">
              <CardImg style={{marginTop: '50px'}} width="100px" height="100px" src={props.url}/>
              <CardBody >
                <CardTitle style={{overflow:"visible"}} tag="h5">{props.title}</CardTitle>
                <CardSubtitle style={{overflow:"visible"}} tag="h6" className="mb-2 text-muted">{props.subtitle}</CardSubtitle>
              </CardBody>
            </Card>
          </div>
          
        );
     
};

export default IconCard
