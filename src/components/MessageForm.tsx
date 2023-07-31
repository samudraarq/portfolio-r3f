import emailjs from "@emailjs/browser";
import { SubmitHandler, useForm } from "react-hook-form";
import styles from "../styles/MessageForm.module.css";
import { useState } from "react";

type Inputs = {
  from_name: string;
  from_email: string;
  message: string;
};

const MessageForm = () => {
  const [successText, setSuccessText] = useState("");
  const [errorText, setErrorText] = useState("");
  const [btnText, setBtnText] = useState("Send");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setSuccessText("");
    setErrorText("");
    setBtnText("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccessText("Message sent successfully!");
          reset();
        },
        () => {
          setErrorText("Message failed to send!");
        }
      )
      .finally(() => {
        setBtnText("Send");
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.container}>
      {successText && <p className={styles.successText}>{successText}</p>}
      {errorText && <p className={styles.errorText}>{errorText}</p>}

      <div className={styles.inputContainer}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          {...register("from_name", { required: true })}
        />
        {errors.from_name && <span>Please put your name</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("from_email", { required: true })}
        />
        {errors.from_email && <span>Please put your email</span>}
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor="message">Message</label>
        <textarea id="message" {...register("message", { required: true })} />
        {errors.message && <span>Please put your message</span>}
      </div>

      <button type="submit" className={styles.submitBtn}>
        {btnText}
      </button>
    </form>
  );
};

export default MessageForm;
