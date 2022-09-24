import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import SignInForm from "../../components/Forms/signinform";
import { login } from "../../stores/actions/user.actions.types";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const SignIn = (props) => {
  const navigate = useNavigate();

  const signin = async (request) => {
    const callback = (data) => {
      if (data.success) {
        navigate("/dashboard");
      }
    };
    props.login({ data: request, callback });
  };

  return (
    <AuthContext.Consumer>
      {(auth) => {
        if (auth) {
          return <Navigate to="/dashboard" />;
        }
        return <SignInForm signin={signin} loading={props.visible} />;
      }}
    </AuthContext.Consumer>
  );
};
const mapStateToProps = ({ user: { userDetails }, app: { visible } }) => ({
  userDetails,
  visible,
});

export default connect(mapStateToProps, {
  login,
})(SignIn);
