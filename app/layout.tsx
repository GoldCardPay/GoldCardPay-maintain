import './globals.css';

export const metadata = {
  title: 'GoldCard - 系统维护中',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
