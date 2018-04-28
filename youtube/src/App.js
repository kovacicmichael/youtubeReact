import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Search from "./components/Search";
import YouTubeSearch from "youtube-api-search";
const apiKey = "AIzaSyBFmh7XCYU3RsU_2Y9U02VxjcoW5X3POeQ"

class App extends Component {

  state = {
    videosArray:[],
    selectedVideo: null
  }

  componentDidMount() {
    this.runSearch()
  }

  runSearch(searchTerm) {
    YouTubeSearch({
      key: apiKey,
      term: searchTerm
    },
    videos => {
      console.log(videos);
      this.setState({
        videosArray:videos,
        selectedVideo: videos[0]
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col md="12">
              <Search runSearch={this.runSearch.bind(this)}/>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              Large video
            </Col>
            <Col md="4">
              Search Responses
            </Col>
          </Row>
        </Container>
      
      </div>
    );
  }
}

export default App;
