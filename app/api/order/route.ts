import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, address, comment, cart } = body;

    // Формируем сообщение для Telegram
    const telegramMessage = `
🎯 Новый заказ BOTE Cosmetic

👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email}
📍 Адрес: ${address}
💬 Комментарий: ${comment || "Нет"}

🛍️ Товары:
${cart.map((item: any) => `- ID: ${item.id}, Количество: ${item.quantity}`).join("\n")}
    `.trim();

    // Отправка в Telegram (замените на свои данные)
    const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN || "YOUR_BOT_TOKEN";
    const telegramChatId = process.env.TELEGRAM_CHAT_ID || "YOUR_CHAT_ID";

    if (telegramBotToken !== "YOUR_BOT_TOKEN") {
      await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: telegramChatId,
          text: telegramMessage,
        }),
      });
    }

    // Отправка на email (можно использовать nodemailer или другой сервис)
    const emailData = {
      to: "botecosmetic@mail.ru",
      subject: `Новый заказ от ${name}`,
      text: telegramMessage,
    };

    // Здесь можно добавить отправку через nodemailer или другой сервис

    return NextResponse.json({ success: true, message: "Заказ отправлен" });
  } catch (error) {
    console.error("Order error:", error);
    return NextResponse.json(
      { success: false, error: "Ошибка при отправке заказа" },
      { status: 500 }
    );
  }
}

