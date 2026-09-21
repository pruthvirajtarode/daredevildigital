export type FAQItem = {
  question: string;
  answer: string;
};

export const faqs: FAQItem[] = [
  {
    question: "What does the S$999 audit actually cover?",
    answer: "A six-layer diagnostic of your Meta account: Signal Integrity, Account Structure, Saturation, Creative, Lead Layer, and Business Layer. You get a Configuration Health score, a written list of every Critical issue with a fix attached, a Signal Loop gap analysis, and a 30-minute debrief call. If you move to a management engagement, the S$999 is credited in full against month one."
  },
  {
    question: "I'm not spending S$5K/month yet. Can I still work with D3?",
    answer: "Yes, Option B is the right entry point. The Digital Marketing Blueprint (S$888) covers six layers: business snapshot, audience architecture, offer and lead mechanism, campaign blueprint, creative direction, and a 90-day execution roadmap. You move into Starter Management at S$699/month, with a written graduation clause: when monthly ad spend consistently clears S$3,000, you move to Option A terms."
  },
  {
    question: "What happens after the audit if I don't proceed to management?",
    answer: "You keep the full audit report. Every Critical issue is documented with a fix — you can implement it yourself or with whoever manages your account. The audit stands alone as a diagnostic. That said, the most common outcome of seeing a Configuration Health score is wanting someone to fix it properly."
  },
  {
    question: "What is the Signal Loop and why does it matter?",
    answer: "Most Meta lead-gen accounts optimise toward form fills. But a form fill isn't a buyer — it's just someone who clicked. The Signal Loop pushes your actual CRM outcomes (qualified lead, booked appointment, closed sale) back to Meta via CAPI and offline conversion events. Meta then trains your campaigns toward the people who buy, not just the people who fill in forms."
  },
  {
    question: "How does the exclusivity work exactly?",
    answer: "At the Exclusive Management tier (S$3,499/month), D3 works with one business per niche. Once your niche is confirmed and you're a paying client, no direct competitor in that niche gets taken on. The slot is held for the duration of your engagement. Check the Exclusivity Tracker above to see if your niche is still open."
  },
  {
    question: "What access do you need to run the audit?",
    answer: "View access to your Meta Business Manager and Ads Manager. No admin access, no ability to make changes. We also need 30 minutes with someone who knows your close rate and what happens to leads after they come in — without that, we can only audit half the machine."
  }
];
