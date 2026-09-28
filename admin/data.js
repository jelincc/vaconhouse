/* VACON house admin · shared data + helpers (예약 관리 / 예약 상세) */
const LOGO = `<svg class="logo-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 584.43 119.25" role="img" aria-label="VACON house"><path fill="currentColor" d="M80.10000000000001 19.549999999999997C80.3 24.64999999999999 79.3 29.749999999999993 77.10000000000001 34.349999999999994L52.8 84.55L31.3 39.849999999999994C28.200000000000003 33.449999999999996 26.3 26.549999999999997 25.6 19.44999999999999H0.09999999999999998C6.7 27.449999999999996 12.3 36.14999999999999 16.8 45.449999999999996L37.9 89.35H55.2L78.8 40.24999999999999C82.5 32.64999999999999 87.3 25.549999999999997 93.0 19.349999999999994H80.10000000000001ZM142.60000000000002 63.449999999999996 121.4 19.549999999999997H104.1C106.9 25.25 106.9 31.849999999999994 104.2 37.55L89.2 68.75C85.5 76.35 80.7 83.45 75.0 89.64999999999999H88.0C87.7 84.55 88.7 79.44999999999999 90.9 74.85L92.4 71.85H129.2C131.6 77.55 133.2 83.55 133.8 89.64999999999999H159.3C152.7 81.64999999999999 147.10000000000002 72.85 142.60000000000002 63.55ZM94.6 67.35 111.0 33.55 127.2 67.35ZM196.4 86.35C179.10000000000002 86.35 170.3 72.14999999999999 167.5 59.05C164.70000000000002 45.949999999999996 166.9 26.14999999999999 182.9 22.549999999999997C197.0 19.349999999999994 213.5 31.449999999999996 209.8 45.05H218.9C223.7 45.05 226.8 40.05 224.9 35.64999999999999C220.0 24.549999999999997 205.20000000000002 17.64999999999999 189.3 17.64999999999999C165.5 17.64999999999999 150.9 33.949999999999996 150.9 54.349999999999994C150.9 74.75 165.3 91.45 189.10000000000002 91.45C206.8 91.45 220.3 82.05 225.20000000000002 68.85C225.20000000000002 68.85 211.8 86.25 196.5 86.25ZM270.7 17.64999999999999C245.4 17.64999999999999 232.0 34.14999999999999 232.0 54.55C232.0 74.94999999999999 245.4 91.45 270.7 91.45C296.0 91.45 309.4 74.94999999999999 309.4 54.55C309.4 34.14999999999999 296.0 17.64999999999999 270.7 17.64999999999999ZM281.8 85.14999999999999C269.1 89.75 255.7 81.05 248.9 62.55C242.1 44.05 246.7 28.849999999999994 259.4 24.25C272.1 19.64999999999999 285.1 27.349999999999994 292.2 46.849999999999994C298.9 65.35 294.3 80.64999999999999 281.6 85.25ZM377.7 19.549999999999997C377.7 19.549999999999997 381.9 24.14999999999999 381.9 35.05V74.14999999999999L342.0 22.549999999999997C340.5 20.64999999999999 338.2 19.549999999999997 335.8 19.549999999999997H316.5C316.5 19.549999999999997 320.7 24.14999999999999 320.7 35.05V74.05C320.7 82.95 318.0 87.64999999999999 316.9 89.14999999999999L316.5 89.64999999999999H329.3L328.9 89.14999999999999C327.8 87.64999999999999 325.1 82.95 325.1 74.05V26.249999999999993L371.8 86.55C373.3 88.45 375.6 89.55 378.0 89.55H386.3V35.05C386.3 24.14999999999999 390.5 19.549999999999997 390.5 19.549999999999997ZM429.66926 89.34992 429.46918 89.60002H441.47398L441.37394 89.49998C441.22388 89.2999 440.92376 88.89974 440.57362 88.24947999999999L440.5236 88.14944C439.97338 86.89894 439.37314 84.89814 439.37314 81.89694V75.19426C439.37314 66.89094 436.12184 60.138239999999996 425.96778 60.138239999999996C421.81612 60.138239999999996 419.76529999999997 62.08901999999999 418.0146 64.59002V56.386739999999996C418.0146 52.88533999999999 415.16346 50.0342 411.66206 50.0342H408.11064C408.11064 50.0342 410.21148 52.335119999999996 410.21148 57.787299999999995V81.84692C410.21148 86.2987 408.86093999999997 88.64963999999999 408.31072 89.39994L408.11064 89.65004H420.11544L420.0154 89.55C419.86534 89.34992 419.56522 88.94976 419.21508 88.2995L419.16506 88.19946C418.61484 86.94896 418.0146 84.94816 418.0146 81.94695999999999V74.84412C418.0146 67.39114 419.91535999999996 62.339119999999994 426.01779999999997 62.339119999999994C430.81972 62.339119999999994 431.62004 67.39114 431.62004 74.84412V81.94695999999999C431.62004 86.39874 430.2695 88.74968 429.71927999999997 89.49998ZM460.63163999999995 60.038199999999996C449.62724 60.038199999999996 444.5252 66.7909 444.5252 75.09421999999999C444.5252 83.39753999999999 449.62724 90.15024 460.63163999999995 90.15024C471.63604 90.15024 476.73807999999997 83.39753999999999 476.73807999999997 75.09421999999999C476.73807999999997 66.7909 471.63604 60.038199999999996 460.63163999999995 60.038199999999996ZM465.0334 87.19906C458.68086 89.49998 454.72927999999996 83.09742 452.87854 77.94536C451.02779999999996 72.79329999999999 449.92735999999996 65.2903 456.2799 62.98938C462.63244 60.68845999999999 466.58401999999995 67.14104 468.43476 72.2931C470.28549999999996 77.44516 471.33592 84.89814 464.98337999999995 87.19906ZM511.35191999999995 81.7969 511.3019 68.44156C511.3019 63.989779999999996 512.65244 61.638839999999995 513.2026599999999 60.88853999999999L513.40274 60.638439999999996H501.39794L501.49798 60.738479999999996C501.64804 60.938559999999995 501.94816 61.338719999999995 502.2983 61.98898L502.34832 62.08901999999999C502.89853999999997 63.33951999999999 503.49878 65.34031999999999 503.49878 68.34152L503.54879999999997 76.74488C503.54879999999997 84.14784 501.69806 87.89934 495.59562 87.89934C490.7937 87.89934 488.99298 84.14784 488.99298 76.74488V68.39153999999999C488.99298 63.93975999999999 490.34351999999996 61.58882 490.89374 60.838519999999995L491.09382 60.58842H479.78929999999997L479.88934 60.68845999999999C480.0394 60.88853999999999 480.33952 61.28869999999999 480.68966 61.938959999999994L480.73967999999996 62.038999999999994C481.2899 63.2895 481.89014 65.2903 481.89014 68.2915V74.99418C481.89014 83.2975 485.44156 90.0502 495.59562 90.0502C497.24627999999996 90.0502 499.39714 89.75008 500.59762 89.24987999999999C504.69926 87.49918 509.35112 87.59922 513.40274 89.39994C513.3027 89.24987999999999 512.85252 88.64963999999999 512.40234 87.49918C511.90214 86.19866 511.40193999999997 84.24788 511.40193999999997 81.69686ZM530.8096999999999 72.04299999999999C528.10862 71.64283999999999 524.7572799999999 70.89254 524.7572799999999 68.79169999999999C524.7572799999999 63.989779999999996 528.0586 62.2891 530.3095 62.2891C532.26028 62.2891 535.76168 63.989779999999996 535.76168 69.69206H540.3135C542.0641999999999 69.69206 543.4147399999999 67.89134 542.7144599999999 66.2907C540.7136599999999 61.838919999999995 534.2610799999999 60.138239999999996 530.2094599999999 60.138239999999996C524.8072999999999 60.338319999999996 517.0041799999999 62.739279999999994 517.0041799999999 68.84172C517.0041799999999 74.69406 522.7064599999999 76.84492 529.8593199999999 77.94536C533.5608 78.49557999999999 536.5119799999999 79.24588 536.5119799999999 81.39674C536.5119799999999 86.44876 532.86052 88.09942 530.35952 88.09942C527.70846 88.09942 524.4071399999999 86.44876 524.4071399999999 81.39674H520.10542C518.15464 81.39674 516.8041 83.5476 517.85452 85.19825999999999C520.00538 88.64963999999999 525.7576799999999 90.25028 530.3095 90.25028C537.2122599999999 90.25028 544.3150999999999 87.64923999999999 544.3150999999999 81.2967C544.3150999999999 74.7941 537.9125399999999 73.09342 530.8096999999999 71.99297999999999ZM566.4739599999999 87.49918C560.3214999999999 87.49918 557.02018 82.047 555.8697199999999 76.64484H575.1274199999999C578.12862 76.64484 580.2794799999999 73.99378 579.52918 71.0426C577.77848 64.23988 571.6260199999999 60.08821999999999 563.77288 60.08821999999999C553.86892 60.08821999999999 547.66644 66.74088 547.66644 75.04419999999999C547.66644 83.34752 553.86892 90.20026 563.77288 90.20026C571.12582 90.20026 577.17824 85.69846 579.22906 80.34631999999999C579.22906 80.34631999999999 574.02698 87.49918 566.4239399999999 87.49918ZM561.12182 62.58922C566.97416 60.98858 571.0257799999999 66.59082 571.9261399999999 72.2931C572.0762 73.2935 571.2758799999999 74.39394 570.22546 74.39394H555.41954C555.0694 69.542 555.9197399999999 63.989779999999996 561.0717999999999 62.58922Z"/></svg>
`;

