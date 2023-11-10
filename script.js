// declaration
const passwordBox = document.getElementById("password");
const length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^&*()_+-={}[]|:;'<>,.?/";

const allChars = upperCase + lowerCase + number + symbol;


// create password function
const createPassword = () => {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = password;
};

// copy password function
const copyPassword = () => {
    passwordBox.select();
    document.execCommand("copy")
}

// standard theme function
const standardTheme = () => {
    document.getElementById("themeStylesheet").href = "./styles/standard.css"
}

// dark theme function
const darkTheme = () => {
    document.getElementById("themeStylesheet").href = "./styles/dark.css"
}

// stalightndard theme function
const lightTheme = () => {
    document.getElementById("themeStylesheet").href = "./styles/light.css"
}