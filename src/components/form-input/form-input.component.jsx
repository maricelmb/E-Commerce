import { FormInputLabel, Input, Group } from "./form-input.styles";

// const FormInput = ({ label, inputOptions }) => {
//   return (
//     <div className="group">
//       <input className="form-input" {...inputOptions} />
//       {label && (
//         <label
//           className={`${
//             inputOptions.value.length? "shrink" : ""
//           } form-input-label`}
//         >
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
