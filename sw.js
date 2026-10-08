var C="recettes-v1";
self.addEventListener("install",function(){self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){
  if(e.request.method!=="GET")return;
  e.respondWith(fetch(e.request).then(function(r){var c=r.clone();caches.open(C).then(function(ch){ch.put(e.request,c)});return r}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("./")})}))
});
