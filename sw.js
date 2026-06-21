const CACHE = 'hala-v5';

// Fast precache — only critical files, keeps install instant
const PRECACHE = [
  '/menu',
  '/menu_cafe',
  '/assets/logo.jpg',
  '/assets/hero/hero_bg.webp',
  '/assets/hero/crepe_chocolate.webp',
  '/assets/hero/desserts.webp',
  '/assets/hero/juices.webp',
  '/assets/hero/shisha.webp',
  '/assets/fonts/Cairo_700_arabic.woff2',
  '/assets/fonts/Cairo_400_arabic.woff2',
  '/assets/fonts/El_Messiri_700_arabic.woff2',
];

// All hero images — cached silently in background after activation
const BG_CACHE = [
  '/assets/hero/brownie_banana.webp',
  '/assets/hero/brownie_chocolate.webp',
  '/assets/hero/brownie_fondue.webp',
  '/assets/hero/brownie_sauce.webp',
  '/assets/hero/cheesecake_berry.webp',
  '/assets/hero/cheesecake_blueberry.webp',
  '/assets/hero/cheesecake_caramel.webp',
  '/assets/hero/cheesecake_chocolate.webp',
  '/assets/hero/cheesecake_kinder.webp',
  '/assets/hero/cheesecake_lotus.webp',
  '/assets/hero/cheesecake_mango.webp',
  '/assets/hero/cheesecake_oreo.webp',
  '/assets/hero/cheesecake_pistachio.webp',
  '/assets/hero/cheesecake_strawberry.webp',
  '/assets/hero/cocktail_avocado.webp',
  '/assets/hero/cocktail_avocado_chocolate.webp',
  '/assets/hero/cocktail_avocado_juice.webp',
  '/assets/hero/cocktail_avocado_nutella.webp',
  '/assets/hero/cocktail_banana_milk.webp',
  '/assets/hero/cocktail_banana_nutella.webp',
  '/assets/hero/cocktail_banana_strawberry.webp',
  '/assets/hero/cocktail_emperor.webp',
  '/assets/hero/cocktail_fruit_mix.webp',
  '/assets/hero/cocktail_melody.webp',
  '/assets/hero/cocktail_orange_lemon.webp',
  '/assets/hero/cocktail_special.webp',
  '/assets/hero/cocktail_special3.webp',
  '/assets/hero/cocktail_special4.webp',
  '/assets/hero/cocktail_strawberry_chocolate.webp',
  '/assets/hero/cocktail_summer_fresh.webp',
  '/assets/hero/cocktail_tropical.webp',
  '/assets/hero/cocktail_white_kline.webp',
  '/assets/hero/coffee.webp',
  '/assets/hero/coffee_iced_caramel.webp',
  '/assets/hero/coffee_iced_hazelnut.webp',
  '/assets/hero/coffee_iced_latte.webp',
  '/assets/hero/coffee_iced_mocha.webp',
  '/assets/hero/coffee_iced_spanish.webp',
  '/assets/hero/coffee_iced_vanilla.webp',
  '/assets/hero/crepe_apple.webp',
  '/assets/hero/crepe_banana.webp',
  '/assets/hero/crepe_banana_roll.webp',
  '/assets/hero/crepe_belgian.webp',
  '/assets/hero/crepe_berry.webp',
  '/assets/hero/crepe_bugja.webp',
  '/assets/hero/crepe_caramel.webp',
  '/assets/hero/crepe_fettuccine.webp',
  '/assets/hero/crepe_fruits.webp',
  '/assets/hero/crepe_hala.webp',
  '/assets/hero/crepe_hazelnut.webp',
  '/assets/hero/crepe_ice.webp',
  '/assets/hero/crepe_kinder.webp',
  '/assets/hero/crepe_lotus.webp',
  '/assets/hero/crepe_mix.webp',
  '/assets/hero/crepe_nuts.webp',
  '/assets/hero/crepe_oreo.webp',
  '/assets/hero/crepe_ouzi.webp',
  '/assets/hero/crepe_pistachio.webp',
  '/assets/hero/crepe_plain.webp',
  '/assets/hero/crepe_roll.webp',
  '/assets/hero/crepe_strawberry.webp',
  '/assets/hero/crepe_sushi.webp',
  '/assets/hero/crepe_vanilla.webp',
  '/assets/hero/energy_berry.webp',
  '/assets/hero/energy_blue.webp',
  '/assets/hero/energy_pomegranate.webp',
  '/assets/hero/energy_redbull.webp',
  '/assets/hero/energy_strawberry.webp',
  '/assets/hero/energy_tiger.webp',
  '/assets/hero/frappe.webp',
  '/assets/hero/frappe_caramel.webp',
  '/assets/hero/frappe_chocolate.webp',
  '/assets/hero/frappe_coffee.webp',
  '/assets/hero/frappe_pistachio.webp',
  '/assets/hero/frappe_strawberry.webp',
  '/assets/hero/frappe_vanilla.webp',
  '/assets/hero/frappuccino.webp',
  '/assets/hero/hookah_apple.webp',
  '/assets/hero/hookah_bounty.webp',
  '/assets/hero/hookah_bounty_v2.webp',
  '/assets/hero/hookah_double_apple.webp',
  '/assets/hero/hookah_double_apple_v2.webp',
  '/assets/hero/hookah_english.webp',
  '/assets/hero/hookah_gelatin.webp',
  '/assets/hero/hookah_grape.webp',
  '/assets/hero/hookah_gum_melon.webp',
  '/assets/hero/hookah_gum_mint.webp',
  '/assets/hero/hookah_hala.webp',
  '/assets/hero/hookah_lemon_mint.webp',
  '/assets/hero/hookah_mexican.webp',
  '/assets/hero/hookah_mint.webp',
  '/assets/hero/hot_affogato.webp',
  '/assets/hero/hot_americano.webp',
  '/assets/hero/hot_cappuccino.webp',
  '/assets/hero/hot_chocolate.webp',
  '/assets/hero/hot_espresso_double.webp',
  '/assets/hero/hot_espresso_single.webp',
  '/assets/hero/hot_jakleetia.webp',
  '/assets/hero/hot_latte.webp',
  '/assets/hero/hot_milk.webp',
  '/assets/hero/hot_mochaccino.webp',
  '/assets/hero/hot_nescafe.webp',
  '/assets/hero/hot_tea.webp',
  '/assets/hero/hot_turkish.webp',
  '/assets/hero/icecream_banana_split.webp',
  '/assets/hero/icecream_banana_split_ai.webp',
  '/assets/hero/icecream_chocola_mou.webp',
  '/assets/hero/icecream_chocola_mou_ai.webp',
  '/assets/hero/icecream_fruit_bowl.webp',
  '/assets/hero/icecream_fruit_bowl_ai.webp',
  '/assets/hero/icecream_fruit_salad.webp',
  '/assets/hero/icecream_fruit_salad_ai.webp',
  '/assets/hero/icecream_italian.webp',
  '/assets/hero/icecream_italian_ai.webp',
  '/assets/hero/icecream_napoleon.webp',
  '/assets/hero/icecream_napoleon_ai.webp',
  '/assets/hero/icecream_nuts_plate.webp',
  '/assets/hero/icecream_nuts_plate_ai.webp',
  '/assets/hero/iced_pistachio.webp',
  '/assets/hero/juice_apple.webp',
  '/assets/hero/juice_banana.webp',
  '/assets/hero/juice_lemon.webp',
  '/assets/hero/juice_mango.webp',
  '/assets/hero/juice_melon.webp',
  '/assets/hero/juice_orange.webp',
  '/assets/hero/juice_orange_v2.webp',
  '/assets/hero/juice_orange_v3.webp',
  '/assets/hero/juice_pineapple.webp',
  '/assets/hero/juice_strawberry.webp',
  '/assets/hero/juice_watermelon.webp',
  '/assets/hero/mexican_redbull.webp',
  '/assets/hero/milkshake.webp',
  '/assets/hero/milkshake_blue.webp',
  '/assets/hero/milkshake_bounty.webp',
  '/assets/hero/milkshake_caramel.webp',
  '/assets/hero/milkshake_chocolate.webp',
  '/assets/hero/milkshake_coffee.webp',
  '/assets/hero/milkshake_kinder.webp',
  '/assets/hero/milkshake_lotus.webp',
  '/assets/hero/milkshake_lotus_ai.webp',
  '/assets/hero/milkshake_oreo.webp',
  '/assets/hero/milkshake_pistachio.webp',
  '/assets/hero/milkshake_strawberry.webp',
  '/assets/hero/milkshake_twix.webp',
  '/assets/hero/milkshake_twix_ai.webp',
  '/assets/hero/milkshake_vanilla.webp',
  '/assets/hero/mojito_blue.webp',
  '/assets/hero/mojito_blueberry.webp',
  '/assets/hero/mojito_bobi.webp',
  '/assets/hero/mojito_hala.webp',
  '/assets/hero/mojito_mango.webp',
  '/assets/hero/mojito_mint.webp',
  '/assets/hero/mojito_peach.webp',
  '/assets/hero/mojito_pomegranate.webp',
  '/assets/hero/mojito_strawberry.webp',
  '/assets/hero/mojito_watermelon.webp',
  '/assets/hero/pancake_belgian_sharp.webp',
  '/assets/hero/pancake_chocolate_sharp.webp',
  '/assets/hero/pancake_fruits_sharp.webp',
  '/assets/hero/pancake_hala_sharp.webp',
  '/assets/hero/pancake_kinder_sharp.webp',
  '/assets/hero/pancake_lotus_sharp.webp',
  '/assets/hero/pancake_mixed_sharp.webp',
  '/assets/hero/pancake_oreo_sharp.webp',
  '/assets/hero/pancake_pistachio_sharp.webp',
  '/assets/hero/san_sebastian.webp',
  '/assets/hero/shisha_alkhayal.webp',
  '/assets/hero/shisha_bounty.webp',
  '/assets/hero/shisha_gelatin.webp',
  '/assets/hero/shisha_hala.webp',
  '/assets/hero/shisha_mexican.webp',
  '/assets/hero/single_espresso.webp',
  '/assets/hero/smoothie_blueberry.webp',
  '/assets/hero/smoothie_lemon_mint.webp',
  '/assets/hero/smoothie_mango.webp',
  '/assets/hero/smoothie_peach.webp',
  '/assets/hero/smoothie_pineapple.webp',
  '/assets/hero/smoothie_strawberry.webp',
  '/assets/hero/smoothie_vimto.webp',
  '/assets/hero/smoothie_vimto_ai.webp',
  '/assets/hero/smoothie_watermelon.webp',
  '/assets/hero/strawberry_cheesecake.webp',
  '/assets/hero/turkish_coffee.webp',
  '/assets/hero/waffle_banana.webp',
  '/assets/hero/waffle_belgian.webp',
  '/assets/hero/waffle_berry.webp',
  '/assets/hero/waffle_caramel.webp',
  '/assets/hero/waffle_chocolate.webp',
  '/assets/hero/waffle_chocolate_special.webp',
  '/assets/hero/waffle_fruits.webp',
  '/assets/hero/waffle_hala.webp',
  '/assets/hero/waffle_hazelnut.webp',
  '/assets/hero/waffle_kinder.webp',
  '/assets/hero/waffle_lotus.webp',
  '/assets/hero/waffle_mixed.webp',
  '/assets/hero/waffle_nuts.webp',
  '/assets/hero/waffle_oreo.webp',
  '/assets/hero/waffle_pineapple.webp',
  '/assets/hero/waffle_pistachio.webp',
  '/assets/hero/waffle_stick.webp',
  '/assets/hero/waffle_strawberry.webp',
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE).catch(() => {}))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    // Delete old caches
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
      .then(() => {
        // Background cache all hero images one by one — no rush, no blocking
        caches.open(CACHE).then(cache => {
          let i = 0;
          const next = () => {
            if (i >= BG_CACHE.length) return;
            const url = BG_CACHE[i++];
            cache.match(url).then(hit => {
              if (!hit) {
                fetch(url).then(r => { if (r.ok) cache.put(url, r); }).catch(() => {});
              }
              setTimeout(next, 80); // 80ms between each — gentle on network
            });
          };
          setTimeout(next, 3000); // start 3s after page load
        });
      })
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  if (e.request.mode === 'navigate') {
    e.respondWith(
      fetch(e.request)
        .then(r => { caches.open(CACHE).then(c => c.put(e.request, r.clone())); return r; })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  if (url.pathname.startsWith('/assets/')) {
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(r => {
          if (r.ok) caches.open(CACHE).then(c => c.put(e.request, r.clone()));
          return r;
        });
      })
    );
  }
});
