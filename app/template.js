/**
 * Route template — re-mounts on every navigation, so each page arrives with a
 * short fade-and-rise instead of an abrupt swap. Pure CSS (see .u-page-in in
 * globals.css), so it adds no JavaScript and is skipped under reduced motion.
 */
export default function Template({ children }) {
  return <div className="u-page-in">{children}</div>;
}
