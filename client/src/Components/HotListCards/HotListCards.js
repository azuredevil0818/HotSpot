import React, { Component } from "react";
import PlaceHolderPic from "../../global-assets/yaletown.jpg";
import { FaRegClock } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

class HotListCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "loading data"
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div className='HotListCards'>
        <div className='card hot-list-card-container'>
          <div className='card-container'>
            <div className='card'>
              <h5 className='card-header hot-list-title'>
                {this.props.place.name}
                <p>{this.props.place.address}</p>
              </h5>
              <div className='card-body'>
                <div className='row'>
                  <div className='col-sm'>
                    <div className='hot-list-image-box'>
                      <img className='hot-list-image' src={this.props.place.yelp_photos[0] || PlaceHolderPic} alt={""}/>
                    </div>
                  </div>

                  <div className='col-6'>
                    <div className='row'>
                      <span className='badge badge-pill badge-success'>
                        <FaRegClock /> Average Wait Time: 25 mins.
                      </span>
                    </div>

                    <div className='row'>
                      <p className='card-text hot-list-description'>
                       Time Spent Max: {this.props.place.time_spent_max}
                       Time Spent Min: {this.props.place.time_spent_min}
                      Types: {this.props.place.types.join("     ")}

                        Heritage building with 50 taps of local & imported craft
                        beers, plus a menu of locally sourced food.Heritage
                        building with 50 taps of local & imported craft beers,
                        plus a menu of locally sourced food.
                      </p>
                    </div>
                    <div className='row'>
                      <h4 className='hot-list-user-reviews-title'>
                        Reviewers Tend To Mention:
                      </h4>
                      <div className='user-reviews-body'>
                        <p className='card-text hot-list-user-reviews'>
                          <span className='badge badge-pill badge-info'>
                            Good Food
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Fun
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Hip Place
                          </span>
                          <span className='badge badge-pill badge-info'>
                            Good Beer
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col hot-list-score-col'>
                    <div className='card hot-list-score-card'>
                      <ul className='list-group list-group-flush'>
                        <li className='list-group-item'>
                          <div className='hotspot-review'>HotSpot Score</div>
                          <div className='hotspot-review-score'>
                            {this.props.place.current_hot_score}
                          </div>
                        </li>
                        <li className='list-group-item'>
                          <div className='review-icons'>
                            <FaGoogle />
                          </div>
                          <div className='google-review'>Google Review:</div>
                          <div className='google-review-score'>
                            {this.props.place.rating}
                          </div>
                          <div className='review-stats'>
                            (Based on {this.props.place.rating_n} reviews)
                          </div>
                        </li>
                        <li className='list-group-item'>
                          <div className='review-icons'>
                            <FaYelp />
                          </div>
                          <div className='yelp-review'>Yelp Review:</div>
                          <div className='yelp-review-score'>
                            {this.props.place.yelp_rating}
                          </div>
                          <div className='review-stats'>
                            (Based on {this.props.place.yelp_review_count} reviews)
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HotListCards;
