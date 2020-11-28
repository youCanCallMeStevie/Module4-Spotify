import React, { Component } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import AlbumCard from "./AlbumCard";

class Gallery extends React.Component {
  render() {
    // const { title, movies, loading } = this.props;

    return (
      <div>
        <h4 style={{color:"whitesmoke"}}>{this.props.title}</h4>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center">
          {this.props.loading ? (
            [0, 1, 2, 3, 4, 5].map((item) => (
              <Col key={item}>
                <Spinner animation="border" variant="light" />
              </Col>
            ))
          ) : (
            <>
              {this.props.Albums.map((album) => (
                <AlbumCard
                albumTitle={album.title_short} img={album.album.cover} artist={album.artist.name} trackName={album.title_short} 
                  key={album.id} />
                  // selectedMovieID={selectedMovieID}
              ))}
            </>
          )}
        </Row>
      </div>
    );
  }
}
export default Gallery;