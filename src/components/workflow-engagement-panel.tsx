import { useEffect, useState } from "react";
import { Check, Copy, Eye, Heart, Share2 } from "lucide-react";
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
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const likeStorageKey = `listingsready_workflow_liked_${workflowSlug}`;

  useEffect(() => {
    try {
      setLiked(window.localStorage.getItem(likeStorageKey) === "1");
    } catch {
      setLiked(false);
    }
  }, [likeStorageKey]);

  const analyticsParams = {
    workflow_slug: workflowSlug,
    workflow_title: workflowTitle,
    category,
    subcategory,
  };

  const getShareUrl = () =>
    typeof window === "undefined"
      ? `https://listingsready.com/workflows/${workflowSlug}`
      : window.location.href;

  const recordShare = (socialNetwork: ShareNetwork) => {
    trackEvent("workflow_share", {
      ...analyticsParams,
      social_network: socialNetwork,
    });
  };

  const copyShareLink = async (socialNetwork: ShareNetwork = "copy_link") => {
    try {
      await navigator.clipboard.writeText(getShareUrl());
      recordShare(socialNetwork);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard access may be unavailable in some browsers.
    }
  };

  const handleLike = () => {
    if (liked) return;

    try {
      window.localStorage.setItem(likeStorageKey, "1");
    } catch {
      // The like event is still measured when storage is unavailable.
    }

    setLiked(true);
    trackEvent("workflow_like", analyticsParams);
  };

  const handleShare = async (network: ShareNetwork) => {
    const shareUrl = getShareUrl();
    const shareText = `Try this ListingsReady workflow: ${workflowTitle}`;
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);

    if (network === "instagram") {
      if (navigator.share) {
        try {
          await navigator.share({
            title: workflowTitle,
            text: shareText,
            url: shareUrl,
          });
          recordShare(network);
          return;
        } catch {
          return;
        }
      }

      await copyShareLink(network);
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
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Workflow engagement
        </p>
        <h2 className="mt-2 text-lg font-semibold">Support and share</h2>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 lg:grid-cols-1">
        <div className="rounded-xl border bg-background p-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Eye className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide">
              Views
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">Measured privately</p>
        </div>

        <div className="rounded-xl border bg-background p-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Heart className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide">
              Likes
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">
            {liked ? "You liked this" : "Your feedback"}
          </p>
        </div>

        <div className="rounded-xl border bg-background p-3">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Share2 className="h-4 w-4" aria-hidden="true" />
            <span className="text-xs font-medium uppercase tracking-wide">
              Shares
            </span>
          </div>
          <p className="mt-2 text-sm font-medium">Measured privately</p>
        </div>
      </div>

      <button
        type="button"
        onClick={handleLike}
        disabled={liked}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-default disabled:bg-muted"
      >
        {liked ? (
          <Check className="mr-2 h-4 w-4" aria-hidden="true" />
        ) : (
          <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        {liked ? "Liked" : "Like this workflow"}
      </button>

      <div className="mt-6 border-t pt-5">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Share
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2">
          {shareButtons.map((item) => (
            <button
              key={item.network}
              type="button"
              onClick={() => void handleShare(item.network)}
              className="inline-flex min-h-10 items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-muted"
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => void copyShareLink()}
          className="mt-2 inline-flex min-h-10 w-full items-center justify-center rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition hover:bg-muted"
        >
          {copied ? (
            <Check className="mr-2 h-4 w-4" aria-hidden="true" />
          ) : (
            <Copy className="mr-2 h-4 w-4" aria-hidden="true" />
          )}
          {copied ? "Link copied" : "Copy link"}
        </button>

        {copied && (
          <p className="mt-2 text-xs leading-5 text-muted-foreground">
            The workflow link is ready to paste into any social app.
          </p>
        )}
      </div>
    </aside>
  );
}
