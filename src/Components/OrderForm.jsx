
import React, { Component } from "react";
import FormField from "./FormField";
import OrderQt from "./OrderQt";
 
class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      cardInfo: "",
      submitted: false,
      checkboxChecked: false,
    };
  }
 
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
 
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ submitted: true });
  };
 
  render() {
    return (
      <div>
        {this.state.submitted ? (
          <div className="thanks-msg">
            <h3>Thanks for your order!</h3>
          </div>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <div className="order-qt">
              <div>
                <OrderQt title="Meatpie" />
                <OrderQt title="Egusi Soup" />
                <OrderQt title="Jollof Rice" />
                <OrderQt title="Egg Roll" />
                {/* <OrderQt title="Soup" /> */}
                <OrderQt title="Chin Chin" />
                <OrderQt title="Akara" />
                <OrderQt title="Moi Moi" />
                <OrderQt title="Samosa" />
                <OrderQt title="Puff Puff" />
              </div>
            </div>
            <div>
              <FormField
                title="Name"
                id="name"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <FormField
                title="Address"
                id="address"
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <FormField
                title="Card Info"
                id="card"
                name="cardInfo"
                value={this.state.cardInfo}
                onChange={this.handleChange}
              />
            </div>
            <button className="form-btn" type="submit">
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}
 
export default OrderForm;
 