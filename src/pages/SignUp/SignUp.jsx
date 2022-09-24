import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import SignUpForm from "../../components/Forms/signupform";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import { auth } from "../../firebase";

const SignUp = (props) => {
  const signup = async (request) => {
    try {
      await auth.createUserWithEmailAndPassword(
        request.email,
        request.password
      );
      store.addNotification({
        title: "Success",
        message:
          "Signup successful! Verify your email address through email sent to your email address",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    } catch (error) {
      store.addNotification({
        title: "Error",
        message: error.message,
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: true,
        },
      });
    }
  };

  return (
    <AuthContext.Consumer>
      {(auth) => {
        if (auth) {
          return <Navigate to="/dashboard" />;
        }
        return <SignUpForm signup={signup} loading={props.visible} />;
      }}
    </AuthContext.Consumer>
  );
};

const mapStateToProps = ({ app: { visible } }) => ({
  visible,
});

export default connect(mapStateToProps, {})(SignUp);
