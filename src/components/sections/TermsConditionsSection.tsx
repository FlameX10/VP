import React from 'react';

export const TermsConditionsSection: React.FC = () => {
  return (
    <section className="bg-void py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="font-header text-3xl md:text-4xl text-center mb-12 uppercase tracking-widest text-pink-500">
          Terms and Conditions
        </h2>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 font-body text-gray-300">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Age Limit */}
            <div>
              <h3 className="text-gold-600 text-lg font-semibold mb-3">Age Limit</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Any person above the age of 13 is allowed to join us for Vishwapreneur'26</li>
              </ul>
            </div>

            {/* Privacy Policy */}
            <div>
              <h3 className="text-gold-600 text-lg font-semibold mb-3">Privacy Policy</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>By registering for Vishwapreneur'26, you consent to the collection and use of this information as set forth.</li>
              </ul>
            </div>

            {/* Advertisements & Promotions */}
            <div>
              <h3 className="text-gold-600 text-lg font-semibold mb-3">Advertisements & Promotions</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>This website may contain links to third-party websites, products, or services, which may be posted by our affiliates, our partners, or our sponsor. Any kind of promotion regarding them is not allowed.</li>
              </ul>
            </div>

            {/* Ticket Booking Policy */}
            <div>
              <h3 className="text-gold-600 text-lg font-semibold mb-3">Ticket Booking Policy</h3>
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                <li>Once you book a seat for this event, it cannot be cancelled under any circumstances, and any request for fare refund will not be entertained.</li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Impermissible Actions */}
            <div>
              <h3 className="text-gold-600 text-lg font-semibold mb-3">Following actions are impermissible</h3>
              <ul className="list-disc list-inside space-y-3 text-sm md:text-base">
                <li>Use the information in any manner that could interfere with, disable, disrupt, overburden, or otherwise impair the Service</li>
                <li>Use the website in any manner that we reasonably believe to be an abuse of or fraud on any payment system.</li>
                <li>Access, search, or collect data about Vishwapreneur by any means (automated or otherwise) except as permitted in these Terms or in a separate agreement with EDC VIIT.</li>
                <li>Any political comment will not be tolerated regarding Vishwapreneur.</li>
                <li>Legal actions will be taken if any kind of malpractice is found.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
