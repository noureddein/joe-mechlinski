import Form from "../../form/Form";
import Joi from "joi-browser";

class GetUpdateForm extends Form {
  state = {
    data: { email: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().email().required().label("Email"),
  };
  render() {
    const { input, button } = style;
    return (
      <div className="flex flex-col items-center justify-center mt-8">
        <div className=" w-full flex flex-col justify-center items-center	 relative before:absolute before:content-[''] before:bg-[url('../public/images/arrow.svg')] before:w-32 before:h-32 before:top-0 before:left-1/3 before:bg-no-repeat before:bg-contain">
          <h3 className="z-10 font-poppins text-[#5541D9] font-semibold text-4xl italic p-1">
            “Who Says”{" "}
          </h3>
          <h4 className="z-10 mb-6">coming in the Fall of 2022</h4>
        </div>
        <form className="flex flex-col items-center justify-center w-full md:flex-row">
          {this.renderInput("email", "", "email", "Your Email", input)}
          {this.renderButton("Get Updates", button)}
        </form>
      </div>
    );
  }
}
const style = {
  button:
    " bg-[#5541D9] h-10  my-auto text-white rounded text-sm	z-10 px-4 mt-4 md:mt-0",
  input: {
    _label: "mr-2",
    _input: "drop-shadow w-64 pl-4 font-poppins font-medium  h-10	",
  },
};
export default GetUpdateForm;