/* ---------- time ---------- */
const TODAY = new Date(2026, 8, 28);
const WD = ['일','월','화','수','목','금','토'];
const dOf = n => { const d = new Date(TODAY); d.setDate(d.getDate() + n); return d; };
const md = n => { const d = dOf(n); return `${d.getMonth()+1}.${d.getDate()}`; };
const mdw = n => { const d = dOf(n); return `${d.getMonth()+1}.${d.getDate()} (${WD[d.getDay()]})`; };
const offOf = s => Math.round((new Date(+s.slice(0,4), +s.slice(5,7)-1, +s.slice(8,10)) - TODAY) / 864e5);
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const won = n => n.toLocaleString('ko-KR') + '원';
const nowStamp = () => '9.28 ' + new Date().toTimeString().slice(0,5);

/* ---------- icons (20px, stroke) ---------- */
const I = p => `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${p}</svg>`;
const ICON = {
  conflict: I('<rect x="3" y="3.5" width="9" height="9" rx="2"/><rect x="8" y="7.5" width="9" height="9" rx="2"/>'),
  bell:     I('<path d="M6 8.5a4 4 0 0 1 8 0c0 3.8 1.8 5 1.8 5H4.2S6 12.3 6 8.5"/><path d="M8.6 16.2a1.6 1.6 0 0 0 2.8 0"/><path d="M3 3l14 14"/>'),
  cancel:   I('<circle cx="10" cy="10" r="7"/><path d="M7.6 7.6l4.8 4.8M12.4 7.6l-4.8 4.8"/>'),
  calendar: I('<rect x="3" y="4.5" width="14" height="12.5" rx="2.2"/><path d="M3 8.5h14M7 3v3M13 3v3"/>'),
  card:     I('<rect x="2.5" y="5" width="15" height="10.5" rx="2"/><path d="M2.5 8.8h15M6 12.5h3"/>'),
  info:     I('<circle cx="10" cy="10" r="7"/><path d="M10 9v4.2M10 6.6v.1"/>'),
  copy:     I('<rect x="6.5" y="6.5" width="10" height="10.5" rx="2"/><path d="M4 13.5V5.2A2.2 2.2 0 0 1 6.2 3H13"/>'),
  sync:     I('<path d="M16 7.5A6.3 6.3 0 0 0 4.6 6M4 12.5A6.3 6.3 0 0 0 15.4 14"/><path d="M4.3 3v3.4h3.4M15.7 17v-3.4h-3.4"/>'),
  clean:    I('<path d="M11.5 3l-4 8"/><path d="M5 11h7l1.5 6H3.5z"/><path d="M8 14v3M10.5 14v3"/>'),
  new:      I('<path d="M10 3.2l1.9 4.1 4.4.5-3.3 3 .9 4.4L10 13l-3.9 2.2.9-4.4-3.3-3 4.4-.5z"/>'),
  unseen:   I('<path d="M2.8 10S5.5 4.8 10 4.8 17.2 10 17.2 10 14.5 15.2 10 15.2 2.8 10 2.8 10z"/><circle cx="10" cy="10" r="2.3"/>'),
  in:       I('<path d="M11.5 3.5h4v13h-4"/><path d="M3 10h9M9 7l3 3-3 3"/>'),
  out:      I('<path d="M8.5 3.5h-4v13h4"/><path d="M8 10h9M14 7l3 3-3 3"/>'),
  bed:      I('<path d="M2.8 15.5v-9M2.8 12h14.4v3.5M17.2 12V9.8a2 2 0 0 0-2-2H9v4.2"/><circle cx="5.9" cy="9.6" r="1.5"/>'),
  sameday:  I('<circle cx="10" cy="10" r="7"/><path d="M10 6v4l2.6 1.6"/>'),
  check:    I('<circle cx="10" cy="10" r="7.5" fill="currentColor" stroke="none"/><path d="M6.6 10.2l2.2 2.2 4.4-4.6" stroke="#fff" stroke-width="1.9"/>'),
  chev:     I('<path d="M8 5l5 5-5 5"/>'),
  back:     I('<path d="M12 5l-5 5 5 5"/>'),
};

