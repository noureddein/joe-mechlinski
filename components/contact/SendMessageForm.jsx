import Form from "../form/Form";
import Joi from "joi-browser";

export default class SendMessageForm extends Form {
  state = {
    data: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    errors: {},
  };

  schema = {
    first_name: Joi.string().required().label("First Name"),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required(),
    subject: Joi.string().required(),
    message: Joi.string().required(),
  };
  render() {
    const { input, subject, submitBtn } = FormStyles;

    this.doSubmit = () => {
      console.log(this.state.data);
    };
    return (
      <div className="flex flex-col items-center justify-center mb-20 -mt-16 ">
        <div className=" relative w-[80%] md:w-1/2 bg-[#F9F8FF] p-8 rounded-sm before:content-[''] before:absolute before:w-[10rem] before:h-[10rem] before:-top-[8%] before:-left-[20%] before:bg-[url(/images/form-arr-pattern.svg)] before:bg-no-repeat before:bg-contain">
          <h3 className=" relative mb-12 text-2xl font-bold text-center font-poppins before:content-[''] before:absolute before:-bottom-4 before:right-[calc(50%-2rem)] before:bg-black before:w-[5rem] before:h-[4px]">
            Send Message
          </h3>
          <form
            className="send-message-form"
            onSubmit={this.handleForm}
            id="send-message-form"
          >
            <div className="flex flex-col md:mt-4 md:flex-row ">
              {this.renderInput("first_name", "", "text", "First Name", input)}
              {this.renderInput("last_name", "", "text", "Last Name", input)}
            </div>
            <div className="flex flex-col md:mt-4 md:flex-row ">
              {this.renderInput("email", "", "email", "Email", input)}
              {this.renderInput("phone", "", "text", "Phone", input)}
            </div>
            <div className="flex flex-row md:mt-4 ">
              {this.renderInput("subject", "", "text", "Subject", subject)}
            </div>
            <div className="flex flex-col items-center justify-center mt-4  md:w-[95%]">
              <textarea
                onChange={this.handleChange}
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Enter your message..."
                className="w-full py-2 pl-4 mx-auto"
                form="send-message-form"
              />
            </div>
            <div className="  flex flex-col items-center justify-center mt-4  w-[95%]">
              {this.renderButton("Submit", submitBtn)}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const FormStyles = {
  input: {
    _input:
      "font-poppins text-base text-black pl-4 py-2 placeholder:text-black md:w-9/10 mb-4",
    _label: "",
    _container: "flex flex-col justify-center w-full",
    _errorMsg: "text-xs text-red-400",
  },
  subject: {
    _input:
      "font-poppins text-base text-black pl-4 py-2 placeholder:text-black md:w-[95%]",
    _label: "",
    _container: "flex flex-col justify-center w-full",
    _errorMsg: "text-xs text-red-400 md:ml-4",
  },
  submitBtn:
    "text-white font-poppins font-semibold text-base bg-[#5541D9] px-12 py-2 rounded-sm",
};
