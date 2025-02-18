function generatePassword(...passwordRequirements) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+";

  let allowedChars = "";
  let password = "";

  allowedChars += passwordRequirements[1] ? lowercaseChars : "";
  allowedChars += passwordRequirements[2] ? uppercaseChars : "";
  allowedChars += passwordRequirements[3] ? numberChars : "";
  allowedChars += passwordRequirements[4] ? symbolChars : "";

  if (passwordRequirements[0] <= 0) {
    return "Password length must be at least 1 character";
  }
  if (allowedChars.length === 0) {
    return "At least one character type must be selected";
  }
  for (let i = 0; i < passwordRequirements[0]; i++) {
    password += allowedChars.charAt(
      Math.floor(Math.random() * allowedChars.length)
    );
  }
  return password;
}

const passwordLength = 12;
const includeUppercase = true;
const includeLowercase = true;
const includeNumbers = true;
const includeSymbols = true;

let passwordRequirements = [
  passwordLength,
  includeUppercase,
  includeLowercase,
  includeNumbers,
  includeSymbols,
];

const password = generatePassword(...passwordRequirements);

console.log(`Generated password: ${password}`);