/* ---------- master data ---------- */
const CH = {
  '앱':       {c:'#FF6D12', lb:'앱'},
  '네이버':   {c:'#0DBC7C', lb:'네이버'},
  '에어비앤비':{c:'#E0457B', lb:'에어비앤비'},
  '관리자':   {c:'#768091', lb:'관리자 등록'},
};
const chDot = ch => `<span class="chn"><i style="background:${CH[ch].c}"></i>${CH[ch].lb}</span>`;
const REGIONS = ['가평','양평','홍천','마포'];
const TYPES = ['직영','위탁'];
const VILLAS = [
  {id:'v1', name:'소석원',       region:'가평', type:'직영', cap:6, rate:390000, c:'#E86A33'},
  {id:'v2', name:'캐빈 브리즈 A동', region:'양평', type:'직영', cap:4, rate:190000, c:'#2F80ED'},
  {id:'v3', name:'캐빈 브리즈 B동', region:'양평', type:'직영', cap:4, rate:190000, c:'#27AE60'},
  {id:'v4', name:'캐빈 브리즈 C동', region:'양평', type:'직영', cap:4, rate:190000, c:'#9B51E0'},
  {id:'v5', name:'캐빈 브리즈 D동', region:'양평', type:'직영', cap:4, rate:190000, c:'#E2B000'},
  {id:'v6', name:'그로브',       region:'홍천', type:'위탁', cap:8, rate:450000, c:'#159A9C'},
  {id:'v7', name:'르 아르젠',     region:'마포', type:'위탁', cap:4, rate:260000, c:'#8E6C4E'},
];
const vById = Object.fromEntries(VILLAS.map(v => [v.id, v]));
const vFull = id => `${vById[id].region} ${vById[id].name}`;

/* Mirrors the live table: raw name (channel baked in), account email, raw phone,
   check-in/out, adults/kids/infants, base status, payment, created, note, extra */
