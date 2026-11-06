// RIGナビの入口ページを「アプリとしてインストール」できるようにするための最小限のもの(2026-11-06)。
// 何も保存しない(画面・データは毎回GASから読む)。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { });
