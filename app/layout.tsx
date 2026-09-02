import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: '비상기상 | 우리 동네 호우 위험 알림', description: '호우 재난 상황에서 내 주변 위험도와 꼭 필요한 행동 요령을 알려드립니다.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="ko"><body>{children}</body></html>; }