const RAW = [
  ['v1','김태리','taeri.k@gmail.com','01023418890','2026-09-04','2026-09-05',2,0,0,'확정','결제완료','2026-08-21 20:14',''],
  ['v3','박준(네이버)',null,'010-3321-7781','2026-09-04','2026-09-05',2,0,0,'확정','채널정산','2026-08-30 09:12',''],
  ['v2','서성인','grunui2@gmail.com','01077470334','2026-09-05','2026-09-06',2,0,0,'확정','결제완료','2026-09-06 11:00',''],
  ['v4','Jang-Sung(에어비앤비)',null,'010-9352-0033','2026-09-05','2026-09-06',2,0,0,'확정','채널정산','2026-09-06 11:00',''],
  ['v5','혜정(에어비앤비)',null,'010-9747-0981','2026-09-05','2026-09-06',3,0,0,'확정','채널정산','2026-09-06 11:00',''],
  ['v3','주현(에어비앤비)',null,'010-3654-8314','2026-09-05','2026-09-06',3,0,0,'확정','채널정산','2026-09-06 11:00',''],
  ['v6','명애',null,'010','2026-09-05','2026-09-06',5,0,0,'확정','결제완료','2026-09-06 11:00',''],
  ['v1','조재영','prinsnim@naver.com','01094238087','2026-09-05','2026-09-06',2,2,0,'확정','결제완료','2026-09-06 11:00',''],
  ['v1','이도현','dohyun.lee@naver.com','01055120931','2026-09-06','2026-09-07',2,0,0,'확정','결제완료','2026-08-28 13:40',''],
  ['v6','최윤아(네이버)',null,'010-4410-2291','2026-09-07','2026-09-09',4,0,0,'확정','채널정산','2026-08-25 22:05',''],
  ['v6','문지후','jihu.m@gmail.com','01088123310','2026-09-10','2026-09-11',3,0,0,'확정','결제완료','2026-09-01 10:22',''],
  ['v2','강하람','haram@kakao.com','01033019923','2026-09-10','2026-09-12',2,0,0,'확정','결제완료','2026-09-02 18:31',''],
  ['v1','정소윤','soyun.j@naver.com','01020034417','2026-09-12','2026-09-13',2,1,0,'확정','결제완료','2026-09-03 08:55',''],
  ['v6','오태경(네이버)',null,'010-6620-1187','2026-09-12','2026-09-13',6,0,0,'확정','채널정산','2026-09-04 12:10',''],
  ['v3','미오(에어비앤비)',null,'010-2281-9934','2026-09-12','2026-09-13',2,0,0,'확정','채널정산','2026-09-05 23:02',''],
  ['v4','한결','hangyeol@gmail.com','01071189920','2026-09-12','2026-09-14',2,0,0,'확정','결제완료','2026-09-01 15:47',''],
  ['v1','윤채원','chaewon.y@naver.com','01046672201','2026-09-13','2026-09-14',2,0,0,'확정','결제완료','2026-09-06 21:19',''],
  ['v7','배서진','seojin.b@gmail.com','01099102283','2026-09-13','2026-09-14',2,0,0,'확정','결제완료','2026-09-07 11:36',''],
  ['v5','노아(에어비앤비)',null,'010-7713-2210','2026-09-14','2026-09-15',2,0,0,'확정','채널정산','2026-09-08 19:44',''],
  ['v6','송예준','yejun.s@naver.com','01012873390','2026-09-18','2026-09-19',4,0,0,'확정','결제완료','2026-09-10 09:31',''],
  ['v7','류다온(네이버)',null,'010-5521-0082','2026-09-18','2026-09-19',2,0,0,'확정','채널정산','2026-09-11 14:20',''],
  ['v1','임도하','doha.lim@gmail.com','01068812290','2026-09-19','2026-09-20',2,1,0,'확정','결제완료','2026-09-09 16:03',''],
  ['v6','권시아','sia.k@naver.com','01030027711','2026-09-19','2026-09-20',5,0,0,'확정','결제완료','2026-09-12 20:41',''],
  ['v7','남궁현','hyun.ng@gmail.com','01077203318','2026-09-19','2026-09-20',2,0,0,'확정','결제완료','2026-09-13 10:05',''],
  ['v2','Emily(에어비앤비)',null,'010-4402-7719','2026-09-19','2026-09-21',2,0,0,'확정','채널정산','2026-09-10 03:22',''],
  ['v7','차은호','eunho.c@naver.com','01056674412','2026-09-20','2026-09-21',2,0,0,'확정','결제완료','2026-09-14 12:48',''],
  ['v1','백지안(네이버)',null,'010-8830-1276','2026-09-20','2026-09-21',3,0,0,'확정','채널정산','2026-09-15 17:33',''],
  ['v6','유건','geon.y@gmail.com','01041185530','2026-09-20','2026-09-21',6,0,1,'확정','결제완료','2026-09-15 19:02',''],
  ['v2','서하윤','hayun.s@kakao.com','01038820017','2026-09-23','2026-09-24',2,0,0,'확정','결제완료','2026-09-18 08:11',''],
  ['v3','Lucas(에어비앤비)',null,'010-6612-3094','2026-09-23','2026-09-24',2,0,0,'확정','채널정산','2026-09-17 22:40',''],
  ['v1','신유찬','yuchan@naver.com','01029981134','2026-09-24','2026-09-25',2,0,0,'확정','결제완료','2026-09-19 14:27',''],
  ['v6','김나래(네이버)',null,'010-9031-5528','2026-09-24','2026-09-25',4,0,0,'확정','채널정산','2026-09-20 09:50',''],
  ['v4','진서우','seowoo.j@gmail.com','01077018842','2026-09-24','2026-09-25',2,0,0,'확정','결제완료','2026-09-21 21:13',''],
  ['v1','허준서','junseo.h@naver.com','01050083319','2026-09-25','2026-09-26',2,2,0,'확정','결제완료','2026-09-20 18:05','바비큐 세트'],
  ['v2','하은(에어비앤비)',null,'010-2239-6671','2026-09-25','2026-09-26',2,0,0,'확정','채널정산','2026-09-21 07:48',''],
  ['v5','도경민','kyungmin.d@gmail.com','01011927730','2026-09-25','2026-09-26',3,0,0,'확정','결제완료','2026-09-22 12:30',''],
  ['v3','양병은(네이버)',null,'010-8567-6523','2026-09-26','2026-09-27',2,0,0,'확정','채널정산','2026-09-27 11:00',''],
  ['v4','지영(에어비앤비)',null,'010-9962-9841','2026-09-26','2026-09-27',2,0,0,'확정','채널정산','2026-09-27 11:00',''],
  ['v5','연수빈','subin.y@naver.com','01047716602','2026-09-26','2026-09-27',2,0,0,'확정','결제완료','2026-09-23 20:36',''],
  ['v1','정이안','ian.j@gmail.com','01063320048','2026-09-26','2026-09-27',4,0,0,'확정','결제완료','2026-09-24 11:52',''],
  ['v6','마동하','dongha.m@naver.com','01024408816','2026-09-26','2026-09-27',6,0,0,'확정','결제완료','2026-09-22 16:18',''],
  ['v2','민지(에어비앤비)',null,'010-9977-4401','2026-09-27','2026-09-28',2,0,0,'확정','채널정산','2026-09-27 15:00',''],
  ['v3','임미현','immh89@naver.com','01095696196','2026-09-27','2026-09-28',2,0,0,'확정','결제완료','2026-09-27 15:00','',{memo:'재방문 고객. 퇴실 시 온수 보일러 점검 요청.'}],
  ['v6','손지인','thswldls8585@naver.com','01091696585','2026-09-27','2026-09-28',2,0,0,'확정','결제완료','2026-09-27 15:00','대형견 1마리',{pet:true}],
  ['v7','정다은','daeun.j@gmail.com','01082204417','2026-09-29','2026-09-30',2,0,0,'확정','결제완료','2026-09-19 09:40','',{notify:true, clean:true}],
  ['v6','서준(네이버)',null,'010-4471-2093','2026-10-01','2026-10-03',4,0,0,'확정','채널정산','2026-09-27 22:30',''],
  ['v5','박지성',null,'010-3302-8817','2026-10-01','2026-10-02',3,0,0,'확정','결제대기','2026-09-26 14:05','전화 예약 · 무통장 입금 대기'],
  ['v1','조석현',null,'010-9218-1533','2026-10-02','2026-10-03',2,0,0,'확정','결제완료','2026-09-27 19:05','전화 예약',{conflict:true}],
  ['v1','태오(에어비앤비)',null,'010-5580-2204','2026-10-02','2026-10-04',3,0,0,'확정','채널정산','2026-09-28 06:51','',{conflict:true}],
  ['v3','이서연','seoyeon.l@naver.com','01073310028','2026-10-03','2026-10-04',2,1,0,'확정','결제완료','2026-09-24 19:22','소형견 1마리',{pet:true}],
  ['v4','하윤(에어비앤비)',null,'010','2026-10-03','2026-10-05',2,0,0,'확정','채널정산','2026-09-28 07:12',''],
  ['v2','김원기','wonki33@naver.com','01064134253','2026-10-04','2026-10-05',2,1,0,'취소','환불완료','2026-09-28 09:53','',{dup:true}],
  ['v2','김원기','wonki33@naver.com','01064134253','2026-10-04','2026-10-05',2,1,0,'확정','결제완료','2026-09-28 09:57','',{dup:true}],
  ['v7','오세훈','sehun.o@gmail.com','01039926650','2026-10-05','2026-10-06',2,0,0,'변경요청','결제완료','2026-09-15 13:08','10.6 – 10.7로 일정 변경 요청',{reqAt:'어제 21:15'}],
  ['v6','최하은(네이버)',null,'010-2208-4419','2026-10-07','2026-10-09',5,0,0,'확정','채널정산','2026-09-23 10:44',''],
  ['v3','한지민','jimin.han@kakao.com','01044087721','2026-10-09','2026-10-11',2,0,0,'취소요청','결제완료','2026-09-20 11:16','',{reqAt:'오늘 08:41'}],
  ['v1','문가을','gaeul.m@naver.com','01028841103','2026-10-10','2026-10-11',2,2,0,'확정','결제완료','2026-09-25 15:39','바비큐 세트'],
  ['v5','Olivia(에어비앤비)',null,'010-6614-2210','2026-10-10','2026-10-12',2,0,0,'확정','채널정산','2026-09-26 02:17','',{sync:true, unseen:true}],
  ['v6','윤두현','yoonwt@naver.com','01083680500','2026-11-06','2026-11-07',4,0,0,'확정','결제완료','2026-09-27 18:48',''],
  ['v7','진영호','wlsdudghzz@naver.com','01073075930','2026-11-10','2026-11-12',2,0,0,'취소','환불완료','2026-09-27 13:36',''],
  // (주)노을랩스 기업 숙박권 예약 (기업 관리자 · 직원 앱과 공유)
  ['v4','오시우','siwoo.oh@noeul.io','01055219083','2026-09-30','2026-10-02',2,0,0,'확정','기업숙박권','2026-09-18 10:12','',{corp:true}],
  ['v7','이서윤','seoyun.lee@noeul.io','01044021187','2026-10-17','2026-10-18',2,0,0,'확정','기업숙박권','2026-09-21 20:40','',{corp:true}],
  ['v3','류건우','gunwoo.ryu@noeul.io','01077103321','2026-10-24','2026-10-26',2,1,0,'확정','기업숙박권','2026-09-25 09:15','',{corp:true}],
  ['v2','한도윤','doyun.han@noeul.io','01022557784','2026-11-06','2026-11-08',3,0,0,'확정','기업숙박권','2026-09-24 12:02','',{corp:true}],
  ['v5','김도하','doha.kim@noeul.io','01023814410','2026-09-19','2026-09-21',2,0,0,'확정','기업숙박권','2026-09-02 14:30','',{corp:true}],
  ['v7','임태오','taeo.lim@noeul.io','01073496605','2026-09-15','2026-09-17',2,0,0,'확정','기업숙박권','2026-09-03 18:22','',{corp:true}],
  ['v1','정하린','harin.jung@noeul.io','01030195562','2026-08-22','2026-08-24',4,0,0,'확정','기업숙박권','2026-08-01 11:00','',{corp:true}],
  ['v3','윤재원','jaewon.yoon@noeul.io','01044189920','2026-07-25','2026-07-27',2,0,0,'확정','기업숙박권','2026-07-10 09:00','',{corp:true}],
  ['v6','오시우','siwoo.oh@noeul.io','01055219083','2026-06-13','2026-06-15',5,0,0,'확정','기업숙박권','2026-05-28 13:13','',{corp:true}],
  ['v2','이서윤','seoyun.lee@noeul.io','01044021187','2026-05-02','2026-05-04',2,0,0,'확정','기업숙박권','2026-04-12 21:45','',{corp:true}],
  ['v4','강민지','minji.kang@noeul.io','01081204476','2026-09-19','2026-09-21',2,0,0,'취소','환불완료','2026-09-01 08:30','권한 삭제 전 본인 취소',{corp:true}],
  ['v1','한도윤','doyun.han@noeul.io','01022557784','2026-08-08','2026-08-09',2,0,0,'취소','환불완료','2026-07-20 19:05','',{corp:true}],
];

