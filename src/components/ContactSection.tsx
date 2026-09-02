import React, { useState } from 'react';

// Place it here at module scope:
const FORMSPREE_KEY = import.meta.env.VITE_FORMSPREE_KEY || 'default_fallback_key';

export function ContactSection() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Use the fallback-protected key in your fetch request:
    const response = await fetch(`https://formspree.io/f/${FORMSPREE_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ /* form data */ }),
    });
  };

  return (
    <section>
      {/* Your contact form JSX */}
    </section>
  );
}
