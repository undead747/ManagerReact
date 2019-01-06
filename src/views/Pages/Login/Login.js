import React, { Component } from 'react';
import { Link,Redirect } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      Username:'',
      Password:'',
      redirect: false,
      redirect1: false,
      redirect2: false,
    }
  };
  updateUsername = (e) => {
    this.setState({
      Username: e.target.value
    });
  }

  updatePassword = (e) => {
    this.setState({
      Password: e.target.value
    });
  }
  handleClick = () => {
    if(this.state.Username == 'SinhVien' && this.state.Password == '12345678'){
      this.setState({
        redirect: true
      })
    }
    if(this.state.Username == 'GiangVien' && this.state.Password == '12345678'){
      this.setState({
        redirect1: true
      })
    }
    if(this.state.Username == 'Admin' && this.state.Password == '12345678'){
      this.setState({
        redirect2: true
      })
    }
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/SinhVien/ThongTinCaNhan' />
    }else if(this.state.redirect1){
      return <Redirect to='/GiangVien' />
    }else if(this.state.redirect2){
      return <Redirect to='/Admin' />
    }
    else{
      return <Redirect to='/' />
    }
}
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" onChange = {this.updateUsername} placeholder="Username" autoComplete="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" onChange = {this.updatePassword} placeholder="Password" autoComplete="current-password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                           {this.renderRedirect()}
                          <Button color="primary" onClick={this.handleClick} className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                          <Button color="link" className="px-0">Forgot password?</Button>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>

              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
