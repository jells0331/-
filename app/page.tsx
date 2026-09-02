'use client';

import { useState } from 'react';
import { BellRing, ChevronRight, CloudRain, Crosshair, House, MapPin, Phone, ShieldAlert, Umbrella, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';

const actions = [
  { icon: House, title: '지하 공간은 피하세요', text: '반지하·지하차도 주변은 침수 위험이 있습니다.' },
  { icon: Umbrella, title: '보행 중이라면', text: '우산보다 안전한 실내로 먼저 이동하세요.' },
  { icon: Phone, title: '위험을 발견했다면', text: '119 또는 안전신문고에 알려주세요.' },
];

export default function Home() {
  const [alertOn, setAlertOn] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  return <main className="min-h-screen bg-[#f2f7ff] text-[#191f28]"><div className="mx-auto min-h-screen max-w-[480px] bg-white shadow-[0_0_48px_rgba(34,114,235,.09)]">
    <header className="flex items-center justify-between px-6 pb-5 pt-7"><div className="flex items-center gap-2.5"><span className="grid size-9 place-items-center rounded-[14px] bg-[#3182f6] text-white"><CloudRain size={20} /></span><span className="text-[18px] font-bold tracking-[-.04em]">비상기상</span></div><button aria-label="알림 설정" onClick={() => setAlertOn(!alertOn)} className={`grid size-10 place-items-center rounded-full transition ${alertOn ? 'bg-[#e8f3ff] text-[#1b64da]' : 'bg-[#f2f4f6] text-[#4e5968]'}`}><BellRing size={19} /></button></header>
    <section className="px-6 pb-5"><button className="flex items-center gap-1 text-[14px] font-medium text-[#4e5968]" onClick={() => setDetailOpen(!detailOpen)}><MapPin size={16} className="text-[#3182f6]" /> 서울시 영등포구 여의동 <ChevronRight size={15} /></button><p className="mt-1.5 text-[13px] text-[#8b95a1]">9월 2일 오후 3:20 기준</p></section>
    <section className="mx-5 overflow-hidden rounded-[24px] bg-[#3182f6] px-6 py-7 text-white"><div className="flex items-start justify-between"><div><p className="text-[15px] font-semibold text-blue-100">현재 우리 동네는</p><h1 className="mt-1 text-[30px] font-bold tracking-[-.06em]">호우 주의 단계예요</h1></div><span className="grid size-12 place-items-center rounded-2xl bg-white/15"><ShieldAlert size={26} /></span></div><div className="mt-7 border-t border-white/25 pt-4"><p className="text-[15px] leading-6 text-blue-50">오늘 밤까지 시간당 최대 30mm의<br/>강한 비가 예상돼요.</p></div></section>
    <section className="px-6 py-7"><div><h2 className="text-[21px] font-bold tracking-[-.05em]">지금 이렇게 해주세요</h2><p className="mt-1 text-[14px] text-[#8b95a1]">위험을 줄이는 가장 쉬운 방법이에요</p></div><div className="mt-4 space-y-3">{actions.map(({ icon: Icon, title, text }) => <article key={title} className="flex items-center gap-4 rounded-[18px] bg-[#f2f7ff] p-4"><span className="grid size-11 shrink-0 place-items-center rounded-[14px] bg-white text-[#3182f6]"><Icon size={21} /></span><div><h3 className="text-[16px] font-bold tracking-[-.035em]">{title}</h3><p className="mt-1 text-[13px] leading-5 text-[#6b7684]">{text}</p></div></article>)}</div></section>
    <section className="mx-6 rounded-[20px] border border-[#e5e8eb] p-5"><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-xl bg-[#fff5e8] text-[#f28b00]"><Waves size={20} /></span><div><h2 className="font-bold tracking-[-.035em]">침수 위험 구간</h2><p className="mt-0.5 text-[13px] text-[#8b95a1]">내 주변 1km 안에 2곳 있어요</p></div></div>{detailOpen && <div className="mt-4 rounded-xl bg-[#f8fafc] p-3 text-[13px] leading-5 text-[#4e5968]">여의나루역 4번 출구 · 국회의사당 지하차도<br/>가까이 가지 말고 우회해 주세요.</div>}<button onClick={() => setDetailOpen(!detailOpen)} className="mt-4 flex w-full items-center justify-center gap-1 text-[14px] font-semibold text-[#1b64da]">지도에서 확인하기 <ChevronRight size={16} /></button></section>
    <div className="px-6 pb-8 pt-6"><Button onClick={() => setAlertOn(!alertOn)} className="h-14 w-full rounded-2xl bg-[#3182f6] text-[16px] font-bold hover:bg-[#2272eb]">{alertOn ? '위험 알림을 받고 있어요' : '내 위치 위험 알림 받기'}<Crosshair size={18} /></Button><p className="mt-3 text-center text-[12px] text-[#8b95a1]">위급한 상황에서는 119로 바로 신고하세요</p></div>
  </div></main>;
}
