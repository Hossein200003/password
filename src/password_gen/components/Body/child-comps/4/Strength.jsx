import { useContext } from "react";
import {
  PassLengthContext,
  PassSettingContext,
} from "../../../../context/PassContext";
import CSS from "./1.module.scss";

const Strength = () => {
  const { passLength } = useContext(PassLengthContext);
  const { settings } = useContext(PassSettingContext);
  let strength;
  if (passLength > 9) {
    strength = 8;
  } else if (passLength > 7) {
    strength = 6;
  } else if (passLength > 4) {
    strength = 4;
  } else if (passLength > 2) {
    strength = 2;
  } else if (passLength > 0) {
    strength = 1;
  }
  let strength2 = 0;
  settings.forEach((obj) => {
    if (obj.isTrue) {
      strength2 += 1;
    }
  });
  const allStrength = strength * strength2;
  console.log("Strength re-render");

  let strengthResult = "";
  if (allStrength > 10) {
    strengthResult = "Very strong";
  } else if (allStrength > 7) {
    strengthResult = "Strong";
  } else if (allStrength > 4) {
    strengthResult = "Medium";
  } else if (allStrength > 2) {
    strengthResult = "Weak";
  } else if (allStrength > 0) {
    strengthResult = "Very weak";
  } else {
    strengthResult = "😐";
  }
  return (
    <div className={CSS.main}>
      <h3>Strength: </h3>
      <div className={`${CSS.strength} ${CSS.n}`}>
        <h3>{strengthResult}</h3>
        {/* <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div> */}
      </div>
    </div>
  );
};
export { Strength };