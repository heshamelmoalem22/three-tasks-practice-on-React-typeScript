import { forwardRef, type ComponentPropsWithoutRef } from "react";

type inputProps={
    label:string;
    id:string;
}&ComponentPropsWithoutRef<"input">
const input= forwardRef<HTMLInputElement, inputProps>(function Input({label,id,...props},ref) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} ref={ref} {...props} />
    </div>
  )
}
)
export default input;