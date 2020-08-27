import React, { Component } from "react";
import { Route } from "react-router";
import Layout from "./components/layout";
import TechniciansTab from "./tabs/techniciansTab";
import TestComponent from "./components/testComponent";
import ActivityTab from "./tabs/activityTab";
import ManagementAccountsTab from "./tabs/managementAccountsTab";

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Layout onLogout={this.props.onLogout}>
        <Route exact path="/" component={TestComponent} />
        <Route path="/technicians" component={TechniciansTab} />
        <Route path="/your-activity" component={ActivityTab} />
        <Route path="/manage-accounts" component={ManagementAccountsTab} />
      </Layout>
    );
  }
}

export default MainPage;
