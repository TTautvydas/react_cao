import React, { useEffect, useState } from "react";
import Button from "../Button/Button";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import LabelStyle from "../Label/Label.module.css";
import FormStyle from "./ContactForm.module.css";

export default function ContactForm() {
  const [nameInput, setNameInput] = useState("");
  const [nameValidation, setNameValidation] = useState(true);

  const [username, setUsername] = useState("");
  const [usernameValidation, setUsernameValidation] = useState(true);

  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState(true);

  function nameCheck(e) {
    if (
      e.target.value.charAt(0) === e.target.value.charAt(0).toUpperCase() &&
      isNaN(e.target.value.charAt(0))
    ) {
      setNameInput(e.target.value);
      console.log("correct");
      setNameValidation(true);
    } else {
      setNameValidation(false);
    }
  }

  function usernameCheck(e) {
    const usernames = ["monster", "doggo", "chad"];
    if (!usernames.includes(e.target.value)) {
      setUsername(e.target.value);

      setUsernameValidation(true);
    } else {
      setUsernameValidation(false);
    }
  }

  function emailCheck(e) {
    const email = e.target.value;
    if (email.includes("@")) {
      setEmail(e.target.value);
      console.log("ok");
      setEmailValidation(true);
    } else {
      setEmailValidation(false);
    }
  }

  return (
    <div>
      <form className={FormStyle.form}>
        <Label render={(label) => (label = "Name")} />
        <br></br>
        <TextInput
          isValid={nameValidation}
          notValid={"Name should be Capitalized and not a number"}
          onChange={nameCheck}
          value={nameInput}
          placeholder="Your name"
          required={true}
        />
        <Label render={(label) => (label = "Username")} />
        <br></br>
        <TextInput
          startIcon={
            <i class="fa-solid fa-user" style={{ color: "lightgray" }}></i>
          }
          isValid={usernameValidation}
          notValid={"username is taken, please choose another one"}
          validated={"This username is available"}
          onChange={usernameCheck}
          value={username}
          placeholder="Select username"
          required={true}
          endIcon={
            usernameValidation ? (
              <i
                class="fa-sharp fa-solid fa-check"
                style={{ color: "lightgray" }}
              ></i>
            ) : (
              <i class="fa-solid fa-xmark" style={{ color: "lightgray" }}></i>
            )
          }
        />
        <Label render={(label) => (label = "Email")} />
        <br></br>
        <TextInput
          startIcon={
            <i class="fa-solid fa-envelope" style={{ color: "lightgray" }}></i>
          }
          isValid={emailValidation}
          notValid={"email not valid"}
          onChange={emailCheck}
          value={email}
          placeholder="Your email"
          required={true}
          endIcon={
            emailValidation ? (
              <i
                class="fa-sharp fa-solid fa-check"
                style={{ color: "lightgray" }}
              ></i>
            ) : (
              <i class="fa-solid fa-xmark" style={{ color: "lightgray" }}></i>
            )
          }
        />
        <div className={LabelStyle.label}>
          <p>Subject</p>
          <select
            style={{
              border: "1px solid lightgrey",
              height: "2em",
              width: "10em",
            }}
          >
            <option>Select dropdown</option>
            <option>Selection1</option>
            <option>Selection2</option>
            <option>Selection3</option>
          </select>
        </div>
        <br></br>
        <Label render={(label) => (label = "Message")} />
        <br></br>
        <textarea
          placeholder="Textarea"
          rows={10}
          cols={62}
          style={{ border: "1px solid #ccc" }}
        ></textarea>
        <br></br>
        <input type="checkbox" />
        <label>
          I agree to the <a href="https://google.com">Terms and conditions</a>
        </label>
        <br></br>
        <input type="radio" name="yes_no" />
        <label>Yes</label>
        <input type="radio" name="yes_no" />
        <label>No</label>
        <br></br>
        <Button onClick={() => {}} text={"Submit"} variant={"primary"} />
        <Button onClick={() => {}} text={"Cancel"} variant={"secondary"} />
      </form>
    </div>
  );
}
