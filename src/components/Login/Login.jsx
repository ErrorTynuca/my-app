import React from "react";
import {Form, Field} from 'react-final-form'
import {Input} from "../common/FormsControls/formControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {login} from "../../Redux/auth-reducer";


const LoginForm = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return  <Redirect to={'/profile'} />
    }

    return (
        <Form
            onSubmit={onSubmit}
            render={({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field name={"email"} component={Input}
                               validate={required}
                               placeholder={"Email"}/>
                    </div>
                    <div>
                        <Field name={"password"}
                               type={"password"}
                               validate={required}
                               component={Input}
                               placeholder="Password"/>
                    </div>
                    <div>
                        <Field type={"checkbox"} name={"rememberMe"} component={Input}/> Remember me
                    </div>
                    <button type="submit">Submit</button>
                </form>
            )}
        />
    )
}



const Login = (props) => {
    return (
        <div>
            <h1>LOGIN!!!</h1>
            <LoginForm props={props}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)