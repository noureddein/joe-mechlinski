import Form from "../../form/Form";
import Joi from "joi-browser";
import Button from "../../Button";

class EventForm extends Form {
  state = {
    data: { email: "", first_name: "", last_name: "", phone: "", subject: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
    first_name: Joi.string().required().label("First name"),
    last_name: Joi.string().required().label("Last name"),
    subject: Joi.string().required().label("Subject"),
    phone: Joi.number().required().label("Phone number"),
  };

  doSubmit() {
    console.log("Hello");
  }
  render() {
    const { inputStyle, subject, button } = formStyles;
    return (
      <>
        <div className="">
          <form
            id="messageForm"
            className="bg-[#F9F8FF] p-8 font-poppins"
            onSubmit={this.handleForm}
          >
            <legend className="text-3xl font-bold text-center text-black font-poppins">
              Send a Message
            </legend>
            <div className="flex flex-col pt-4 md:flex-row md:justify-between">
              {this.renderInput(
                "first_name",
                "",
                "text",
                "First Name",
                inputStyle
              )}
              {this.renderInput(
                "last_name",
                "",
                "text",
                "Last Name",
                inputStyle
              )}
            </div>
            <div className="flex flex-col md:justify-between md:flex-row">
              {this.renderInput("email", "", "email", "Email", inputStyle)}
              {this.renderInput("phone", "", "text", "phone", inputStyle)}
            </div>
            {this.renderInput("subject", "", "text", "Subject", subject)}
            <div className="py-2 mx-2">
              <textarea
                rows="4"
                cols="50"
                name="messageForm"
                form="messageForm"
                className="w-full px-4 py-2"
                placeholder="Enter text here..."
              ></textarea>
            </div>
            {this.renderButton("Submit", button)}
          </form>
        </div>
      </>
    );
  }
}

export default EventForm;

const formStyles = {
  inputStyle: {
    _input: "w-full border-0.5 py-2 px-4",
    _label: "",
    _container: "pb-4 md:w-1/2 px-2",
    _errorMsg: "text-red-400 text-sm pt-2 text-center md:w-48",
  },

  subject: {
    _input: "border-0.5 w-full py-2 px-4 w-full",
    _label: "",
    _container: "pb-4 px-2 ",
    _errorMsg: "text-red-400 text-sm pt-2 text-center md:w-48",
  },
  button:
    "py-2 px-4 mt-12 w-1/3 m-auto block bg-[#5541D9] text-white rounded-sm",
};
