import React from 'react'
import '../App.css'
import {
    Button,
    Form,
    Grid,
    Header,
    Image,
    Message,
    Segment
} from 'semantic-ui-react'

const LoginForm = () => (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
            <Header as='h2' color='teal' textAlign='center'>
                <Image src='' /> Login to your account
            </Header>
            <Form size='large'>
                <Segment stacked>
                    <Form.Input
                        fluid
                        icon='user'
                        iconPosition='left'
                        placeholder='E-mail address'
                    />
                    <Form.Input
                        fluid
                        icon='lock'
                        iconPosition='left'
                        placeholder='Password'
                        type='password'
                    />

                    <Button color='orange' fluid size='large'>
                        Login
                    </Button>
                </Segment>
            </Form>
            <Message>
                New to us? <a href='#'>Sign Up</a>
            </Message>
        </Grid.Column>
    </Grid>
)

export default LoginForm

// import { Button } from 'semantic-ui-react'

// class Login extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             userName: '',
//             password: ''
//         }
//     }
//     changeHandle = event => {
//         this.setState(
//             {
//                 [event.target.name]: event.target.value
//             },
//             console.log(this.state)
//         )
//         console.log(event.target)
//     }
//     render() {
//         return (
//             <div className='containerLogin'>
//                 <h1>Login</h1>
//                 <form onSubmit={this.changeHandle}>
//                     <fieldset>
//                         <label htmlFor='userName'>User Name</label>
//                         <input
//                             type='text'
//                             name='userName'
//                             value={this.state.userName}
//                             onChange={this.changeHandle}
//                         />
//                     </fieldset>
//                     <fieldset>
//                         <label htmlFor='password'>Password</label>
//                         <input
//                             type='passord'
//                             name='password'
//                             value={this.state.password}
//                             onChange={this.changeHandle}
//                         />
//                     </fieldset>
//                     <Button type='submit'>Submit</Button>
//                 </form>
//             </div>
//         )
//     }
// }
// export default Login
