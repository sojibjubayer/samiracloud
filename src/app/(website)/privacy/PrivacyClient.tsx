"use client";

export default function PrivacyClient() {
  const updatedDate = "April 2026";

  const sections = [
    {
      title: "1. Introduction",
      content:
        "Samira Cloud respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, and protect your data when you use our website or contact us for services. Our practices are aligned with Qatar Law No. 13 of 2016 concerning Personal Data Privacy Protection, which protects personal data and requires transparency, fairness, purpose limitation, and security in processing personal data. :contentReference[oaicite:0]{index=0}",
    },
    {
      title: "2. Information We Collect",
      content:
        "We may collect your name, email address, phone number, company information, inquiry details, project requirements, and website usage information such as browser type, device information, and analytics data.",
    },
    {
      title: "3. How We Use Your Information",
      content:
        "We use your information to respond to inquiries, provide requested services, manage communication, improve our website experience, maintain service quality, and protect against misuse, fraud, or security risks.",
    },
    {
      title: "4. Consent and Legal Basis",
      content:
        "Where required, we collect and process personal data based on your clear consent, especially when you submit contact forms or service requests. Under Qatar Law No. 13 of 2016, personal data should be processed lawfully and transparently, and consent is a key requirement unless processing is otherwise required by law. :contentReference[oaicite:1]{index=1}",
    },
    {
      title: "5. Data Retention",
      content:
        "We keep personal information only for as long as necessary to fulfill the purpose for which it was collected, provide services, comply with legal obligations, or resolve disputes. Data is not retained longer than necessary.",
    },
    {
      title: "6. Cookies and Analytics",
      content:
        "Our website may use cookies and analytics tools to improve performance, understand visitor behavior, and optimize user experience. These tools help us improve speed, navigation, and service quality.",
    },
    {
      title: "7. Third-Party Services",
      content:
        "We may use trusted third-party services such as website hosting providers, analytics tools, email services, and cloud infrastructure providers. These services are selected carefully and are expected to maintain appropriate data protection standards.",
    },
    {
      title: "8. Data Security",
      content:
        "We apply reasonable administrative, technical, and organizational safeguards to protect personal data against unauthorized access, disclosure, misuse, loss, or alteration. Qatar’s law requires integrity, confidentiality, and proper security controls when handling personal data. :contentReference[oaicite:2]{index=2}",
    },
    {
      title: "9. Your Rights",
      content:
        "You may request access to your personal information, request corrections, object to unnecessary processing, withdraw prior consent where applicable, or request deletion where legally permitted. Qatar’s personal data privacy law recognizes these individual rights and requires organizations to handle data responsibly. :contentReference[oaicite:3]{index=3}",
    },
    {
      title: "10. Contact Information",
      content:
        "If you have questions regarding this Privacy Policy or wish to make a privacy-related request, please contact Samira Cloud at hello@samiracloud.com. Our business operations are based in Doha, Qatar.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-20">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10 lg:p-14">
          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Legal Information
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm font-medium text-slate-500">
              Last updated: {updatedDate}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600">
              At Samira Cloud, we value your privacy and are committed to
              protecting your personal information. This policy explains how we
              collect, use, and protect your data when you interact with our
              website and services in Qatar.
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

          <div className="mt-14 rounded-3xl border border-blue-100 bg-blue-50 p-6">
            <p className="text-sm font-semibold text-slate-900">
              Important Notice
            </p>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              This Privacy Policy is provided for general business transparency
              and operational compliance. Depending on your business model,
              payment processing, third-party integrations, or industry-specific
              regulations, additional legal review may be recommended.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}