const hex = i => { let x = (i + 7) * 2654435761 >>> 0, s = ''; for (let k = 0; k < 12; k++){ s += '0123456789ABCDEF'[(x >>> ((k * 3) % 29)) & 15]; x = (x * 1103515245 + 12345) >>> 0; } return s; };
const fmtPhone = p => { const d = (p||'').replace(/\D/g,''); return d.length === 11 ? `${d.slice(0,3)}-${d.slice(3,7)}-${d.slice(7)}` : d.length === 10 ? `${d.slice(0,3)}-${d.slice(3,6)}-${d.slice(6)}` : d; };
const phoneOk = r => r.phoneRaw.replace(/\D/g,'').length >= 10;

function build(a, i){
  const [villa, raw, email, phone, ci, co, adults, kids, infants, base, pay, created, note, ex = {}] = a;
  const m = raw.match(/^(.*)\((에어비앤비|네이버)\)$/);
  const ch = m ? m[2] : email ? '앱' : '관리자';
  const r = { idx:i, id:hex(i), villa, raw, name: m ? m[1] : raw, ch, email, phoneRaw:phone,
    in:offOf(ci), out:offOf(co), adults, kids, infants, base, pay, created, note, pet:!!ex.pet, reqAt:ex.reqAt || '',
    flags:[], memos: ex.memo ? [{t:ex.memo, m:'jelin · 9.27 16:02'}] : [] };
  ['conflict','notify','dup','sync','clean'].forEach(f => ex[f] && r.flags.push(f));
  if (created === `${co} 11:00` || created === `${ci} 15:00`) r.flags.push('syncdate');
  r.isNew = created >= '2026-09-27 18:00' && created <= '2026-09-28 10:24' && base !== '취소';
  r.seen = !(r.isNew || ex.unseen);
  r.history = [{t:`예약 접수 · ${CH[ch].lb}`, m:`${created.slice(5).replace('-','.')} · ${ch === '앱' ? '고객' : ch === '관리자' ? '운영자' : '채널 동기화'}`}];
  if (base === '취소') r.history.unshift({t:'예약 취소 · 환불 완료', m:`${created.slice(5,10).replace('-','.')} · 고객`});
  if (base === '취소요청') r.history.unshift({t:'고객 취소 요청', m:`${r.reqAt} · 고객(앱)`, new:true});
  if (base === '변경요청') r.history.unshift({t:`일정 변경 요청 · ${note}`, m:`${r.reqAt} · 고객(앱)`, new:true});
  r.notices = [{t:'예약 확정 알림톡', m:created.slice(5,16).replace('-','.'), ok:true}];
  if (r.in >= 0 && r.in <= 1) r.notices.push({t:'입실 안내 알림톡', m:`${md(r.in - 1)} 10:00`, ok:!ex.notify});
  r.corp = !!ex.corp;
  return r;
}
const R = RAW.map(build);
/* bookings made in the demo (e.g. 직원 앱) */
const EXTRA = 'vh-res-extra-v1';
try { JSON.parse(localStorage.getItem(EXTRA) || '[]').forEach(a => R.push(build(a, R.length))); } catch(e){}
function addBooking(a){ const r = build(a, R.length); R.push(r); try { const L = JSON.parse(localStorage.getItem(EXTRA) || '[]'); L.push(a); localStorage.setItem(EXTRA, JSON.stringify(L)); } catch(e){} return r; }

