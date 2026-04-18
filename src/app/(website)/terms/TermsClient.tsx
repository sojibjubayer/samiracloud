"use client";

export default function TermsClient() {
  const updatedDate = "April 2026";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "These Terms of Service govern your use of Samira Cloud’s website and services. By accessing our website or requesting services from us, you agree to these terms and conditions. If you do not agree, you should not use our website or services.",
    },
    {
      title: "2. Services Provided",
      content:
        "Samira Cloud provides digital business solutions including web development, CRM systems, QR-based attendance systems, business automation, admin dashboards, and custom internal software solutions for businesses in Qatar and related markets.",
    },
    {
      title: "3. Project Scope and Agreements",
      content:
        "Each project is based on a mutually agreed scope, timeline, pricing structure, and delivery expectations. Any major changes outside the approved scope may require additional pricing, timeline adjustments, or separate agreement approval.",
    },
    {
      title: "4. Client Responsibilities",
      content:
        "Clients are responsible for providing accurate project requirements, content, approvals, business information, and timely communication required for successful project delivery. Delays caused by missing approvals or incomplete information may affect delivery timelines.",
    },
    {
      title: "5. Payments and Fees",
      content:
        "Project payments are handled based on agreed proposals, invoices, or contracts. Deposits, milestone payments, or full payment requirements may apply depending on the project type. Delayed payments may affect delivery schedules or support availability.",
    },
    {
      title: "6. Intellectual Property",
      content:
        "Upon full payment and unless otherwise agreed in writing, final project deliverables intended for the client become the client’s property. Samira Cloud retains the right to use non-confidential work for portfolio, demonstration, and business presentation purposes unless restricted by agreement.",
    },
    {
      title: "7. Website Usage",
      content:
        "You agree not to misuse this website for unlawful activities, harmful actions, spam, unauthorized access attempts, or actions that may damage the website, services, reputation, or security of Samira Cloud.",
    },
    {
      title: "8. Third-Party Services",
      content:
        "Projects may involve third-party services such as hosting providers, payment gateways, cloud services, analytics platforms, domain providers, or integrations. Samira Cloud is not responsible for independent policies, downtime, or external service limitations controlled by third parties.",
    },
    {
      title: "9. Limitation of Liability",
      content:
        "Samira Cloud provides services with professional care and reasonable commercial standards. However, we are not liable for indirect losses, business interruption, lost profits, third-party failures, or damages resulting from misuse, delayed approvals, or circumstances outside reasonable control.",
    },
    {
      title: "10. Support and Maintenance",
      content:
        "Post-launch support depends on the agreed service package or maintenance arrangement. Ongoing support, updates, hosting management, or future feature development may require separate agreements or monthly maintenance plans.",
    },
    {
      title: "11. Termination",
      content:
        "Either party may terminate a project or service relationship under reasonable circumstances. Work completed before termination, approved milestones, and outstanding balances remain payable based on completed deliverables and prior agreements.",
    },
    {
      title: "12. Governing Law",
      content:
        "These Terms of Service are governed by the applicable laws and regulations of the State of Qatar. Any disputes arising from services or agreements shall be handled under the jurisdiction of Qatar where applicable.",
    },
    {
      title: "13. Contact Information",
      content:
        "For questions regarding these Terms of Service, please contact Samira Cloud at hello@samiracloud.com. Our business operations are based in Doha, Qatar.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pb-20 pt-32">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Legal Information
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Terms of Service
            </h1>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Last updated: {updatedDate}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              These Terms of Service explain the rules, responsibilities, and
              service conditions when working with Samira Cloud. They help
              ensure clear expectations for both our business and our clients.
            </p>
          </div>

          <div className="space-y-10 pt-10">
            {sections.map((section) => (
              <div key={section.title}>
                <h2 className="text-xl font-bold text-slate-950">
                  {section.title}
                </h2>

                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {section.content}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-3xl border border-pink-100 bg-pink-50 p-6">
            <p className="text-sm font-semibold text-slate-900">
              Important Notice
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              These Terms of Service provide general business terms and may be
              supplemented by formal proposals, quotations, invoices, contracts,
              or project-specific agreements depending on the scope of work.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}