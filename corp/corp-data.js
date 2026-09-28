/* (주)노을랩스 기업 숙박권 · 기업 관리자와 직원 앱이 함께 쓰는 데이터 (requires ../admin/data.js) */
const COMPANY = {name:'(주)노을랩스', domain:'noeul.io', contract:60, until:'2027년 2월 28일', admin:'인사팀 김하늘'};
const EMP_BASE = [
  {name:'김도하', phone:'010-2381-4410', email:'doha.kim@noeul.io', joined:true, perm:true, since:'3.4'},
  {name:'오시우', phone:'010-5521-9083', email:'siwoo.oh@noeul.io', joined:true, perm:true, since:'3.4'},
  {name:'류건우', phone:'010-7710-3321', email:'gunwoo.ryu@noeul.io', joined:true, perm:true, since:'3.11'},
  {name:'이서윤', phone:'010-4402-1187', email:'seoyun.lee@noeul.io', joined:true, perm:true, since:'4.2'},
  {name:'박지훈', phone:'010-9934-2210', email:'jihoon.park@noeul.io', joined:true, perm:false, since:''},
  {name:'정하린', phone:'010-3019-5562', email:'harin.jung@noeul.io', joined:true, perm:true, since:'5.19'},
  {name:'최유진', phone:'010-6674-0931', email:'yujin.choi@noeul.io', joined:false, perm:false, since:''},
  {name:'한도윤', phone:'010-2255-7784', email:'doyun.han@noeul.io', joined:true, perm:true, since:'6.1'},
  {name:'강민지', phone:'010-8120-4476', email:'minji.kang@noeul.io', joined:true, perm:false, since:'', off:'8.30'},
  {name:'윤재원', phone:'010-4418-9920', email:'jaewon.yoon@noeul.io', joined:true, perm:true, since:'7.14'},
  {name:'서예나', phone:'010-5063-1128', email:'yena.seo@noeul.io', joined:false, perm:false, since:''},
  {name:'임태오', phone:'010-7349-6605', email:'taeo.lim@noeul.io', joined:true, perm:true, since:'9.1'},
  {name:'백하율', phone:'010-2290-4471', email:'hayul.baek@noeul.io', joined:true, perm:false, since:'', req:'어제 21:10'},
];
const APP_USERS = [
  {name:'문가온', phone:'010-3381-2204', email:'gaon.moon@gmail.com'},
  {name:'문서진', phone:'010-6612-0917', email:'seojin.m@naver.com'},
  {name:'신우석', phone:'010-9102-3358', email:'wooseok.shin@noeul.io'},
  {name:'김도하', phone:'010-2381-4410', email:'doha.kim@noeul.io'},
];
const EMPKEY = 'vh-corp-emp-v2';
let EMP = EMP_BASE.map(e => ({...e}));
try { const s = JSON.parse(localStorage.getItem(EMPKEY) || 'null'); if (s) EMP = s; } catch(e){}
const saveEmp = () => { try { localStorage.setItem(EMPKEY, JSON.stringify(EMP)); } catch(e){} };
const empOf = email => EMP.find(e => e.email === email);
/* 직원 앱 가입 → 소속 확인 요청(req) → 기업 관리자 확인 → 이용 권한(perm) → 앱에서 예약 */
const permState = e => !e.joined ? '미가입' : e.req ? '확인 대기' : e.perm ? '이용 가능' : '권한 없음';
function requestAffil(u){
  let e = empOf(u.email);
  const at = '오늘 ' + new Date().toTimeString().slice(0,5);
  if (e){ e.joined = true; e.req = at; } else { e = {name:u.name, phone:u.phone, email:u.email, joined:true, perm:false, since:'', req:at}; EMP.unshift(e); }
  saveEmp(); return e;
}

/* 기업 예약은 관리자 예약 데이터(R) 중 기업 숙박권 건 */
const corpRes = () => R.filter(r => r.corp);
const cst = r => r.base === '취소' ? '취소' : (r.base === '이용완료' || r.out < 0) ? '완료' : r.in <= 0 ? '이용 중' : '예정';
function nights(){
  const L = corpRes().filter(r => r.base !== '취소');
  const used = L.filter(r => cst(r) === '완료' || cst(r) === '이용 중').reduce((a, r) => a + r.out - r.in, 0);
  const booked = L.filter(r => cst(r) === '예정').reduce((a, r) => a + r.out - r.in, 0);
  return {used, booked, left: COMPANY.contract - used - booked};
}
const booked = (villa, off, except) => R.some(r => r !== except && r.villa === villa && r.base !== '취소' && r.in <= off && off < r.out) || BLOCKS.some(x => x.villa === villa && x.in <= off && off < x.out);
function bookCorp(emp, villa, inOff, outOff, adults){
  const iso = o => { const d = dOf(o); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; };
  const r = addBooking([villa, emp.name, emp.email, emp.phone.replace(/-/g,''), iso(inOff), iso(outOff), adults, 0, 0, '확정', '기업숙박권', `2026-09-28 ${new Date().toTimeString().slice(0,5)}`, '', {corp:true}]);
  r.seen = false; save(r);
  return r;
}
