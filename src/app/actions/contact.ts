"use server";

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
}

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message: string;
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const data: ContactFormData = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    reason: formData.get("reason") as string,
    message: formData.get("message") as string,
  };

  // Validation
  if (!data.name || data.name.trim().length < 2) {
    return { status: "error", message: "Por favor ingresa tu nombre completo." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    return { status: "error", message: "Por favor ingresa un email válido." };
  }

  if (!data.reason) {
    return { status: "error", message: "Por favor selecciona un motivo de contacto." };
  }

  if (!data.message || data.message.trim().length < 10) {
    return {
      status: "error",
      message: "El mensaje debe tener al menos 10 caracteres.",
    };
  }

  // Log the data (ready for future email service integration)
  console.log("Nuevo mensaje de contacto:", data);

  return {
    status: "success",
    message: "¡Gracias por tu mensaje! Te responderemos lo antes posible.",
  };
}
