"use client";
import { useState, useEffect } from "react";
import { handleExists, userEmailExists } from "@/app/lib/api_utils";
import create_user from "./signup";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import debounce from "lodash.debounce";

// Validation schema using Zod
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format").min(1, "Email is required"),
  handle: z.string().min(1, "Handle is required"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Page = () => {
  const [submissionError, setSubmissionError] = useState("");
  const [emailValidationError, setEmailValidationError] = useState("");
  const [handleValidationError, setHandleValidationError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const email = watch("email");
  const handle = watch("handle");

  // Debounced validation for email
  const validateEmail = debounce(async (emailValue) => {
    if (emailValue) {
      const exists = await userEmailExists(emailValue);
      setEmailValidationError(exists ? "Email already exists" : "");
    } else {
      setEmailValidationError("");
    }
  }, 500);

  // Debounced validation for handle
  const validateHandle = debounce(async (handleValue) => {
    if (handleValue) {
      const exists = await handleExists(handleValue);
      setHandleValidationError(
        exists ? "Handle already exists. Try another." : ""
      );
    } else {
      setHandleValidationError("");
    }
  }, 500);

  useEffect(() => {
    validateEmail(email);
  }, [email]);

  useEffect(() => {
    validateHandle(handle);
  }, [handle]);

  const onSubmit = async (data) => {
    validateEmail(email);
    validateHandle(handle);
    if (emailValidationError) {
      setSubmissionError(
        `An error occurred while submitting the form: ${emailValidationError}`
      );
      setShowModal(true);
      return;
    }
    if (handleValidationError) {
      setSubmissionError(
        `An error occurred while submitting the form: ${handleValidationError}`
      );
      setShowModal(true);
      return;
    }

    try {
      console.log("Form data submitted:", data);
      // Here you would typically send the data to your API
      const result = await create_user(data);
      // Simulate successful registration
      router.push(`/auth/signin?newAccount=true&email=${result.email}`); // Redirect to the landing page
    } catch (error) {
      setSubmissionError(
        `An error occurred while submitting the form: ${error}`
      );
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="flex items-center justify-center space-y-4 mt-5 flex-col text-xl">
        <h1>Welcome to Guppy! Just a few questions:</h1>

        
        {submissionError && <p className="text-red-500">{submissionError}</p>}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="!mb-8 flex flex-col items-start justify-start space-y-4  border border-rounded p-3 rounded bg-slate-200 shadow"
        >
          <div className="items-center">
            <div>
              <label className="form-label w-100" htmlFor="name">
                What's your full name?
                <input
                  className="form-control w-100"
                  placeholder="Example: Emma Isabelle Johnson"
                  required
                  {...register("name")}
                />
                {errors.name?.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.name.message)}
                  </p>
                )}
              </label>
            </div>

            <div>
              <label className="form-label w-100" htmlFor="email">
                What's your email?
                <input
                  className={`form-control w-100`}
                  placeholder="Example: emma.johnson@example.com"
                  required
                  {...register("email")}
                />
                {emailValidationError && (
                  <p className="text-red-500 text-sm">{emailValidationError}</p>
                )}
                {errors.email?.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.email.message)}
                  </p>
                )}
              </label>
            </div>

            <div>
              <label className="form-label w-100" htmlFor="email">
                What's a good handle?{" "}
                <span className="text-sm">
                  (It's how people @ you on Guppy.)
                </span>
                <div className="input-group">
                  <span className="input-group-text" id="basic-addon1">
                    @
                  </span>
                  <input
                    className="form-control"
                    placeholder="Example: emjnsn2006"
                    aria-describedby="basic-addon1"
                    required
                    {...register("handle")}
                  />
                </div>
                {handleValidationError && (
                  <p className="text-red-500 text-sm">
                    {handleValidationError}
                  </p>
                )}
                {errors.handle?.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.handle.message)}
                  </p>
                )}
              </label>
            </div>

            <div>
              <label className="form-label w-100" htmlFor="password">
                What's a good password for this account?
                <input
                  type="password"
                  className="form-control w-100"
                  required
                  {...register("password")}
                />
                {errors.password?.message && (
                  <p className="text-red-500 text-sm">
                    {String(errors.password.message)}
                  </p>
                )}
              </label>

              <div className="text-sm mt-0">
                (We request that your password includes at least eight
                characters.)
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary mx-auto my-3"
            >
              {isSubmitting ? "Creating Account..." : "Let's Go!"}
            </button>
          </div>
        </form>

        {/* Bootstrap Modal for Error Display */}
        {showModal && (
          <div
            className="modal fade show mt-5"
            style={{ display: "block" }}
            tabIndex={-1}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Submission Error</h5>
                  <button
                    type="button"
                    className="btn-close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>{submissionError}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={handleCloseModal}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Page;
