import { useEffect, useState } from "react";
import { ArrowRight, Gift, X } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const SESSION_KEY = "listingsready_special_offer_popup_seen";

const configuredFormUrl =
  import.meta.env.VITE_FREE_PRODUCT_IMAGE_FORM_URL?.trim();

const fallbackEmailUrl =
  "mailto:hello@listingsready.com?subject=ListingsReady%20Free%20Product%20Image%20Offer";

export function SpecialOfferPopup() {
  const [isOpen, setIsOpen] = useState(false);

  const formUrl = configuredFormUrl || fallbackEmailUrl;
  const opensExternalPage = !formUrl.startsWith("mailto:");

  useEffect(() => {
    let timer: number | undefined;

    try {
      if (window.sessionStorage.getItem(SESSION_KEY) === "1") {
        return;
      }

      timer = window.setTimeout(() => {
        setIsOpen(true);
        window.sessionStorage.setItem(SESSION_KEY, "1");

        trackEvent("special_offer_popup_view", {
          offer_name: "free_product_image_creation",
          popup_version: "v1",
        });
      }, 1200);
    } catch {
      timer = window.setTimeout(() => {
        setIsOpen(true);
      }, 1200);
    }

    return () => {
      if (timer) window.clearTimeout(timer);
    };
  }, []);

  const closePopup = (closeMethod: string) => {
    setIsOpen(false);

    trackEvent("special_offer_popup_close", {
      offer_name: "free_product_image_creation",
      close_method: closeMethod,
      popup_version: "v1",
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePopup("escape_key");
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleFormClick = () => {
    trackEvent("special_offer_form_click", {
      offer_name: "free_product_image_creation",
      destination_type: configuredFormUrl ? "form" : "email_fallback",
      popup_version: "v1",
    });
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 px-4 py-6 backdrop-blur-sm"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          closePopup("backdrop");
        }
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="special-offer-title"
        aria-describedby="special-offer-description"
        className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl"
      >
        <button
          type="button"
          onClick={() => closePopup("close_button")}
          className="absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white text-muted-foreground transition hover:bg-muted hover:text-foreground"
          aria-label="Close special offer"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="border-b border-border bg-[#F8F9FA] px-6 py-6 sm:px-8">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#AF8F3B]/10">
            <Gift className="h-6 w-6 text-[#AF8F3B]" aria-hidden="true" />
          </div>

          <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-[#607286]">
            Special offer from ListingsReady
          </p>

          <h2
            id="special-offer-title"
            className="mt-3 font-display text-3xl font-semibold leading-tight text-[#0F2439] sm:text-4xl"
          >
            Professional product images, completely{" "}
            <span className="text-[#AF8F3B]">FREE</span>
          </h2>
        </div>

        <div className="px-6 py-6 sm:px-8 sm:py-7">
          <p
            id="special-offer-description"
            className="text-base leading-7 text-[#607286]"
          >
            For a limited time, ListingsReady is offering professional product
            image creation for selected businesses at no cost. We will create
            high-quality, e-commerce-ready visuals for your brand. In return,
            we only ask for your honest{" "}
            <span className="font-semibold text-[#AF8F3B]">feedback</span>{" "}
            and a genuine review of your experience with ListingsReady.
          </p>

          <a
            href={formUrl}
            target={opensExternalPage ? "_blank" : undefined}
            rel={opensExternalPage ? "noopener noreferrer" : undefined}
            onClick={handleFormClick}
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[#0F2439] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#16344F] focus:outline-none focus:ring-2 focus:ring-[#AF8F3B] focus:ring-offset-2"
          >
            View Offer Form
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </a>

          <p className="mt-4 text-center text-xs leading-5 text-[#607286]">
            Applications are reviewed before acceptance. Selected businesses
            will be contacted with the next steps.
          </p>
        </div>
      </section>
    </div>
  );
}
