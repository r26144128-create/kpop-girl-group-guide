// =========================================
// K-pop 女團入坑指南 — 全站共用腳本
// 目前只做一件事：手機版選單的開關
// =========================================

// JavaScript 有正常執行，就把 <html> 上的 no-js 拿掉
document.documentElement.classList.remove('no-js');

// 找到選單按鈕和選單本身
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle && nav) {
  // 按下按鈕時，切換選單的展開／收起
  toggle.addEventListener('click', function () {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
  });
}