/* demo state survives page changes (예약 관리 ↔ 예약 상세) */
const STORE = 'vh-res-state-v4';
const KEEP = ['villa','base','pay','seen','flags','memos','history','notices','in','out','phoneRaw','note','adults','kids','infants','pet'];
try { const p = JSON.parse(localStorage.getItem(STORE) || '{}'); Object.entries(p).forEach(([i, o]) => Object.assign(R[+i], o)); } catch(e){}
function save(r){ try { const p = JSON.parse(localStorage.getItem(STORE) || '{}'); p[r.idx] = Object.fromEntries(KEEP.map(k => [k, r[k]])); localStorage.setItem(STORE, JSON.stringify(p)); } catch(e){} }
function resetDemo(){ try { Object.keys(localStorage).filter(k => /^vh-(res-state|res-extra|corp)/.test(k)).forEach(k => localStorage.removeItem(k)); } catch(e){} }
/* another tab changed the demo data → reload so every screen agrees */
addEventListener('storage', e => { if (e.key && /^vh-(res-state|res-extra|corp)/.test(e.key)) location.reload(); });
function log(r, t){ r.history.unshift({t, m:`${nowStamp()} · jelin`, new:true}); }

/* ---------- status & issues ---------- */
const ACTIVE = r => r.base !== '취소';
function st(r){
  if (r.base === '취소') return '예약 취소';
  if (r.base === '노쇼') return '노쇼';
  if (r.base === '취소요청') return '취소 요청';
  if (r.base === '변경요청') return '변경 요청';
  if (r.base === '이용완료' || r.out < 0) return '이용 완료';
  if (r.in <= 0) return '이용 중';
  return '예약 확정';
}
/* 정상 상태는 텍스트, 사람이 봐야 하는 상태만 라벨 */
const ST_DOT = {'예약 확정':'#0DBC7C','이용 중':'#1A1A1E','이용 완료':'#D5D8DC','예약 취소':'#D5D8DC','노쇼':'#949BA8'};
function stHTML(r){
  const s = st(r);
  if (s === '취소 요청') return BD('취소 요청','red');
  if (s === '변경 요청') return BD('변경 요청','orange');
  if (s === '노쇼') return BD('노쇼','grey');
  return `<span class="stt ${s==='이용 완료'||s==='예약 취소'?'mute':''}"><i style="background:${ST_DOT[s]}"></i>${s}${s==='이용 중' && r.out===0 ? ' · 오늘 퇴실' : ''}</span>`;
}
const PAY_LB = {'기업숙박권':'기업 숙박권','결제완료':'결제 완료','채널정산':'채널 정산','결제대기':'결제 대기','환불대기':'환불 대기','환불완료':'환불 완료'};
const payHTML = r => r.pay === '결제대기' ? BD('결제 대기','orange') : r.pay === '환불대기' ? BD('환불 대기','red') : `<span class="mut">${PAY_LB[r.pay]}</span>`;
const BD = (t, c, x = '') => `<span class="bd ${c} ${x}">${t}</span>`;

/* one vocabulary for "needs a human": used by dashboard, board labels, list, drawer, detail */
const ISSUE = {
  conflict: {lb:'예약 충돌',    c:'red',    ic:'conflict', sev:9},
  notify:   {lb:'알림 발송 실패', c:'red',  ic:'bell',     sev:8},
  cancel:   {lb:'취소 요청',    c:'red',    ic:'cancel',   sev:7},
  change:   {lb:'변경 요청',    c:'orange', ic:'calendar', sev:6},
  pay:      {lb:'결제 미완료',   c:'orange', ic:'card',     sev:5},
  missing:  {lb:'정보 누락',    c:'orange', ic:'info',     sev:5},
  dup:      {lb:'중복 가능성',   c:'orange', ic:'copy',     sev:4},
  sync:     {lb:'연동 오류',    c:'orange', ic:'sync',     sev:4},
  clean:    {lb:'객실 준비 미확인', c:'orange', ic:'clean', sev:4},
  unseen:   {lb:'미확인',       c:'orange', ic:'unseen',   sev:3},
  syncdate: {lb:'신청일 이상',   c:'grey',   ic:'sync',     sev:1},
};
function issues(r){
  if (window.CASE_ALLCLEAR) return [];
  const L = [];
  const live = ACTIVE(r) && st(r) !== '이용 완료';
  if (live && r.flags.includes('conflict')) L.push('conflict');
  if (live && r.flags.includes('notify')) L.push('notify');
  if (r.base === '취소요청') L.push('cancel');
  if (r.base === '변경요청') L.push('change');
  if (live && r.pay === '결제대기') L.push('pay');
  if (live && !phoneOk(r)) L.push('missing');
  if (r.flags.includes('dup') && ACTIVE(r)) L.push('dup');
  if (live && r.flags.includes('sync')) L.push('sync');
  if (live && r.flags.includes('clean')) L.push('clean');
  if (live && !r.seen) L.push('unseen');
  if (r.flags.includes('syncdate')) L.push('syncdate');
  return L;
}
function issueDesc(r, k){
  const other = f => R.find(x => x !== r && x.flags.includes(f) && x.villa === r.villa);
  switch(k){
    case 'conflict': { const o = other('conflict'); return o ? `${md(Math.max(r.in, o.in))} ${o.name}(${CH[o.ch].lb}) 예약과 겹쳐요. 관리자 등록 건이 에어비앤비 달력에서 막히지 않았어요.` : '같은 숙소 예약과 겹쳐요.'; }
    case 'notify': return '입실 안내 알림톡이 발송되지 않았어요. 재발송하거나 전화로 안내해 주세요.';
    case 'cancel': return `${r.reqAt} 고객이 취소를 요청했어요. 입실 ${r.in}일 전이라 ${r.in >= 7 ? '전액' : '50%'} 환불 대상이에요.`;
    case 'change': return `${r.note}. 해당 날짜는 공실이에요.`;
    case 'pay': return r.note || '결제가 끝나지 않았어요.';
    case 'missing': return `연락처가 '${esc(r.phoneRaw)}'로만 저장돼 알림을 보낼 수 없어요. ${r.ch === '에어비앤비' || r.ch === '네이버' ? r.ch + ' 예약 상세에서 확인해 주세요.' : ''}`;
    case 'dup': { const o = R.find(x => x !== r && x.flags.includes('dup')); return `같은 예약자·같은 일정 예약이 ${o.created.slice(11)}에 ${o.base === '취소' ? '취소' : '접수'}됐어요. 이중 결제나 환불 누락이 없는지 확인해 주세요.`; }
    case 'sync': return '에어비앤비 쪽 변경 내역이 10:20 동기화에서 반영되지 않았어요.';
    case 'clean': return '내일 입실인데 청소 완료 확인이 아직 없어요.';
    case 'unseen': return '운영자가 아직 확인하지 않은 예약이에요.';
    case 'syncdate': return `신청일이 ${r.created}로 ${r.created.endsWith('11:00') ? '체크아웃' : '체크인'} 시각과 같아요. 채널 동기화가 값을 덮어쓴 것으로 보여요.`;
  }
  return '';
}

