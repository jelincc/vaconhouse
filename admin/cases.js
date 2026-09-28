/* 케이스 보기 · 요구사항 문서의 화면별로 기본·엣지 케이스를 바로 열어 봐요 (requires data.js) */
(() => {
  const ROOT = new URL('..', document.currentScript.src).href;
  const by = f => (R.find(f) || R[0]).idx;
  const id = {
    normal: by(r => r.name === '임미현'), cancel: by(r => r.base === '취소요청' || r.name === '한지민'), change: by(r => r.name === '오세훈'),
    conflict: by(r => r.name === '태오'), admin: by(r => r.name === '조석현'), corp: by(r => r.corp && r.name === '오시우' && r.in > 0),
    in3: by(r => r.name === '서준'), in1: by(r => r.name === '정다은'), stay: by(r => r.name === '민지'), past: by(r => r.name === '양병은'),
    missing: by(r => r.name === '하윤'), pay: by(r => r.name === '박지성'), dup: by(r => r.name === '김원기' && r.base !== '취소'),
    seoyun: by(r => r.corp && r.name === '이서윤' && r.in > 0),
  };
  const A = h => `admin/#${h}`, D = (i, h = '') => `admin/reservation?id=${i}${h ? '#' + h : ''}`;
  const C = h => `corp/#${h}`, P = h => `app/corp#${h}`;
  const DOCS = [
    {doc:'예약관리 개편', secs:[
      {t:'2. 예약관리 대시보드', items:[
        ['dash', '오늘 할 일 (신규·처리 대기 / 오늘의 운영 / 확인·조치 필요)', A('today')],
        ['dash-list', '항목을 누르면 조건이 걸린 예약 목록', A('list&k=cancel')],
        ['dash-new', '신규 예약과 채널별 건수', A('list&k=new')],
        ['dash-reason', '긴급 항목의 확인 이유 (충돌·중복)', A('list&k=conflict'), 1],
        ['dash-clear', '처리할 일이 하나도 없을 때', A('today&allclear=1'), 1],
        ['dash-zero', '오늘 체크인이 0건일 때 (내일 일정 미리 보기)', A('today'), 1],
        ['dash-many', '오늘 체크인이 3건을 넘을 때 (2건 + 외 N건 더 보기)', A('today&many=1'), 1],
        ['dash-stats', '누적 숫자는 통계·매출 대시보드로 이동', 'admin/stats'],
        ['dash-toast', '확인 필요 건 상단 토스트 (다른 화면에서)', A('board&toast=1')],
      ]},
      {t:'3. 통합 예약 캘린더', items:[
        ['board', '별장별 타임라인 보드 (주간)', A('board')],
        ['board-day', '일간 보기', A('board&span=d1')],
        ['board-month', '월간 보기', A('board&span=m')],
        ['board-drawer', '블록 클릭 → 요약 → 상세로 이동', A(`board&off=8&d=${id.cancel}`)],
        ['board-conflict', '예약 충돌이 보이는 보드', A('board&off=1')],
        ['board-filter', '필터 조건 유지 · 그룹 접기', A('board&region=양평')],
        ['board-block', '판매 막힌 기간 (보수 공사)', A('board&off=10'), 1],
        ['board-create', '예약 등록 · 회원 예약 (숙소·날짜·옵션)', A(`board&create=v6:7:9&m=m1`)],
        ['board-create-search', '예약 등록 · 회원 찾기', A('board&create=')],
        ['board-create-guest', '예약 등록 · 비회원 연락처 불완전', A('board&create=v2:7:9'), 1],
        ['board-dupe', '예약 등록 시 이미 예약된 날짜', A('board&off=1&create=v1:4:5'), 1],
        ['board-blockform', '빈 칸 눌러 판매 막기', A('board&block=v7:10:12'), 1],
        ['board-channel', '채널 연동 오류 · 관리자 등록 예약 막기', A('board&channels=1'), 1],
        ['board-cal', '월간 달력 (보조 보기)', A('month')],
      ]},
      {t:'회원', items:[
        ['mem-list', '회원 관리 목록 · 검색 · 필터', 'admin/members'],
        ['mem-detail', '회원 상세 · 예약 내역', 'admin/member?id=m8'],
        ['mem-empty', '예약이 없는 회원', 'admin/member?id=m1', 1],
      ]},
      {t:'4. 예약 목록', items:[
        ['list', '운영 순서로 정리한 기본 열', A('list')],
        ['list-cols', '예약번호·신청일은 열 설정으로', A('list&cols=1')],
        ['list-missing', '연락처가 불완전한 예약', A('list&k=missing'), 1],
        ['list-sync', '신청일이 채널 동기화로 덮인 예약', A('list&k=sync&cols=1'), 1],
        ['list-empty', '검색 결과가 없을 때', A('list&q=홍길동'), 1],
      ]},
      {t:'5. 예약 상세', items:[
        ['detail', '예약 요약 · 결제 · 옵션 · 이력 · 메모', D(id.normal)],
        ['detail-cancelreq', '고객 취소 요청 처리', D(id.cancel)],
        ['detail-changereq', '고객 일정 변경 요청 처리', D(id.change)],
        ['detail-conflict', '예약 충돌 → 다른 날짜·숙소로 옮기기', D(id.admin, 'act=move')],
        ['detail-channelmove', '채널 예약은 날짜를 채널에서 바꿔야 할 때', D(id.conflict, 'act=move'), 1],
        ['detail-refund100', '관리자 취소 · 전액 환불 (7일 전)', D(id.cancel, 'act=cancel'), 1],
        ['detail-refund50', '관리자 취소 · 50% 환불 (4일 전)', D(id.admin, 'act=cancel'), 1],
        ['detail-refund0', '관리자 취소 · 환불 없음 (내일 입실)', D(id.in1, 'act=cancel'), 1],
        ['detail-corp', '기업 숙박권 예약 (숙박권 차감·반환)', D(id.corp)],
        ['detail-noshow', '노쇼 처리', D(id.stay, 'act=status'), 1],
        ['detail-past', '이용 완료 예약은 수정 제한', D(id.past), 1],
        ['detail-missing', '불완전한 연락처 고치기', D(id.missing, 'act=edit'), 1],
        ['detail-pay', '결제 미완료 · 입금 확인', D(id.pay), 1],
        ['detail-dup', '중복 가능성 확인', D(id.dup), 1],
      ]},
    ]},
    {doc:'기업 숙박권', secs:[
      {t:'관리자 · 1. 직원 계정 관리', items:[
        ['c-emp', '소속 직원 목록 · 가입 여부 · 권한 상태', C('emp')],
        ['c-req', '직원 확인 (소속 확인 요청)', C('req')],
        ['c-add', '앱 가입 계정 검색해서 등록', C('add&q=신')],
        ['c-off', '권한 삭제 (예약이 있는 직원)', C('off=이서윤')],
        ['c-addnone', '검색해도 앱 계정이 없을 때', C('add&q=홍길동'), 1],
        ['c-unjoined', '미가입 직원 · 가입 안내 보내기', C('emp&f=미가입'), 1],
      ]},
      {t:'관리자 · 2. 예약 내역', items:[
        ['c-res', '예정 예약', C('res&f=예정')],
        ['c-done', '완료 예약', C('res&f=완료')],
        ['c-cancel', '취소 예약 (숙박권 미차감)', C('res&f=취소')],
        ['c-low', '잔여 숙박권이 얼마 안 남았을 때', C('low=4'), 1],
        ['c-zero', '잔여 숙박권을 모두 썼을 때', C('low=0'), 1],
      ]},
      {t:'직원 앱', items:[
        ['a-home', '권한 있는 직원 · 회사 전체 잔여 숙박권', P('p=0')],
        ['a-villas', '이용 가능한 별장 확인', P('p=0&s=villas')],
        ['a-dates', '날짜 확인 후 기업 숙박권으로 예약', P('p=0&s=dates&v=v2&a=7&b=9')],
        ['a-done', '예약 완료', P('p=0&s=done')],
        ['a-my', '본인 예약 조회', P('p=0&s=my')],
        ['a-open', '예약 상세 · 변경 · 취소', P(`p=0&s=open&i=${id.seoyun}`)],
        ['a-change', '일정 변경', P(`p=0&s=change&i=${id.seoyun}`)],
        ['a-cancel', '예약 취소 (숙박권 반환)', P(`p=0&s=cancel&i=${id.seoyun}`)],
        ['a-affil', '가입 직원의 소속 확인 요청', P('p=2&s=affil')],
        ['a-wait', '소속 확인 대기', P('p=3')],
        ['a-noperm', '권한이 없으면 회사 숙박권이 안 보임', P('p=1')],
        ['a-overlap', '이미 예약된 날이 포함될 때', P('p=0&s=dates&v=v7&a=19&b=21'), 1],
        ['a-block', '판매 막힌 기간', P('p=0&s=dates&v=v6'), 1],
        ['a-short', '잔여 숙박권보다 길게 고를 때', P('p=0&s=dates&v=v2&a=7&b=10&left=2'), 1],
        ['a-zero', '회사 숙박권을 모두 썼을 때', P('p=0&left=0'), 1],
        ['a-mail', '회사 이메일이 아닐 때', P('p=2&s=affil&mail=wooseok@gmail.com'), 1],
        ['a-offbook', '권한이 꺼진 뒤의 기존 예약', P(`p=0&state=off&s=open&i=${id.seoyun}`), 1],
      ]},
    ]},
  ];
  const H = location.hash;
  const curId = (H.match(/case=([\w-]+)/) || [])[1];
  const all = DOCS.flatMap(d => d.secs.flatMap(s => s.items.map(it => ({doc:d.doc, sec:s.t, id:it[0], t:it[1], url:it[2], edge:!!it[3]}))));
  window.__CASES = all;
  const cur = all.find(x => x.id === curId);
  let docIx = cur ? DOCS.findIndex(d => d.doc === cur.doc) : (/\/(corp|app)\//.test(location.pathname) ? 1 : 0);
  let onlyEdge = false;

  const css = `
  .cs-fab{position:fixed;right:24px;bottom:24px;z-index:95;display:flex;white-space:nowrap;align-items:center;gap:8px;background:#fff;color:#1A1A1E;border:1px solid #E6E8EA;border-radius:999px;height:48px;padding:0 20px 0 16px;font:600 15px var(--font,sans-serif);box-shadow:0 10px 30px rgba(26,26,30,.14);cursor:pointer;max-width:min(360px,calc(100% - 48px))}
  .cs-fab:hover{background:#F6F7F8}
  .cs-fab svg{width:18px;height:18px;flex:none}
  .cs-fab span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#768091;font-weight:500}
  .cs-scrim{position:fixed;inset:0;background:rgba(26,26,30,.28);z-index:96;display:flex;align-items:flex-end;justify-content:flex-end;padding:0 24px}
  .cs{background:#fff;width:min(880px,100%);max-height:84vh;border-radius:28px 28px 0 0;display:flex;flex-direction:column;box-shadow:0 -10px 40px rgba(26,26,30,.18);font-family:var(--font,sans-serif);color:#1A1A1E}
  .cs-h{padding:22px 24px 12px;display:flex;flex-direction:column;gap:12px}
  .cs-h .top{display:flex;justify-content:space-between;align-items:center}
  .cs-h h3{margin:0;font-size:20px;font-weight:700;letter-spacing:-.02em}
  .cs-h .x{border:0;background:#F6F7F8;width:36px;height:36px;border-radius:10px;cursor:pointer;display:grid;place-items:center;color:#575F6C}
  .cs-h .row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
  .cs-seg{display:inline-flex;background:#F6F7F8;border-radius:12px;padding:4px;gap:2px}
  .cs-seg button{border:0;background:transparent;height:34px;padding:0 16px;border-radius:9px;font:600 14px inherit;color:#768091;cursor:pointer}
  .cs-seg button.on{background:#fff;color:#1A1A1E;box-shadow:0 1px 3px rgba(0,0,0,.08)}
  .cs-edge{display:inline-flex;gap:8px;align-items:center;font-size:14px;color:#575F6C;cursor:pointer;margin-left:auto}
  .cs-edge input{width:18px;height:18px;accent-color:#1A1A1E}
  .cs-b{overflow:auto;padding:4px 24px 28px;display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px 28px;align-content:start}
  .cs-sec{display:flex;flex-direction:column}
  .cs-sec h4{margin:14px 0 6px;font-size:14px;font-weight:700;color:#575F6C}
  .cs-it{all:unset;box-sizing:border-box;cursor:pointer;display:flex;align-items:center;gap:8px;padding:9px 10px;border-radius:10px;font-size:14px;line-height:1.4}
  .cs-it:hover{background:#F6F7F8}
  .cs-it.on{background:#FBF4EF;font-weight:600}
  .cs-it i{font-style:normal;flex:none;font-size:12px;font-weight:700;border-radius:5px;padding:2px 5px;background:#FAEAE0;color:#D4560A}
  .cs-it b{font-weight:inherit;flex:1}
  .cs-it u{text-decoration:none;color:#949BA8;font-size:13px;flex:none}
  @media (max-width:720px){.cs-b{grid-template-columns:1fr}}`;
  const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  const fab = document.createElement('button'); fab.className = 'cs-fab'; fab.type = 'button';
  fab.innerHTML = `<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><rect x="3" y="3" width="6" height="6" rx="1.5"/><rect x="11" y="3" width="6" height="6" rx="1.5"/><rect x="3" y="11" width="6" height="6" rx="1.5"/><rect x="11" y="11" width="6" height="6" rx="1.5"/></svg>케이스${cur ? `<span>· ${cur.t}</span>` : ''}`;
  document.body.appendChild(fab);
  const where = u => u.split('#')[0].split('?')[0].replace(/\/index\.html$/, '/').replace(/\.html$/, '');
  function open(u, cid){
    const url = ROOT + u + (u.includes('#') ? '&' : '#') + 'case=' + cid;
    const target = new URL(url), here = new URL(location.href);
    try { sessionStorage.setItem('vh-case', '1'); } catch(e){}
    if (where(target.pathname) === where(here.pathname) && target.search === here.search){ location.hash = target.hash; location.reload(); }
    else location.href = url;
  }
  function draw(box){
    const d = DOCS[docIx];
    box.innerHTML = `<div class="cs-h"><div class="top"><h3>요구사항 화면별 케이스</h3><button class="x" data-x aria-label="닫기"><svg viewBox="0 0 20 20" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M5.5 5.5l9 9M14.5 5.5l-9 9"/></svg></button></div>
      <div class="row"><div class="cs-seg">${DOCS.map((x, i) => `<button data-doc="${i}" class="${i === docIx ? 'on' : ''}">${x.doc}</button>`).join('')}</div>
      <label class="cs-edge"><input type="checkbox" data-edge ${onlyEdge ? 'checked' : ''}>엣지 케이스만</label></div></div>
      <div class="cs-b">${d.secs.map(s => { const its = s.items.filter(it => !onlyEdge || it[3]); return its.length ? `<div class="cs-sec"><h4>${s.t}</h4>${its.map(it => `<button class="cs-it ${it[0] === curId ? 'on' : ''}" data-go="${it[0]}">${it[3] ? '<i>엣지</i>' : ''}<b>${it[1]}</b><u>${it[2].split('/')[0] === 'app' ? '직원 앱' : it[2].startsWith('corp') ? '기업 관리자' : it[2].includes('reservation?') ? '예약 상세' : '예약 관리'}</u></button>`).join('')}</div>` : ''; }).join('')}</div>`;
  }
  fab.onclick = () => {
    const sc = document.createElement('div'); sc.className = 'cs-scrim';
    const box = document.createElement('div'); box.className = 'cs'; box.setAttribute('role', 'dialog'); box.setAttribute('aria-label', '케이스');
    sc.appendChild(box); document.body.appendChild(sc); draw(box);
    sc.addEventListener('click', e => {
      if (e.target === sc || e.target.closest('[data-x]')) return sc.remove();
      const dc = e.target.closest('[data-doc]'); if (dc){ docIx = +dc.dataset.doc; return draw(box); }
      const g = e.target.closest('[data-go]'); if (g){ const it = all.find(x => x.id === g.dataset.go); open(it.url, it.id); }
    });
    sc.addEventListener('change', e => { if (e.target.dataset.edge !== undefined){ onlyEdge = e.target.checked; draw(box); } });
    document.addEventListener('keydown', function k(e){ if (e.key === 'Escape'){ sc.remove(); document.removeEventListener('keydown', k); } });
  };
})();
