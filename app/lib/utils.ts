export function formatCreditCardNumber(input: string): string {
  // Remove non-numeric characters
  const cleanInput = input.replace(/\D/g, "");

  // Format into 4-number chunks
  let formatted = "";
  for (let i = 0; i < cleanInput.length; i++) {
    if (i > 0 && i % 4 === 0) {
      formatted += " ";
    }
    formatted += cleanInput.charAt(i);
  }

  // Pad to maximum length of 16 characters
  const maxLength = 19;
  formatted = formatted.substring(0, maxLength);

  return formatted;
}

export function formatExpiryDate(input) {
  // Remove any non-numeric characters
  const cleanedInput = input.replace(/\D/g, "");

  // Insert a slash (/) after the first two characters
  if (cleanedInput.length > 2) {
    return cleanedInput.slice(0, 2) + "/" + cleanedInput.slice(2, 4);
  }

  return cleanedInput;
}

export function formatZip(input) {
  const cleanedInput = input.replace(/\D/g, "");
  return cleanedInput.slice(0, 5);
}

export function formatCvv(input) {
  const cleanedInput = input.replace(/\D/g, "");
  return cleanedInput.slice(0, 3);
}

export function isValidEmail(input) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
}

export function isValidAddress(input) {}
