import React from "react";

export default function SecurityStrip() {
  return (
    <section className="w-full py-8 px-4 bg-[#f8fafc]">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-[#23282b]">
        <div className="rounded-xl bg-white border border-gray-200 p-4">SSL Encryption</div>
        <div className="rounded-xl bg-white border border-gray-200 p-4">Role-based Access</div>
        <div className="rounded-xl bg-white border border-gray-200 p-4">Audit Logs</div>
        <div className="rounded-xl bg-white border border-gray-200 p-4">Backups & Redundancy</div>
      </div>
    </section>
  );
}


