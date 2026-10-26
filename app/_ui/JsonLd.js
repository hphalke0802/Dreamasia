/**
 * Renders structured data as a JSON-LD script tag.
 *
 * Server component — the JSON is serialised into the exported HTML at build
 * time, so crawlers and AI engines see it without executing any JavaScript.
 */

export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      // The payload is our own static data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
