export async function getCountryNews(data: { country: string }) {
  return {
    dateLabel: "اليوم",
    items: [
      {
        category: "عام",
        title: "أحدث أخبار " + (data.country || "مصر"),
        summary: "جاري تحديث الأخبار تلقائياً لهذه المنطقة."
      }
    ]
  };
}
