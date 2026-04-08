import { useState } from "react";

interface EmailPayload {
  name?: string;
  email: string;
  subject?: string;
  message: string;
  type?: "contact" | "quote" | "service" | "book-call";
  planName?: string;
  serviceName?: string;
}

interface EmailState {
  status: "idle" | "loading" | "success" | "error";
  error: string;
}

export function useEmail() {
  const [state, setState] = useState<EmailState>({ status: "idle", error: "" });

  async function sendEmail(payload: EmailPayload) {
    setState({ status: "loading", error: "" });

    try {
      // Build mailto fallback since no backend is available
      const subject = encodeURIComponent(
        payload.subject || `[${payload.type || "contact"}] New message from ${payload.name || "Website"}`
      );
      const body = encodeURIComponent(
        `Name: ${payload.name || "N/A"}\nEmail: ${payload.email}\n${payload.serviceName ? `Service: ${payload.serviceName}\n` : ""}${payload.planName ? `Plan: ${payload.planName}\n` : ""}\nMessage:\n${payload.message}`
      );

      window.open(`mailto:hello@mrkirof.com?subject=${subject}&body=${body}`, "_blank");

      setState({ status: "success", error: "" });
      return true;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Failed to send.";
      setState({ status: "error", error: msg });
      return false;
    }
  }

  function reset() {
    setState({ status: "idle", error: "" });
  }

  return {
    sendEmail,
    reset,
    isLoading: state.status === "loading",
    isSuccess: state.status === "success",
    isError: state.status === "error",
    error: state.error,
  };
}
