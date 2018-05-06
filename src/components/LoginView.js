import React from 'react'
import { Button, Form, Container, Segment, Icon } from 'semantic-ui-react'
import CreateAccount from './CreateAccount'
import loginService from '../services/login'
import { connect } from 'react-redux'
import { login } from '../reducers/userReducer'

class LoginView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) { 
        this.setState({ [event.target.name]: event.target.value })
    }
    
    handleSubmit = async (event) => {
        event.preventDefault()
        console.log('attempting login:')

        const response = await loginService
            .login({
                username: this.state.username,
                password: this.state.password
            })
        if (response.error) {
            console.log(response.error)
        } else {
            window.localStorage.setItem('loggedUser', JSON.stringify(response))
            this.props.login(response)
            this.props.history.push('/') 
        }
    }

    render() {
        return (
            <Container>
                <Segment raised padded>
                    <h1><Icon name='list' />askare</h1>
                    <p>Revolutionizing to-do lists. Join today!</p>
                    <CreateAccount />
                </Segment>

                <Form>
                    <Form.Group widths='equal'>
                        <Form.Input
                            label='Username or e-mail'
                            placeholder='Enter your username or e-mail' 
                            name='username'
                            value={this.state.username}
                            onChange={this.handleInputChange}/>

                        <Form.Input
                            label='Password'
                            type='password'
                            placeholder='Enter your password' 
                            name='password'
                            value={this.state.password}
                            onChange={this.handleInputChange}/>
                    </Form.Group>

                    <Button
                        type='submit'
                        color='blue'
                        icon='sign in'
                        content='Sign in'
                        labelPosition='left' 
                        onClick={this.handleSubmit}/>
                </Form>
            </Container>
        )
    }
}

//export default LoginView

export default connect(
    null,
    { login }
)(LoginView)