/* ---------- money ---------- */
function price(r){
  const v = vById[r.villa];
  let room = 0;
  for (let o = r.in; o < r.out; o++){ const d = dOf(o).getDay(); room += (d === 5 || d === 6) ? Math.round(v.rate * 1.3 / 10000) * 10000 : v.rate; }
  const opts = [];
  if ((r.note || '').includes('바비큐')) opts.push(['바비큐 세트', 45000]);
  if (r.pet) opts.push([`반려견 동반 ${r.out - r.in}박`, 30000 * (r.out - r.in)]);
  const sub = room + opts.reduce((a, o) => a + o[1], 0);
  const fee = r.ch === '에어비앤비' ? Math.round(sub * .15 / 100) * 100 : r.ch === '네이버' ? Math.round(sub * .05 / 100) * 100 : 0;
  if (r.pay === '기업숙박권') return {room, opts, sub, fee:0, net:sub, method:`(주)노을랩스 기업 숙박권 ${r.out - r.in}박 차감`};
  const method = {'앱':'신용카드 · 일시불','네이버':'네이버페이','에어비앤비':'에어비앤비 결제','관리자':'무통장 입금'}[r.ch];
  return {room, opts, sub, fee, net: sub - fee, method};
}

/* ---------- chrome ---------- */
const NAV = [
  ['핵심 업무', ['회원 관리','회원 상태','숙소 관리','숙소 운영','예약 관리','예약 운영']],
  ['정책/정산', ['멤버십 관리','결제 내역','하이시즌','통계·매출']],
  ['콘텐츠/기록', ['CMS 관리','숙박권','예약 알림 설정','알림톡 기록']],
];
function mountSide(){
  setTimeout(mountAlert, 400);
  const n = R.filter(r => issues(r).some(k => ISSUE[k].c !== 'grey')).length;
  document.querySelector('.side').innerHTML = `
    <div class="brand"><a href="./">${LOGO}</a><small>ADMIN</small></div>
    <nav class="nav">${NAV.map(([g, items]) => `<div class="nav-label">${g}</div>` + items.map(x => x === '예약 관리'
      ? `<a href="./" class="${/stats/.test(location.pathname) ? '' : 'on'}">예약 관리 <span class="cnt">${n}</span></a>` : x === '통계·매출' ? `<a href="stats" class="${/stats/.test(location.pathname) ? 'on' : ''}">통계·매출</a>` : `<a href="#" data-soon>${x}</a>`).join('')).join('')}</nav>
    <div class="userbox"><div><b id="who">jelin</b><small>운영 관리자</small></div><a href="../" id="logout">로그아웃</a></div>`;
  try { const u = localStorage.getItem('vh-admin-session'); if (u) document.getElementById('who').textContent = u; } catch(e){}
  document.getElementById('logout').onclick = () => { try { localStorage.removeItem('vh-admin-session'); } catch(e){} resetDemo(); };
  document.querySelectorAll('[data-soon]').forEach(a => a.onclick = e => { e.preventDefault(); toast(`${a.textContent} 화면은 준비 중이에요`, false); });
}
function toast(msg, ok = true){
  document.querySelectorAll('.toast').forEach(t => t.remove());
  const t = document.createElement('div'); t.className = 'toast'; t.innerHTML = (ok ? ICON.check : '') + `<span>${msg}</span>`;
  document.body.appendChild(t); setTimeout(() => t.remove(), 2400);
}

/* ---------- actions (shared by drawer and detail) ---------- */
const ACT = {
  cancelOk:{lb:'취소 승인', cls:'danger', run:r => { r.base = '취소'; r.pay = '환불대기'; log(r, '취소 승인 · 환불 요청'); return '취소를 승인하고 환불을 요청했어요'; }},
  cancelNo:{lb:'거절', run:r => { r.base = '확정'; log(r, '취소 요청 거절'); return '취소 요청을 거절했어요'; }},
  changeOk:{lb:'변경 승인', run:r => { r.in += 1; r.out += 1; r.base = '확정'; r.note = ''; log(r, `일정 변경 승인 · ${md(r.in)} – ${md(r.out)}`); return '일정을 바꾸고 고객에게 알렸어요'; }},
  changeNo:{lb:'거절', run:r => { r.base = '확정'; log(r, '일정 변경 거절'); return '변경 요청을 거절했어요'; }},
  resend:  {lb:'알림톡 재발송', run:r => { r.flags = r.flags.filter(f => f !== 'notify'); r.notices.push({t:'입실 안내 알림톡 · 재발송', m:nowStamp(), ok:true}); log(r, '입실 안내 알림톡 재발송'); return '알림톡을 다시 보냈어요'; }},
  seen:    {lb:'확인했어요', run:r => { r.seen = true; log(r, '예약 확인'); return '확인 완료로 표시했어요'; }},
  paid:    {lb:'입금 확인', run:r => { r.pay = '결제완료'; log(r, '입금 확인'); return '입금을 확인했어요'; }},
  clean:   {lb:'청소 완료 확인', run:r => { r.flags = r.flags.filter(f => f !== 'clean'); log(r, '객실 준비 완료 확인'); return '객실 준비 완료로 표시했어요'; }},
  checkout:{lb:'퇴실 처리', run:r => { r.base = '이용완료'; log(r, '퇴실 처리'); return `${r.name}님 퇴실 처리했어요`; }},
  resync:  {lb:'다시 동기화', run:r => { r.flags = r.flags.filter(f => f !== 'sync'); log(r, '에어비앤비 재동기화'); return '에어비앤비와 다시 동기화했어요'; }},
  conflictOk:{lb:'충돌 해결됨으로 표시', run:r => { R.filter(x => x.flags.includes('conflict') && x.villa === r.villa).forEach(x => { x.flags = x.flags.filter(f => f !== 'conflict'); if (x !== r){ log(x, '예약 충돌 해결'); save(x); } }); log(r, '예약 충돌 해결 · 겹친 예약과 일정 조정'); return '충돌을 해결한 것으로 표시했어요'; }},
  dupOk:   {lb:'정상 예약으로 확인', run:r => { R.filter(x => x.flags.includes('dup')).forEach(x => { x.flags = x.flags.filter(f => f !== 'dup'); save(x); }); log(r, '중복 아님 확인 · 이전 건 환불 완료 확인'); return '중복이 아닌 것으로 확인했어요'; }},
};
/* the one next step for a reservation: [secondary, primary] */
function nextStep(r){
  const is = issues(r);
  if (is.includes('conflict')) return [null,'conflictOk'];
  if (is.includes('cancel')) return ['cancelNo','cancelOk'];
  if (is.includes('change')) return ['changeNo','changeOk'];
  if (is.includes('notify')) return [null,'resend'];
  if (is.includes('sync')) return [null,'resync'];
  if (is.includes('pay')) return [null,'paid'];
  if (is.includes('clean')) return [null,'clean'];
  if (is.includes('dup')) return [null,'dupOk'];
  if (st(r) === '이용 중' && r.out === 0) return [null,'checkout'];
  if (is.includes('unseen')) return [null,'seen'];
  return [null,null];
}
function runAct(r, k){ const msg = ACT[k].run(r); save(r); return msg; }


