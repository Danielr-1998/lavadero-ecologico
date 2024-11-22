// src/app/layout.tsx
import './globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head />
      <body>
        {children}
      </body>
    </html>
  );
}
