import { useFormik } from "formik";
import * as yup from 'yup'
import { Link } from "react-router-dom";
import { loginAction } from "../Redux/loginSlice";
import { useDispatch } from "react-redux";

const validationLogin = yup.object({
    Email: yup.string().required("please enter the email").email("plz valid mail"),
    password: yup.string().min(5).required("please enter the password"),
    confirmpassword: yup.string().min(5)
        .oneOf([yup.ref("password"), null], "please same password")
        .required("please enter confirm password")
})

export default function Login() {
    const dispatch = useDispatch()
    const { handleChange, handleSubmit, errors, values, touched } = useFormik({
        initialValues: {
            Email: "",
            confirmpassword: "",
            password: ""
        },
        validationSchema: validationLogin,
        onSubmit: (value, action) => {
            console.log("form", value)
            dispatch(loginAction?.login(value))
            action.resetForm();
        }
    })

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-7 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        className="mx-auto h-10 w-auto"
                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Your Company"
                    />
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6"
                        onSubmit={handleSubmit}
                    >
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="email"
                                    name="Email"
                                    value={values.Email}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.Email && touched.Email ? (<p className='text-red-400'>{errors.Email}</p>) : null}
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.password && touched.password ? (<p className='text-red-400'>{errors.password}</p>) : null}

                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Confirm Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    type="password"
                                    name="confirmpassword"
                                    value={values.confirmpassword}
                                    onChange={handleChange}
                                />
                            </div>
                            {errors.confirmpassword && touched.confirmpassword ? (<p className='text-red-400'>{errors.confirmpassword}</p>) : null}

                        </div>
                        <div className="text-sm">
                            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                Forgot password?
                            </a>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Not a member?{' '}
                        <Link to='/sinup' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            Create a new account
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}