import React from "react";
import { Globe, Package, TrendingUp, ShieldCheck, Users } from "lucide-react";

const DealPresentation = () => {
  return (
    <div className="w-full max-w-5xl mx-auto p-8 space-y-12 bg-white shadow-xl rounded-lg">
      {/* Title Slide */}
      <div className="text-center space-y-4 border-b pb-6">
        <h1 className="text-4xl font-bold text-blue-700">HK Inno.N Infusion Solutions</h1>
        <p className="text-lg text-gray-600">Revolutionizing Healthcare Supply with Innovation and Reliability</p>
      </div>

      {/* Overview Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <Globe className="h-6 w-6 text-blue-600" />
          Our Vision
        </h2>
        <p className="text-gray-700">
          At HK Inno.N, we aim to transform the healthcare landscape by offering advanced infusion solutions that meet the demands of a rapidly evolving medical sector. Our products are designed to address both immediate shortages and long-term supply needs.
        </p>
      </section>

      {/* Key Highlights */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <TrendingUp className="h-6 w-6 text-blue-600" />
          Key Highlights
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Advanced Manufacturing</h3>
            <p className="text-gray-700">Producing over 200 million units annually with state-of-the-art facilities.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">FDA-Approved Solutions</h3>
            <p className="text-gray-700">Certified products with dual-language labels ensuring compliance and accessibility.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700 mb-3">Nationwide Reach</h3>
            <p className="text-gray-700">Expedited delivery channels ensuring fast access to healthcare providers across the U.S.</p>
          </div>
        </div>
      </section>

      {/* Product Offering */}
      <section className="bg-blue-50 p-8 rounded-lg space-y-6">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <Package className="h-6 w-6 text-blue-600" />
          Product Offering
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">0.9% Sodium Chloride Injection</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Available in 1000 mL Safe-Flex® Non-PVC bags.</li>
              <li>Meets cGMP and EU GMP quality standards.</li>
              <li>Compatible with existing IV infrastructure for ease of use.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Future Products</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Lactated Ringers and advanced TPN solutions.</li>
              <li>Expanded bag sizes: 250 mL, 500 mL, 2L, and 3L options.</li>
              <li>Specialized formulations for critical care applications.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-blue-800 flex items-center gap-2">
          <ShieldCheck className="h-6 w-6 text-blue-600" />
          Why Choose HK Inno.N?
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Unmatched scalability to meet growing healthcare demands.</li>
          <li>Commitment to sustainability with eco-friendly production processes.</li>
          <li>Strategic partnerships ensuring resilience in supply chains.</li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <div className="text-center mt-8">
        <h3 className="text-lg font-bold text-blue-800">Ready to Transform Healthcare?</h3>
        <p className="text-gray-600 mb-4">Contact us today to explore partnership opportunities and secure your supply of high-quality infusion solutions.</p>
        <button className="px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-md shadow hover:bg-blue-700">
          Get in Touch
        </button>
      </div>
    </div>
  );
};

export default DealPresentation;
