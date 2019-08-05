import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Components/Post/Post';
import { Card, CardHeader, CardBody, CardText, } from 'reactstrap';

const Home = (props) => {
    return (
       <div className='home'>
          <div className='post'>
            <Post />
          </div>
          <div className='side-content'>
          <div className='persona'>
              <img className='persona-image' src={`https://media.licdn.com/dms/image/C4D03AQGcTN26EHo7Qg/profile-displayphoto-shrink_200_200/0?e=1570665600&v=beta&t=Th2Txn8sHqW7nwVBWtXDFjvvimOycznRwkYITKmHD1M`}/>
              <span className="persona-name">Angelica Hernandez</span>
              <span className="persona-name">She ~ Her ~ Hers</span>
            </div>
            <div className='side-bar'>
              <Card>
                <CardHeader>Companies</CardHeader>
                <CardBody>
                  <CardText>Messages</CardText>
                  <CardText>Event</CardText>
                  <CardText>Saved</CardText>
                  <CardText>Jobs</CardText>
                </CardBody>
              </Card>
            </div>
            <div className='connections'>

            </div>
          </div>
        <div className="media">
          {/* <img className="profile-image" src=""/>
          <div className="media-body">
            <h4>Content Header</h4>
            <p>{post}</p>
          </div> */}
        </div>
       </div>
    )
}
Home.propTypes = {

}
Home.defaultProps = {

}
export default Home;
