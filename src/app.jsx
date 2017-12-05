import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { amountDue: 0, amountReceived: 0 };

    this.handleAmountDue = this.handleAmountDue.bind(this);
    this.handleAmountReceived = this.handleAmountReceived.bind(this);
    this.calculateChange = this.calculateChange.bind(this);
  }
  handleAmountDue(event){
    this.setState({amountDue: parseFloat(event.target.value)});
  }

  handleAmountReceived(event){
    this.setState({amountReceived: parseFloat(event.target.value)});
  }

  calculateChange(event) {
    event.preventDefault();
    const { amountDue, amountReceived } = this.state;
    let due = amountDue;
    let rec = amountReceived;
    let changeAmount = rec - due;
    let changeOneHundred = (rec * 100) - (due * 100);
    let changeDue = Math.round(changeOneHundred);
    let res = {}; 

    [2000, 1000, 500, 100, 25, 10, 5, 1].forEach(coin => {
    res[coin] = Math.floor(changeDue / coin);
    changeDue = changeDue % coin;
    console.log(changeDue);  
    });
    this.setState({twenties: res[2000], tens: res[1000], fives: res[500], ones: res[100], quarters: res[25], dimes: res[10], nickles: res[5], pennies: res[1]}) 
    this.setState({result: changeAmount.toFixed(2)}) //doesn't work change changeDue to finalChangeDue
  }

  render() {
    return (
      <div>
        <div className="container">
          {/* Calculator form */}
          <h1>Change Calculator</h1>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <div className="card-header">Enter Information</div>
                <div className="card-body">
                  <div>
                    <form>
                      <div className="form-group">
                        <label htmlFor="inputAmountDue">How much is due?</label>
                        <input
                          type="number"
                          name="amountDue"
                          value={this.state.amountDue} 
                          onChange={this.handleAmountDue}
                          step="0.01"
                          id="AmountDue"
                          aria-describedby="emailHelp"
                          placeholder="Amount due"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="inputAmountReceived">
                          How much was received?
                        </label>
                        <input
                          type="number"
                          name="amountReceived"
                          value={this.state.amountReceived}
                          onChange={this.handleAmountReceived}
                          step="0.01"
                          id="inputAmountReceived"
                          placeholder="Amount Received"
                        />
                      </div>
                      <button type="submit" onClick={this.calculateChange} className="btn btn-primary">
                        Calculate
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* // Change Output */}
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Total change due is ${this.state.result} </h4>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$20</h4>
                            <p className="card-text">{this.state.twenties}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$10</h4>
                            <p className="card-text">{this.state.tens}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$5</h4>
                            <p className="card-text">{this.state.fives}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$1</h4>
                            <p className="card-text">{this.state.ones}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* new row */}
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$.25</h4>
                            <p className="card-text">{this.state.quarters}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$.10</h4>
                            <p className="card-text">{this.state.dimes}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$.05</h4>
                            <p className="card-text">{this.state.nickles}</p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">$.01</h4>
                            <p className="card-text">{this.state.pennies}</p>
                          </div>
                        </div>
                      </div>
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

export default App;
