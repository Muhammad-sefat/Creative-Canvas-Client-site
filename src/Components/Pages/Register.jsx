import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import { NavLink, useNavigate } from "react-router-dom";
import spider from "../../assets/spider.jpg";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showBtn, setShowBtn] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast("Please Provide More Stronge Password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast("Register Successfully");
        reset();
        navigate("/");
      })
      .catch((error) => toast(error));
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100"
          >
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <p className="text-4xl font-bold text-orange-500 pb-3">
                  Register Now!
                </p>
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
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
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  id="image"
                  type="text"
                  placeholder="photoURL"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showBtn ? "text" : "password"}
                    placeholder="password"
                    className="input input-bordered w-full"
                    {...register("password", { required: true })}
                  />
                  <span
                    className="absolute bottom-3 right-3 text-xl"
                    onClick={() => setShowBtn(!showBtn)}
                  >
                    {showBtn ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
                  </span>
                </div>
                {errors.password && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-500 text-white">
                  Register
                </button>
              </div>
            </form>
            <p className="text-center py-3">
              Already Have An Account ? Please{" "}
              <NavLink to={"/login"}>
                {" "}
                <span className="text-blue-500 font-medium">Login</span>
              </NavLink>
            </p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="text-center lg:text-left"
          >
            <p className="text-2xl md:text-4xl font-bold py-3">
              Importants Of Craft
            </p>
            <p className="font-medium pb-4">
              {" "}
              Craft encourages critical thinking and problem-solving skills.
              When analyzing or creating art, individuals must observe,
              interpret, and make decisions, fostering analytical thinking and
              cognitive development.
            </p>
            <img className="rounded-md" src={spider} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
