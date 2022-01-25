import React ,{Component} from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
 CardSubtitle, CardBody } from 'reactstrap';

 const Example = (props) => {
    return (
        <div className='container' id='review'> 
      <CardGroup className='row'>
        <Card className='col-md-4 border-0'>
          <CardImg  src="./review/1.jpg" alt="Card image cap"  />
          <CardBody>
            <CardTitle className='fs-3 fw-bold'>시루 36kg</CardTitle>
           
            <CardText className='fs-5'>"이젠 없으면 불안해요"</CardText>
            <Button  className='bg-warning text-dark bg-opacity-50 border-0'>리뷰 더보기</Button>
          </CardBody>
        </Card>
        <Card className='col-md-4 border-0'>
          <CardImg src="./review/2.jpg" alt="Card image cap"  />
          <CardBody>
            <CardTitle className='fs-3 fw-bold'>뭉뭉이 7.5kg</CardTitle>
            <CardText className='fs-5'>"아이가 편하게 차고다녀요"</CardText>
            <Button  className='bg-warning text-dark bg-opacity-50 border-0'>리뷰 더보기</Button>
          </CardBody>
        </Card>
        <Card className='col-md-4 border-0'>
          <CardImg src="./review/3.jpg" alt="Card image cap"  />
          <CardBody>
            <CardTitle className='fs-3 fw-bold'>로또 5kg</CardTitle>
             <CardText className='fs-5'>"산책 필수템!!"</CardText>
            <Button className='bg-warning text-dark bg-opacity-50 border-0'>리뷰 더보기</Button>
          </CardBody>
        </Card>
      </CardGroup>
      </div>
    );
  };
  
  export default Example;
