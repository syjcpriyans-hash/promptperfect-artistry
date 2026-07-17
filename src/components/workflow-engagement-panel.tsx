import { useState } from "react";
import { Check, Copy, Share2 } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

type ShareNetwork =
  | "whatsapp"
  | "linkedin"
  | "x"
  | "facebook"
  | "threads"
  | "instagram"
  | "copy_link";

interface WorkflowEngagementPanelProps {
  workflowSlug: string;
  workflowTitle: string;
  category: string;
  subcategory: string;
}

const shareButtons: Array<{ network: ShareNetwork; label: string }> = [
  { network: "whatsapp", label: "WhatsApp" },
  { network: "linkedin", label: "LinkedIn" },
  { network: "x", label: "X" },
  { network: "facebook", label: "Facebook" },
  { network: "threads", label: "Threads" },
  { network: "instagram", label: "Instagram" },
];

export function WorkflowEngagementPanel({
  workflowSlug,
  workflowTitle,
  category,
  subcategory,
}: WorkflowEngagementPanelProps) {
  const [copied, setCopied] = useState(false);

  const analyticsParams = {
    workflow_slug: workflowSlug,
    workflow_title: workflowTitle,
    category,
    subcategory,
    share_panel_version: "share-only-v1",
  };

  const getShareUrl = () =>
    typeof window === "undefined"
      ? `https://listingsready.com/workflows/${workflowSlug}`
      : window.location.href.split("?")[0];

  const recordShare = (socialNetwork: ShareNetwork) => {
    trackEvent("workflow_share", {
      ...analyticsParams,
      social_network: socialNetwork,
    });
  };

  const copyShareLink = async (
    socialNetwork: ShareNetwork = "copy_link",
  ) => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      recordShare(socialNetwork);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  const handleShare = async (network: ShareNetwork) => {
    const shareUrl = getShareUrl();
    const shareText = `Try this ListingsReady workflow: ${workflowTitle}`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    if (network === "instagram") {
      await copyShareLink(network);
      window.open(
        "https://www.instagram.com/",
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    const destinations: Partial<Record<ShareNetwork, string>> = {
      whatsapp: `https://wa.me/?text=${encodedText}%20${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      x: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      threads: `https://www.threads.net/intent/post?text=${encodedText}%20${encodedUrl}`,
    };

    const destination = destinations[network];
    if (!destination) return;

    recordShare(network);
    window.open(
      destination,
      "_blank",
      "noopener,noreferrer,width=720,height=640",
    );
  };

  return (
    <aside className="rounded-2xl border bg-card p-4 shadow-sm sm:p-5 lg:sticky lg:top-24">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted">
          <Share2 className="h-5 w-5 text-foreground" aria-hidden="true" />
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Share
          </p>
          <h2 className="mt-1 text-lg font-semibold">Share this workflow</h2>
        </div>
      </div>

      <p className="mt-4 text-sm leading-6 text-muted-foreground">
        Send this workflow to another seller, team member or client.
      </p>

      <div className="mt-5 grid grid-cols-2 gap-2">
        {shareButtons.map((item) => (
          <button
            key={item.network}
            type="button"
            onClick={() => void handleShare(item.network)}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-muted"
          >
            {item.label}
          </button>
        ))}
      </div>

      <button
        type="button"
        onClick={() => void copyShareLink()}
        className="mt-2 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-muted"
      >
        {copied ? (
          <Check className="mr-2 h-4 w-4" aria-hidden="true" />
        ) : (
          <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        {copied ? "Link copied" : "Copy link"}
      </button>

      {copied && (
        <p className="mt-3 text-xs leading-5 text-muted-foreground">
          The workflow link is ready to paste.
        </p>
      )}
    </aside>
  );
}
