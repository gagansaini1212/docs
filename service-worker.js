/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/css/0.styles.727e7545.css",
    "revision": "7eca325aa96e760fd23e68f0bdb223a3"
  },
  {
    "url": "assets/img/address-bar.a15ff370.png",
    "revision": "a15ff370eed2f8f0b8219ea3d4976318"
  },
  {
    "url": "assets/img/architecture.30de09c7.png",
    "revision": "30de09c7c6530bc11ece7d9553497563"
  },
  {
    "url": "assets/img/connex.186d320e.jpg",
    "revision": "186d320e35a63378da3873e4c359aae7"
  },
  {
    "url": "assets/img/mpp.58a89201.png",
    "revision": "58a892017c66b562945baeee15505c80"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wallet-detail-activity.0f9d89a3.png",
    "revision": "0f9d89a34631323541d04818f4a00ac4"
  },
  {
    "url": "assets/js/10.ea619ca3.js",
    "revision": "5fbda109f5d4759a5770f24f7797f575"
  },
  {
    "url": "assets/js/11.2e96fa7e.js",
    "revision": "86ba77044b6a1473b1402b7ae68a3bd4"
  },
  {
    "url": "assets/js/12.63026fb4.js",
    "revision": "5eac7df6811f199296b3927bf5714393"
  },
  {
    "url": "assets/js/13.a4baeff9.js",
    "revision": "14cd127ba3332a198e240080087a8e70"
  },
  {
    "url": "assets/js/14.e4baec31.js",
    "revision": "ed6483ad4273f0c78229791ac87df099"
  },
  {
    "url": "assets/js/15.3015f051.js",
    "revision": "cdbffb4118046ffd2440a744a0f4b2ee"
  },
  {
    "url": "assets/js/16.a05bb904.js",
    "revision": "82e6aed3cd5823304f63f3e0d29fc93b"
  },
  {
    "url": "assets/js/17.9da18bbc.js",
    "revision": "474ca68b36ea7792b52c0d89cb467a44"
  },
  {
    "url": "assets/js/18.db5b11a0.js",
    "revision": "eed29e24be0a2153f86a6518c81a53e2"
  },
  {
    "url": "assets/js/19.7b53fe4a.js",
    "revision": "7279b0c63fd88e0ba55c1665b828b56e"
  },
  {
    "url": "assets/js/20.4c89bee9.js",
    "revision": "354168c92d013135b813c4fc8601e753"
  },
  {
    "url": "assets/js/21.525fe7f9.js",
    "revision": "b7f2ff6f098ade23cac2075bdf54abd4"
  },
  {
    "url": "assets/js/22.6dff57a3.js",
    "revision": "1903f83ead913a9e14dd01cca6d36312"
  },
  {
    "url": "assets/js/23.6bfb969d.js",
    "revision": "4f70653403ec62380e2e83b0ec0e95f3"
  },
  {
    "url": "assets/js/24.44b7716f.js",
    "revision": "6693e8c28f8b9347c6d592355885ba02"
  },
  {
    "url": "assets/js/25.c8c583d5.js",
    "revision": "c90e0cbc31db66673b0fe44a92457264"
  },
  {
    "url": "assets/js/26.c9d896a1.js",
    "revision": "2670845563160d22434f0ad59ac747e1"
  },
  {
    "url": "assets/js/27.e27f4cb8.js",
    "revision": "41b481975b044d131b9e7e0d60e0a281"
  },
  {
    "url": "assets/js/28.e6063fef.js",
    "revision": "b4d2c17f1a15ac093271d86acd4e8644"
  },
  {
    "url": "assets/js/29.5fd52193.js",
    "revision": "e1f5fa279700cd83d9efdf0a664f2098"
  },
  {
    "url": "assets/js/3.b4a9e1a9.js",
    "revision": "1454d9f6fce0e672a1336bd7f0656a38"
  },
  {
    "url": "assets/js/30.42427fe8.js",
    "revision": "efbba081258a6fb225540067a58e5537"
  },
  {
    "url": "assets/js/31.f6fe739e.js",
    "revision": "962c6a74a3a1a2a00aa9b0534d5767e1"
  },
  {
    "url": "assets/js/32.c6982e54.js",
    "revision": "5cf2fe8e3764756621989d0aa0c1a855"
  },
  {
    "url": "assets/js/33.c1ce93b2.js",
    "revision": "3306eb441ef6bc7bc059e59aec04e4d6"
  },
  {
    "url": "assets/js/34.63d5aaad.js",
    "revision": "6c50487f24af1bb4389aef71783b2be9"
  },
  {
    "url": "assets/js/35.95dcba5e.js",
    "revision": "e3a75460952c5c3aead54a680e5839a3"
  },
  {
    "url": "assets/js/36.54b1fe82.js",
    "revision": "9994436c51337569d07eb32e664848d8"
  },
  {
    "url": "assets/js/37.bbf14b99.js",
    "revision": "1fa3b9b461bcd226a9d7c5b61ec03f86"
  },
  {
    "url": "assets/js/38.7d53e192.js",
    "revision": "5410d7808e5179f05437dad1bdc337c8"
  },
  {
    "url": "assets/js/39.1dfab5b6.js",
    "revision": "7361b8059d191dcc960562ced788ec39"
  },
  {
    "url": "assets/js/4.7f114b4f.js",
    "revision": "b13850004bba9f896ae6456cfe948a3b"
  },
  {
    "url": "assets/js/40.ffcf8941.js",
    "revision": "e8f3886115ae3751d566196d75c07482"
  },
  {
    "url": "assets/js/41.5a2a7a2a.js",
    "revision": "f0519f9a85e1809b31d4addb5aa8ebdb"
  },
  {
    "url": "assets/js/42.86157c66.js",
    "revision": "ecddb07839f8943fb9e045f5ffc2143f"
  },
  {
    "url": "assets/js/43.007f5b1a.js",
    "revision": "218c4d95b60388d515720acc5fe95985"
  },
  {
    "url": "assets/js/44.8bd65a8b.js",
    "revision": "5250438062f991f3740c35656ddd884c"
  },
  {
    "url": "assets/js/45.4f15ee9d.js",
    "revision": "318b24fa44f0d09a005bc1ee600f0424"
  },
  {
    "url": "assets/js/46.3e43704f.js",
    "revision": "7ef836737b37ac4a9411423379e6fb5a"
  },
  {
    "url": "assets/js/47.d5b1169f.js",
    "revision": "a2c94a3313d8b22c38c46a42f816b3fb"
  },
  {
    "url": "assets/js/48.19c560d9.js",
    "revision": "d30c60bc8cb5524d8f2980079218b30d"
  },
  {
    "url": "assets/js/5.6dfafbd1.js",
    "revision": "ac5fcd43f141fe6d40a016c353f5e240"
  },
  {
    "url": "assets/js/6.0480c9df.js",
    "revision": "05fda2dd9239b43d789bcef17152eb67"
  },
  {
    "url": "assets/js/7.d14b27ba.js",
    "revision": "aebd2b5327e2d31296b2e8704d61b16b"
  },
  {
    "url": "assets/js/8.77fe2b1e.js",
    "revision": "c4b451fe69490443fd7f63303041b222"
  },
  {
    "url": "assets/js/9.885e62d8.js",
    "revision": "0d32aa145c7441df6b83c6a7e98afb2c"
  },
  {
    "url": "assets/js/app.b9c2c4a9.js",
    "revision": "9301c740edfbb6030b090d5096af2d34"
  },
  {
    "url": "assets/js/vendors~docsearch.f7385de5.js",
    "revision": "0e139e7e3e0d0e8bc373456260e50940"
  },
  {
    "url": "connex/api.html",
    "revision": "9a52fa33e7a9d7619992742f1c0f52a2"
  },
  {
    "url": "connex/implementation.html",
    "revision": "75ee09e32cf4b77fbcc3a66058195d00"
  },
  {
    "url": "connex/index.html",
    "revision": "8084c2edacf98452786b9377c39799e0"
  },
  {
    "url": "icons/144.png",
    "revision": "ef022f52c54f8ee6ccc8f005d52b99de"
  },
  {
    "url": "icons/168.png",
    "revision": "cd596353879cab531903b1f9c0f8d6dc"
  },
  {
    "url": "icons/192.png",
    "revision": "6aaa85947b9a315ac47970a54c3a66f4"
  },
  {
    "url": "icons/48.png",
    "revision": "2d20f253068748053fc7082400c88f4b"
  },
  {
    "url": "icons/72.png",
    "revision": "02b333d138cc4764e770eb1d7274e7ea"
  },
  {
    "url": "icons/96.png",
    "revision": "b3240f2ffb00f383cbc3783370a782cc"
  },
  {
    "url": "index.html",
    "revision": "a8bf7a07b842ed014ce7dcf36cec648f"
  },
  {
    "url": "logo.png",
    "revision": "1f7569a7fb96e141f556669c77877f1f"
  },
  {
    "url": "others/demos-and-services.html",
    "revision": "e5de1c1eb7764c4caa1610fdc4fa73fb"
  },
  {
    "url": "others/miscellaneous.html",
    "revision": "503e40ba3e88dde41e50feba3e648976"
  },
  {
    "url": "sync/download-and-install.html",
    "revision": "d5cd9118cccf688a9a4322b9f7c32626"
  },
  {
    "url": "sync/faq.html",
    "revision": "cc36efccd424ad773f095c45f227e487"
  },
  {
    "url": "sync/user-guide/activities.html",
    "revision": "fc4cca99687a4ad090ce4d23743c4538"
  },
  {
    "url": "sync/user-guide/browse-dapp-and-web.html",
    "revision": "65bb0f70acd6dbae0ef79af101156069"
  },
  {
    "url": "sync/user-guide/contribute.html",
    "revision": "c99501f84d49ebc3c3eac4e4854f2862"
  },
  {
    "url": "sync/user-guide/contributing.html",
    "revision": "f070977149a582c515d4e1c4cbb30dbf"
  },
  {
    "url": "sync/user-guide/import-ledger.html",
    "revision": "f5797350aa9a82cccd00a0524a1a1529"
  },
  {
    "url": "sync/user-guide/index.html",
    "revision": "938c9cae8e33c5626ac9e55e41d5440e"
  },
  {
    "url": "sync/user-guide/interact-with-dapps.html",
    "revision": "2242b7fba42ce78801ff3d3659202cbb"
  },
  {
    "url": "sync/user-guide/report-issue.html",
    "revision": "5eb0296d9f99b00eb093239df2bbe3b7"
  },
  {
    "url": "sync/user-guide/settings.html",
    "revision": "1fa04502c69b37a1970b052f96dcace1"
  },
  {
    "url": "thor/get-started/api.html",
    "revision": "a59947fc0e19c460b067facb2cda3c22"
  },
  {
    "url": "thor/get-started/custom-network.html",
    "revision": "15f79c44ba4152673f0247b4f14369b8"
  },
  {
    "url": "thor/get-started/installation.html",
    "revision": "2597f6d1eea746b6a3b68252f2aeeefb"
  },
  {
    "url": "thor/learn/block.html",
    "revision": "b42998c387aa7ad542797db65c5c6a2e"
  },
  {
    "url": "thor/learn/builtin-contracts.html",
    "revision": "28d74a1af8cce142c402a54bcb37b82d"
  },
  {
    "url": "thor/learn/faq.html",
    "revision": "a1c39b82e09b589a0d75026b9db957d2"
  },
  {
    "url": "thor/learn/fee-delegation.html",
    "revision": "f823346aba03faed0d8c008e6bcbb130"
  },
  {
    "url": "thor/learn/index.html",
    "revision": "e8ae16c5f9921f19772df619ebc0c90d"
  },
  {
    "url": "thor/learn/proof-of-authority.html",
    "revision": "05894871015111902770ac1f2dc7452d"
  },
  {
    "url": "thor/learn/transaction-calculation.html",
    "revision": "9af583dfa227222e79c8217be083ca4c"
  },
  {
    "url": "thor/learn/transaction-model.html",
    "revision": "2c0defbfbf7dffb6bf24c92e52e74c52"
  },
  {
    "url": "thor/learn/two-token-design.html",
    "revision": "f1bd48cee1766c753a4201934532fa00"
  },
  {
    "url": "tutorials/contribute.html",
    "revision": "86ec456e748bf6de2863670120ce2e7e"
  },
  {
    "url": "tutorials/designated-fee-delegation.html",
    "revision": "3560bb6de74bac17a949f853dd257e80"
  },
  {
    "url": "tutorials/forcible-transaction-dependency.html",
    "revision": "645498805c8b5574306acefd06245ff9"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-1.html",
    "revision": "2b3d8ae4668064db073d4fd88d35fec6"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-2.html",
    "revision": "ab4e0dc8a923943a3638fd63d948f538"
  },
  {
    "url": "tutorials/how-to-develop-a-dapp-on-vechain-3.html",
    "revision": "24a0ee6d40b3f342812981ad89a94dd1"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-1.html",
    "revision": "84c26505365d98a035594bcbcfbc1e6d"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-2.html",
    "revision": "04ab261d823db84ea6189ff650d94442"
  },
  {
    "url": "tutorials/how-to-integrate-VIP-191-3.html",
    "revision": "9f23496ff211f5a55b7b10a998ec8787"
  },
  {
    "url": "tutorials/index.html",
    "revision": "aa7575dc33a593198bc70165eb64f1f0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
