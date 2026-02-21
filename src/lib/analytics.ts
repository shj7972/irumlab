// GA4 Custom Event Tracking

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

type EventParams = Record<string, string | number | boolean>;

function sendEvent(eventName: string, params?: EventParams) {
    if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", eventName, params);
    }
}

// Naming funnel events
export function trackNamingStart(type: "baby" | "english" | "brand") {
    sendEvent("naming_start", { naming_type: type });
}

export function trackNamingFormSubmit(type: "baby" | "english" | "brand") {
    sendEvent("naming_form_submit", { naming_type: type });
}

export function trackNamingResultView(type: "baby" | "english" | "brand") {
    sendEvent("naming_result_view", { naming_type: type });
}

// Premium unlock
export function trackPremiumUnlockStart() {
    sendEvent("premium_unlock_start");
}

export function trackPremiumUnlockComplete() {
    sendEvent("premium_unlock_complete");
}

// Share events
export function trackShare(platform: string, contentType: string) {
    sendEvent("share", {
        method: platform,
        content_type: contentType,
    });
}

// Blog events
export function trackBlogView(slug: string, title: string) {
    sendEvent("blog_view", { article_slug: slug, article_title: title });
}

// CTA clicks
export function trackCtaClick(ctaName: string, location: string) {
    sendEvent("cta_click", { cta_name: ctaName, cta_location: location });
}

// Compatibility (name match) tool
export function trackCompatibilityCheck() {
    sendEvent("compatibility_check");
}
