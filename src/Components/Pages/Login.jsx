import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { signinUser, signInWithGoogle, signInWithGithub } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    signinUser(email, password)
      .then((result) => {
        toast("Login Successfully");
        if (result.user) {
          navigate(from);
        }
      })
      .catch(() => toast("Please Provide Valid Email & Password"));
  };

  const googleSignInBtn = () => {
    signInWithGoogle()
      .then((result) => {
        toast("Login Successfully");
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => toast(error));
  };

  const GithubSignInBtn = () => {
    signInWithGithub()
      .then((result) => {
        toast("Login Successfully");
        if (result.user) {
          navigate(from);
        }
      })
      .catch((error) => toast(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-red-500">This field is required</span>
              )}
            </div>
            <div className="form-control mt-2">
              <button className="btn  bg-orange-500 text-white">Login</button>
            </div>
          </form>
          <div className="text-center pb-2">
            <button
              onClick={googleSignInBtn}
              className="btn btn-secondary md:w-[88%] mx-auto mb-2"
            >
              Sign in with Google
            </button>
            <button
              onClick={GithubSignInBtn}
              className="btn btn-accent md:w-[88%] mx-auto"
            >
              Sign in with Github
            </button>
          </div>
          <p className="text-center py-3">
            New Here ? Please{" "}
            <NavLink to={"/register"}>
              {" "}
              <span className="text-blue-500 font-medium">Register</span>
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
