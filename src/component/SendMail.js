import { Close } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import "./SendMail.css";
import { useForm } from "react-hook-form";


function SendMail() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = (formData) =>{
    console.log(formData)
  }

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="text"
          {...register('to', { required: true })}
        />
        {errors.to && <p className="sendMail__error">To is Required</p>}

        <input
          name="subject"
          placeholder="Subject"
          type="text"
          {...register('subject', { required: true })}
        />
        {errors.subject && <p className="sendMail__error">Subject is Required</p>}

        <input
          name="message"
          placeholder="Message...."
          type="text"
          className="sendMail__message"
          {...register('message', { required: true })}
        />
        {errors.message && <p className="sendMail__error">Message is Required</p>}

        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
