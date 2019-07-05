import React from 'react'
import { Container, Row, Col } from "reactstrap";
import '../App.css'

export default class GetStarted extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: "option1"
      };
    }
  
    handleOptionChange = changeEvent => {
      this.setState({
        selectedOption: changeEvent.target.value
      });
    };
  
    handleFormSubmit = formSubmitEvent => {
      formSubmitEvent.preventDefault();
  
      console.log("You have submitted:", this.state.selectedOption);
    };
  
    render() {
      return (
        <div className="header">
          <h1> Help us help you </h1>
          <p className="header-paragraphs">
            Please fill out this short questionnaire to provide some general and
            anonymous background about you and the issues you'd like to deal with
            in online therapy. It would help us match you with the most suitable
            therapist for you. Your answers will also give this counselor a good
            starting point in getting to know you.
          </p>
            <Container>
              <Row>
                <Col className='coloumn1'>
                <fieldset>  
                <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="counseling-type"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  individual counseling
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="counseling-type"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  couple counseling
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="counseling-type"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  teenage counseling
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
          </fieldset>
  
          </Col>
                <Col className='coloumn2'>"some quote"</Col>
              </Row>
            </Container>
          <footer>
            <ul>
              <a href='#'>
              <li>home</li>
              </a>
              <a href='#'>
              <li>about</li>
              </a>
              <a href='#'>
              <li>FAQ</li>
              </a>
              <a href='#'>
              <li>reviews</li>
              </a>
              <a href='#'>
              <li>advice</li>
              </a>
            </ul>
          </footer>
        </div>
      );
    }
  }