/* ---------- 판매 막기 · 가용성 · 환불 · 변경 ---------- */
const BLKEY = 'vh-res-blocks-v1';
let BLOCKS = [{villa:'v6', in:14, out:16, reason:'보수 공사', note:'보일러 교체', by:'jelin · 9.20'}];
try { const b = JSON.parse(localStorage.getItem(BLKEY) || 'null'); if (b) BLOCKS = b; } catch(e){}
const saveBlocks = () => { try { localStorage.setItem(BLKEY, JSON.stringify(BLOCKS)); } catch(e){} };
const isoOf = o => { const d = dOf(o); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
/* what stands in the way of [a, b) at a villa */
function clashes(villa, a, b, except){
  return {
    res: R.filter(r => r !== except && r.villa === villa && r.base !== '취소' && r.in < b && a < r.out),
    blk: BLOCKS.filter(x => x.villa === villa && x.in < b && a < x.out),
  };
}
const freeFor = (villa, a, b, except) => { const c = clashes(villa, a, b, except); return !c.res.length && !c.blk.length; };
/* once a move clears an overlap, drop the stale conflict flags */
function refreshConflicts(){
  R.filter(r => r.flags.includes('conflict')).forEach(r => {
    if (!clashes(r.villa, r.in, r.out, r).res.length){ r.flags = r.flags.filter(f => f !== 'conflict'); save(r); }
  });
}
const POLICY = '체크인 7일 전까지 100% · 3일 전까지 50% · 이후 환불 없음';
function refundOf(r){
  const p = price(r).sub, d = r.in;
  const rate = d >= 7 ? 1 : d >= 3 ? .5 : 0;
  return {rate, amount: Math.round(p * rate / 100) * 100, paid: p, days: d};
}
function createAdmin(o){
  const a = [o.villa, o.name, null, o.phone.replace(/\D/g, ''), isoOf(o.a), isoOf(o.b), o.adults, o.kids, 0, '확정', o.pay, `2026-09-28 ${new Date().toTimeString().slice(0,5)}`, [o.route, o.note].filter(Boolean).join(' · ')];
  const r = addBooking(a);
  r.seen = true; r.history = [{t:`예약 등록 · 관리자 (${o.route})`, m:`${nowStamp()} · jelin`, new:true}];
  r.notices = o.notify ? [{t:'예약 확정 알림톡', m:nowStamp(), ok:true}] : [];
  save(r); return r;
}


/* ---------- 상단 토스트: 실패·긴급 건 안내 ---------- */
function alertKinds(){
  const K = [['conflict','예약 충돌'], ['notify','알림 발송 실패'], ['cancel','신규 취소 요청'], ['sync','채널 연동 오류']];
  return K.map(([k, lb]) => ({k, lb, L: R.filter(r => issues(r).includes(k))})).filter(x => x.L.length);
}
function alertMsg(A){
  if (A.length === 1) return `${A[0].lb} 건이 있어요`;
  if (A.length === 2) return `${A[0].lb} 및 ${A[1].lb} 건이 있어요`;
  return `${A[0].lb} 외 ${A.length - 1}건의 확인 필요 사항이 있어요`;
}
/* 한 건이면 그 예약으로, 한 종류 여러 건이면 조건 목록으로, 여러 종류면 예약 관리로 */
function alertTarget(A){
  if (A.length === 1 && (A[0].L.length === 1 || A[0].k === 'conflict')) return `reservation?id=${A[0].L[0].idx}`;
  if (A.length === 1) return `./#list&k=${A[0].k}`;
  return './#today';
}
function mountAlert(){
  if (window.__alertTried || !/\/admin\//.test(location.pathname) || window.CASE_ALLCLEAR) return;
  window.__alertTried = true;
  /* 오늘 할 일 탭은 같은 내용을 이미 크게 보여주니 토스트를 띄우지 않아요 */
  if (document.querySelector('#tabs button.on')?.dataset.t === 'today') return;
  const A = alertKinds(); if (!A.length) return;
  const sig = A.map(a => a.k + a.L.map(r => r.idx).join('.')).join('|');
  try { if (sessionStorage.getItem('vh-alert') === sig) return; sessionStorage.setItem('vh-alert', sig); } catch(e){}
  const red = A.some(a => a.k !== 'sync');
  const el = document.createElement('div'); el.className = 'topalert'; el.setAttribute('role', 'alert');
  el.innerHTML = `<button class="ta-go"><span class="ta-dot ${red ? '' : 'o'}"></span><span class="ta-t">${alertMsg(A)}</span><span class="ta-l">확인하기 ${ICON.chev}</span></button><button class="ta-x" aria-label="닫기">✕</button>`;
  document.body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('in'));
  const bye = () => { el.classList.remove('in'); setTimeout(() => el.remove(), 250); };
  el.querySelector('.ta-x').onclick = bye;
  el.querySelector('.ta-go').onclick = () => {
    const url = new URL(alertTarget(A), location.href);
    bye();
    if (url.pathname === location.pathname && url.search === location.search){ location.hash = url.hash; location.reload(); }
    else location.href = url.href;
  };
  setTimeout(bye, 12000);
}
