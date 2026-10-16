export function getFriendlyErrorMessage(error: any): string {
  if (typeof error === 'string') return error;
  return error?.message || "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى.";
}

export default getFriendlyErrorMessage;
