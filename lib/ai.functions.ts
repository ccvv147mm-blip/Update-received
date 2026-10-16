export async function generateAIContent(prompt: string) {
  return {
    result: "هذا محتوى مولد افتراضياً للرد على: " + (prompt || "طلب جديد")
  };
}

export default generateAIContent;
