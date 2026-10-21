import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';

// Used at build time only: renders the full page to HTML so search engines
// and link previews see real content instead of an empty <div id="root">.
export function render(): string {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
