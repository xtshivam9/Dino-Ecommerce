export default function PrintLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white">{children}</div>
      </body>
    </html>
  );
}
