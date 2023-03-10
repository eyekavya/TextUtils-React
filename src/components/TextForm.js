import React, { useState } from "react";
import Textarea from "@mui/joy/Textarea";
import Button from "@mui/joy/Button";
import { ThemeProvider, Typography } from "@mui/joy";

function TextForm(props) {
  const [text, setText] = useState("");

  function handleUppercase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function handleLowercase() {
    let newText = text.toLowerCase();
    setText(newText);
  }

  function handleClear() {
    let newText = "";
    setText(newText);
  }

  function handleReverse() {
    let newText = text.split("").reverse().join("");
    setText(newText);
  }

  function handleCopy() {
    navigator.clipboard.writeText(text);
  }

  function handleExtraSpace() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function handleOnChange(event) {
    // console.log(event);
    // console.log(event.target);
    // console.log(event.target.value);
    setText(event.target.value);
  }

  return (
    <>
      <ThemeProvider>
        <Textarea
          position="static"
          sx={{
            mt: "1rem",
            backgroundColor: !props.darkMode ? "#fff" : "#000000a3",
            color: !props.darkMode ? "#000000a3" : "#fff",
          }}
          minRows={8}
          placeholder="Enter your text..."
          size="lg"
          value={text}
          onChange={handleOnChange}
        />
      </ThemeProvider>
      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleUppercase}
      >
        Convert to Uppercase
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleLowercase}
      >
        Convert to Lowercase
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleClear}
      >
        Clear Text
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleReverse}
      >
        Reverse Text
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleCopy}
      >
        Copy Text
      </Button>

      <Button
        sx={{
          background: "#1976d2",
          color: "white",
          mt: "1rem",
          mx: "0.2rem",
        }}
        onClick={handleExtraSpace}
      >
        Remove Extra Space
      </Button>

      <Typography variant="h1" component="h2" sx={{ mt: "3rem", mb: "1rem" }}>
        Your Text Summary
      </Typography>
      <Typography variant="h2">
        {
          text.split(/\s+/).filter((e) => {
            return e.length !== 0;
          }).length
        }{" "}
        words and {text.length} characters
      </Typography>
      <Typography variant="h2">
        {0.008 *
          text.split(/\s+/).filter((e) => {
            return e.length !== 0;
          }).length}{" "}
        Minutes Read
      </Typography>
      <Typography
        variant="h1"
        component="h2"
        sx={{ mt: "1.5rem", mb: "0.5em" }}
      >
        Preview Text
      </Typography>
      <Typography variant="h2" sx={{ maxWidth: "552px" }}>
        {text.length === 0 ? "Nothing to preview!" : text}
      </Typography>
    </>
  );
}

export default TextForm;
