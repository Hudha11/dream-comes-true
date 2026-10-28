import { MessageCircle, ArrowUpRight } from "lucide-react";
import { whatsappUrl } from "../data/site.js";
export default function WhatsAppChooser({ message, compact = false }) {
  const contacts = [
    { id: "admin1", label: "Contact Admin 1" },
    { id: "admin2", label: "Contact Admin 2" },
  ];
  return (
    <div
      className={`contact-options ${compact ? "contact-options--compact" : ""}`}
    >
      {contacts.map((c) => {
        const url = whatsappUrl(c.id, message);
        return url ? (
          <a
            className="button button--green"
            key={c.id}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={17} />
            {c.label}
            <ArrowUpRight size={15} />
          </a>
        ) : (
          <button
            className="button button--green"
            key={c.id}
            type="button"
            onClick={() =>
              window.alert(
                `Nomor WhatsApp ${c.label.replace("Contact ", "")} belum dikonfigurasi. Isi src/data/site.js terlebih dahulu.`,
              )
            }
          >
            <MessageCircle size={17} />
            {c.label}
            <ArrowUpRight size={15} />
          </button>
        );
      })}
    </div>
  );
}
