import { useEffect, useMemo, useState } from "react";
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

const PREVIEW_NUMBERS = {
  views: 1842,
  likes: 327,
  shares: 89,
};

export function WorkflowEngagementPanel({
  workflowSlug,
  workflowTitle,
  category,
  subcategory,
}: WorkflowEngagementPanelProps) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);
  const [deviceViews, setDeviceViews] = useState(0);
  const [deviceShares, setDeviceShares] = useState(0);
  const [previewMode, setPreviewMode] = useState(false);

  const storageKeys = useMemo(
    () => ({
      liked: `listingsready_workflow_liked_${workflowSlug}`,
      views: `listingsready_workflow_views_${workflowSlug}`,
      shares: `listingsready_workflow_shares_${workflowSlug}`,
      sessionView: `listingsready_workflow_session_view_${workflowSlug}`,
    }),
    [workflowSlug],
  );

  const analyticsParams = {
    workflow_slug: workflowSlug,
    workflow_title: workflowTitle,
    category,
    subcategory,
    engagement_panel_version: "right-sidebar-v2",
  };

  useEffect(() => {
    const isPreview =
      new URLSearchParams(window.location.search).get("metricsPreview") === "1";
    setPreviewMode(isPreview);

    try {
      setLiked(window.localStorage.getItem(storageKeys.liked) === "1");

      const currentShares = Number(
        window.localStorage.getItem(storageKeys.shares) || "0",
      );
      setDeviceShares(Number.isFinite(currentShares) ? currentShares : 0);

      let currentViews = Number(
        window.localStorage.getItem(storageKeys.views) || "0",
      );

      if (window.sessionStorage.getItem(storageKeys.sessionView) !== "1") {
        currentViews = Number.isFinite(currentViews) ? currentViews + 1 : 1;
        window.localStorage.setItem(storageKeys.views, String(currentViews));
        window.sessionStorage.setItem(storageKeys.sessionView, "1");
      }

      setDeviceViews(Number.isFinite(currentViews) ? currentViews : 1);
    } catch {
      setDeviceViews(1);
    }

    trackEvent("engagement_panel_impression", {
      ...analyticsParams,
      display_mode: isPreview ? "preview_sample" : "real_device_activity",
    });
  }, [
    category,
    storageKeys.liked,
    storageKeys.sessionView,
    storageKeys.shares,
    storageKeys.views,
    subcategory,
    workflowSlug,
    workflowTitle,
  ]);

  const displayedViews = previewMode ? PREVIEW_NUMBERS.views : deviceViews;
  const displayedLikes = previewMode ? PREVIEW_NUMBERS.likes : liked ? 1 : 0;
  const displayedShares = previewMode ? PREVIEW_NUMBERS.shares : deviceShares;

  const getShareUrl = () =>
    typeof window === "undefined"
      ? `https://listingsready.com/workflows/${workflowSlug}`
      : window.location.href.replace(/[?&]metricsPreview=1\b/, "");

  const recordShare = (socialNetwork: ShareNetwork) => {
    trackEvent("workflow_share", {
      ...analyticsParams,
      social_network: socialNetwork,
    });

    if (previewMode) return;

    try {
      const nextShares = deviceShares + 1;
      window.localStorage.setItem(storageKeys.shares, String(nextShares));
      setDeviceShares(nextShares);
    } catch {
      setDeviceShares((current) => current + 1);
    }
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
    if (liked || previewMode) return;

    try {
      window.localStorage.setItem(storageKeys.liked, "1");
    } catch {
      // The interaction is still measured when storage is unavailable.
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
      await copyShareLink(network);
      window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer");
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
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Workflow activity
          </p>
          <h2 className="mt-2 text-lg font-semibold">Engage and share</h2>
        </div>

        {previewMode && (
          <span className="rounded-full border px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
            Preview
          </span>
        )}
      </div>

      <p className="mt-3 text-xs leading-5 text-muted-foreground">
        {previewMode
          ? "Sample numbers are shown only for layout preview."
          : "Numbers below reflect activity on this device. Site-wide totals remain private in Google Analytics."}
      </p>

      <div className="mt-4 grid grid-cols-3 gap-2 lg:grid-cols-1">
        <MetricCard
          icon={<Eye className="h-4 w-4" aria-hidden="true" />}
          label="Views"
          value={displayedViews}
        />
        <MetricCard
          icon={<Heart className="h-4 w-4" aria-hidden="true" />}
          label="Likes"
          value={displayedLikes}
        />
        <MetricCard
          icon={<Share2 className="h-4 w-4" aria-hidden="true" />}
          label="Shares"
          value={displayedShares}
        />
      </div>

      <button
        type="button"
        onClick={handleLike}
        disabled={liked || previewMode}
        className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-semibold text-foreground transition hover:bg-muted disabled:cursor-default disabled:bg-muted"
      >
        {liked ? (
          <Check className="mr-2 h-4 w-4" aria-hidden="true" />
        ) : (
          <Heart className="mr-2 h-4 w-4" aria-hidden="true" />
        )}
        {previewMode ? "Preview only" : liked ? "Liked" : "Like this workflow"}
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

function MetricCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border bg-background p-3">
      <div className="flex items-center gap-2 text-muted-foreground">
        {icon}
        <span className="text-[11px] font-medium uppercase tracking-wide">
          {label}
        </span>
      </div>
      <p className="mt-2 text-xl font-semibold tabular-nums text-foreground">
        {value.toLocaleString()}
      </p>
    </div>
  );
}
