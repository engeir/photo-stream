(function(html) {
const id = document.currentScript.getAttribute('data-photo-id');
const url = document.currentScript.getAttribute('data-photo-url');
const target = document.currentScript.getAttribute('data-target-id');
const container = document.querySelector(`#${target}`);
container.innerHTML = html;
openPhoto("id-"+id, url);
lazyload();
})(`
<li class="item " id="id-twin-sisters-mus" style="background-image: url('/photos/tint/Twin%20Sisters%20mus-65ba1d.jpg')" title="Twin Sisters mus">
  <img class="lazyload" data-src="/photos/thumbnail/Twin%20Sisters%20mus-ccf4df.jpg" src="/photos/tint/Twin%20Sisters%20mus-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Twin%20Sisters%20mus-686656.jpg')"></span>
  </span>
  <a class="open" href="/twin-sisters-mus" data-target="id-twin-sisters-mus">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/twin-sisters-longs-peak" data-target="id-twin-sisters-longs-peak" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-twin-sisters-longs-peak" style="background-image: url('/photos/tint/Twin%20Sisters,%20Longs%20Peak-65ba1d.jpg')" title="Twin Sisters, Longs Peak">
  <img class="lazyload" data-src="/photos/thumbnail/Twin%20Sisters,%20Longs%20Peak-ccf4df.jpg" src="/photos/tint/Twin%20Sisters,%20Longs%20Peak-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Twin%20Sisters,%20Longs%20Peak-686656.jpg')"></span>
  </span>
  <a class="open" href="/twin-sisters-longs-peak" data-target="id-twin-sisters-longs-peak">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/twin-sisters-mus" data-target="id-twin-sisters-mus" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/san-francisco-vindruer" data-target="id-san-francisco-vindruer" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-san-francisco-vindruer" style="background-image: url('/photos/tint/San%20Francisco%20vindruer-65ba1d.jpg')" title="San Francisco vindruer">
  <img class="lazyload" data-src="/photos/thumbnail/San%20Francisco%20vindruer-ccf4df.jpg" src="/photos/tint/San%20Francisco%20vindruer-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/San%20Francisco%20vindruer-686656.jpg')"></span>
  </span>
  <a class="open" href="/san-francisco-vindruer" data-target="id-san-francisco-vindruer">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/twin-sisters-longs-peak" data-target="id-twin-sisters-longs-peak" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/san-francisco-palace-of-fine-arts" data-target="id-san-francisco-palace-of-fine-arts" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
    </ul> -->
</li>
<li class="item " id="id-san-francisco-palace-of-fine-arts" style="background-image: url('/photos/tint/San%20Francisco%20Palace%20of%20Fine%20Arts-65ba1d.jpg')" title="San Francisco Palace of Fine Arts">
  <img class="lazyload" data-src="/photos/thumbnail/San%20Francisco%20Palace%20of%20Fine%20Arts-ccf4df.jpg" src="/photos/tint/San%20Francisco%20Palace%20of%20Fine%20Arts-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/San%20Francisco%20Palace%20of%20Fine%20Arts-686656.jpg')"></span>
  </span>
  <a class="open" href="/san-francisco-palace-of-fine-arts" data-target="id-san-francisco-palace-of-fine-arts">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/san-francisco-vindruer" data-target="id-san-francisco-vindruer" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/san-francisco-gate" data-target="id-san-francisco-gate" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>4.5</li>
    </ul> -->
</li>
<li class="item " id="id-san-francisco-gate" style="background-image: url('/photos/tint/San%20Francisco%20gate-65ba1d.jpg')" title="San Francisco gate">
  <img class="lazyload" data-src="/photos/thumbnail/San%20Francisco%20gate-ccf4df.jpg" src="/photos/tint/San%20Francisco%20gate-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/San%20Francisco%20gate-686656.jpg')"></span>
  </span>
  <a class="open" href="/san-francisco-gate" data-target="id-san-francisco-gate">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/san-francisco-palace-of-fine-arts" data-target="id-san-francisco-palace-of-fine-arts" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/san-francisco-by" data-target="id-san-francisco-by" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-san-francisco-by" style="background-image: url('/photos/tint/San%20Francisco%20by-65ba1d.jpg')" title="San Francisco by">
  <img class="lazyload" data-src="/photos/thumbnail/San%20Francisco%20by-ccf4df.jpg" src="/photos/tint/San%20Francisco%20by-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/San%20Francisco%20by-686656.jpg')"></span>
  </span>
  <a class="open" href="/san-francisco-by" data-target="id-san-francisco-by">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/san-francisco-gate" data-target="id-san-francisco-gate" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/vin-solnedgang-og-gress" data-target="id-vin-solnedgang-og-gress" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>7.1</li>
    </ul> -->
</li>
<li class="item " id="id-vin-solnedgang-og-gress" style="background-image: url('/photos/tint/Vin,%20solnedgang%20og%20gress-65ba1d.jpg')" title="Vin, solnedgang og gress">
  <img class="lazyload" data-src="/photos/thumbnail/Vin,%20solnedgang%20og%20gress-ccf4df.jpg" src="/photos/tint/Vin,%20solnedgang%20og%20gress-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Vin,%20solnedgang%20og%20gress-686656.jpg')"></span>
  </span>
  <a class="open" href="/vin-solnedgang-og-gress" data-target="id-vin-solnedgang-og-gress">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/san-francisco-by" data-target="id-san-francisco-by" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/vin-solnedgang-og-baat" data-target="id-vin-solnedgang-og-baat" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-vin-solnedgang-og-baat" style="background-image: url('/photos/tint/Vin,%20solnedgang%20og%20baat-65ba1d.jpg')" title="Vin, solnedgang og baat">
  <img class="lazyload" data-src="/photos/thumbnail/Vin,%20solnedgang%20og%20baat-ccf4df.jpg" src="/photos/tint/Vin,%20solnedgang%20og%20baat-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Vin,%20solnedgang%20og%20baat-686656.jpg')"></span>
  </span>
  <a class="open" href="/vin-solnedgang-og-baat" data-target="id-vin-solnedgang-og-baat">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/vin-solnedgang-og-gress" data-target="id-vin-solnedgang-og-gress" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/kvaloyvaagen-midnatt" data-target="id-kvaloyvaagen-midnatt" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
    </ul> -->
</li>
<li class="item " id="id-kvaloyvaagen-midnatt" style="background-image: url('/photos/tint/Kvaloyvaagen%20midnatt-65ba1d.jpg')" title="Kvaloyvaagen midnatt">
  <img class="lazyload" data-src="/photos/thumbnail/Kvaloyvaagen%20midnatt-ccf4df.jpg" src="/photos/tint/Kvaloyvaagen%20midnatt-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Kvaloyvaagen%20midnatt-686656.jpg')"></span>
  </span>
  <a class="open" href="/kvaloyvaagen-midnatt" data-target="id-kvaloyvaagen-midnatt">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/vin-solnedgang-og-baat" data-target="id-vin-solnedgang-og-baat" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/lakselvtind-kristian" data-target="id-lakselvtind-kristian" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-lakselvtind-kristian" style="background-image: url('/photos/tint/Lakselvtind%20Kristian-65ba1d.jpg')" title="Lakselvtind Kristian">
  <img class="lazyload" data-src="/photos/thumbnail/Lakselvtind%20Kristian-ccf4df.jpg" src="/photos/tint/Lakselvtind%20Kristian-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Lakselvtind%20Kristian-686656.jpg')"></span>
  </span>
  <a class="open" href="/lakselvtind-kristian" data-target="id-lakselvtind-kristian">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/kvaloyvaagen-midnatt" data-target="id-kvaloyvaagen-midnatt" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tomasrenna" data-target="id-tomasrenna" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
    </ul> -->
</li>
<li class="item " id="id-tomasrenna" style="background-image: url('/photos/tint/Tomasrenna-65ba1d.jpg')" title="Tomasrenna">
  <img class="lazyload" data-src="/photos/thumbnail/Tomasrenna-ccf4df.jpg" src="/photos/tint/Tomasrenna-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tomasrenna-686656.jpg')"></span>
  </span>
  <a class="open" href="/tomasrenna" data-target="id-tomasrenna">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/lakselvtind-kristian" data-target="id-lakselvtind-kristian" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/djeveltanna-ukjent-skikjorer" data-target="id-djeveltanna-ukjent-skikjorer" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
    </ul> -->
</li>
<li class="item " id="id-djeveltanna-ukjent-skikjorer" style="background-image: url('/photos/tint/Djeveltanna%20ukjent%20skikjorer-65ba1d.jpg')" title="Djeveltanna ukjent skikjorer">
  <img class="lazyload" data-src="/photos/thumbnail/Djeveltanna%20ukjent%20skikjorer-ccf4df.jpg" src="/photos/tint/Djeveltanna%20ukjent%20skikjorer-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Djeveltanna%20ukjent%20skikjorer-686656.jpg')"></span>
  </span>
  <a class="open" href="/djeveltanna-ukjent-skikjorer" data-target="id-djeveltanna-ukjent-skikjorer">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tomasrenna" data-target="id-tomasrenna" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/andersdaltinden-sunset" data-target="id-andersdaltinden-sunset" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>20.0</li>
    </ul> -->
</li>
<li class="item " id="id-andersdaltinden-sunset" style="background-image: url('/photos/tint/Andersdaltinden%20Sunset-65ba1d.jpg')" title="Andersdaltinden Sunset">
  <img class="lazyload" data-src="/photos/thumbnail/Andersdaltinden%20Sunset-ccf4df.jpg" src="/photos/tint/Andersdaltinden%20Sunset-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Andersdaltinden%20Sunset-686656.jpg')"></span>
  </span>
  <a class="open" href="/andersdaltinden-sunset" data-target="id-andersdaltinden-sunset">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/djeveltanna-ukjent-skikjorer" data-target="id-djeveltanna-ukjent-skikjorer" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/blatinden-wavy" data-target="id-blatinden-wavy" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>11.0</li>
    </ul> -->
</li>
<li class="item " id="id-blatinden-wavy" style="background-image: url('/photos/tint/Blatinden%20Wavy-65ba1d.jpg')" title="Blatinden Wavy">
  <img class="lazyload" data-src="/photos/thumbnail/Blatinden%20Wavy-ccf4df.jpg" src="/photos/tint/Blatinden%20Wavy-65ba1d.jpg" height="2989" width="5859" />
  <span class="full">
    <span style="background-image: url('/photos/large/Blatinden%20Wavy-686656.jpg')"></span>
  </span>
  <a class="open" href="/blatinden-wavy" data-target="id-blatinden-wavy">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/andersdaltinden-sunset" data-target="id-andersdaltinden-sunset" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/ringvassoya-blakollen" data-target="id-ringvassoya-blakollen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/40</li>
    <li><span class="aperture"><em>f</em>/</span>40.0</li>
    </ul> -->
</li>
<li class="item " id="id-ringvassoya-blakollen" style="background-image: url('/photos/tint/Ringvassoya%20blakollen-65ba1d.jpg')" title="Ringvassoya blakollen">
  <img class="lazyload" data-src="/photos/thumbnail/Ringvassoya%20blakollen-ccf4df.jpg" src="/photos/tint/Ringvassoya%20blakollen-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Ringvassoya%20blakollen-686656.jpg')"></span>
  </span>
  <a class="open" href="/ringvassoya-blakollen" data-target="id-ringvassoya-blakollen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/blatinden-wavy" data-target="id-blatinden-wavy" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/oslo-monolitt" data-target="id-oslo-monolitt" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-oslo-monolitt" style="background-image: url('/photos/tint/Oslo%20monolitt-65ba1d.jpg')" title="Oslo monolitt">
  <img class="lazyload" data-src="/photos/thumbnail/Oslo%20monolitt-ccf4df.jpg" src="/photos/tint/Oslo%20monolitt-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Oslo%20monolitt-686656.jpg')"></span>
  </span>
  <a class="open" href="/oslo-monolitt" data-target="id-oslo-monolitt">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/ringvassoya-blakollen" data-target="id-ringvassoya-blakollen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/oslo-vigeland" data-target="id-oslo-vigeland" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-oslo-vigeland" style="background-image: url('/photos/tint/Oslo%20vigeland-65ba1d.jpg')" title="Oslo vigeland">
  <img class="lazyload" data-src="/photos/thumbnail/Oslo%20vigeland-ccf4df.jpg" src="/photos/tint/Oslo%20vigeland-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Oslo%20vigeland-686656.jpg')"></span>
  </span>
  <a class="open" href="/oslo-vigeland" data-target="id-oslo-vigeland">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/oslo-monolitt" data-target="id-oslo-monolitt" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/blaskredtind" data-target="id-blaskredtind" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-blaskredtind" style="background-image: url('/photos/tint/Blaskredtind-65ba1d.jpg')" title="Blaskredtind">
  <img class="lazyload" data-src="/photos/thumbnail/Blaskredtind-ccf4df.jpg" src="/photos/tint/Blaskredtind-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Blaskredtind-686656.jpg')"></span>
  </span>
  <a class="open" href="/blaskredtind" data-target="id-blaskredtind">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/oslo-vigeland" data-target="id-oslo-vigeland" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/rose-hage" data-target="id-rose-hage" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>22.0</li>
    </ul> -->
</li>
<li class="item " id="id-rose-hage" style="background-image: url('/photos/tint/Rose%20hage-65ba1d.jpg')" title="Rose hage">
  <img class="lazyload" data-src="/photos/thumbnail/Rose%20hage-ccf4df.jpg" src="/photos/tint/Rose%20hage-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Rose%20hage-686656.jpg')"></span>
  </span>
  <a class="open" href="/rose-hage" data-target="id-rose-hage">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/blaskredtind" data-target="id-blaskredtind" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/jungle" data-target="id-jungle" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/13</li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
    </ul> -->
</li>
<li class="item " id="id-jungle" style="background-image: url('/photos/tint/Jungle-65ba1d.jpg')" title="Jungle">
  <img class="lazyload" data-src="/photos/thumbnail/Jungle-ccf4df.jpg" src="/photos/tint/Jungle-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Jungle-686656.jpg')"></span>
  </span>
  <a class="open" href="/jungle" data-target="id-jungle">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/rose-hage" data-target="id-rose-hage" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/prestekrave" data-target="id-prestekrave" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
    </ul> -->
</li>
<li class="item " id="id-prestekrave" style="background-image: url('/photos/tint/Prestekrave-65ba1d.jpg')" title="Prestekrave">
  <img class="lazyload" data-src="/photos/thumbnail/Prestekrave-ccf4df.jpg" src="/photos/tint/Prestekrave-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Prestekrave-686656.jpg')"></span>
  </span>
  <a class="open" href="/prestekrave" data-target="id-prestekrave">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/jungle" data-target="id-jungle" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/glomfjord" data-target="id-glomfjord" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/40</li>
    <li><span class="aperture"><em>f</em>/</span>0.0</li>
    </ul> -->
</li>
<li class="item " id="id-glomfjord" style="background-image: url('/photos/tint/Glomfjord-65ba1d.jpg')" title="Glomfjord">
  <img class="lazyload" data-src="/photos/thumbnail/Glomfjord-ccf4df.jpg" src="/photos/tint/Glomfjord-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Glomfjord-686656.jpg')"></span>
  </span>
  <a class="open" href="/glomfjord" data-target="id-glomfjord">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/prestekrave" data-target="id-prestekrave" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/glomfjord-demning" data-target="id-glomfjord-demning" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>16.0</li>
    </ul> -->
</li>
<li class="item " id="id-glomfjord-demning" style="background-image: url('/photos/tint/Glomfjord%20demning-65ba1d.jpg')" title="Glomfjord demning">
  <img class="lazyload" data-src="/photos/thumbnail/Glomfjord%20demning-ccf4df.jpg" src="/photos/tint/Glomfjord%20demning-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Glomfjord%20demning-686656.jpg')"></span>
  </span>
  <a class="open" href="/glomfjord-demning" data-target="id-glomfjord-demning">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/glomfjord" data-target="id-glomfjord" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/kjerringtind" data-target="id-kjerringtind" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-kjerringtind" style="background-image: url('/photos/tint/Kjerringtind-65ba1d.jpg')" title="Kjerringtind">
  <img class="lazyload" data-src="/photos/thumbnail/Kjerringtind-ccf4df.jpg" src="/photos/tint/Kjerringtind-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Kjerringtind-686656.jpg')"></span>
  </span>
  <a class="open" href="/kjerringtind" data-target="id-kjerringtind">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/glomfjord-demning" data-target="id-glomfjord-demning" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/segla-fjord" data-target="id-segla-fjord" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-segla-fjord" style="background-image: url('/photos/tint/Segla%20fjord-65ba1d.jpg')" title="Segla fjord">
  <img class="lazyload" data-src="/photos/thumbnail/Segla%20fjord-ccf4df.jpg" src="/photos/tint/Segla%20fjord-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Segla%20fjord-686656.jpg')"></span>
  </span>
  <a class="open" href="/segla-fjord" data-target="id-segla-fjord">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/kjerringtind" data-target="id-kjerringtind" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/senja-fjord-2" data-target="id-senja-fjord-2" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
    </ul> -->
</li>
<li class="item " id="id-senja-fjord-2" style="background-image: url('/photos/tint/Senja%20fjord%202-65ba1d.jpg')" title="Senja fjord 2">
  <img class="lazyload" data-src="/photos/thumbnail/Senja%20fjord%202-ccf4df.jpg" src="/photos/tint/Senja%20fjord%202-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Senja%20fjord%202-686656.jpg')"></span>
  </span>
  <a class="open" href="/senja-fjord-2" data-target="id-senja-fjord-2">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/segla-fjord" data-target="id-segla-fjord" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/breitind" data-target="id-breitind" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
    </ul> -->
</li>
<li class="item " id="id-breitind" style="background-image: url('/photos/tint/Breitind-65ba1d.jpg')" title="Breitind">
  <img class="lazyload" data-src="/photos/thumbnail/Breitind-ccf4df.jpg" src="/photos/tint/Breitind-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Breitind-686656.jpg')"></span>
  </span>
  <a class="open" href="/breitind" data-target="id-breitind">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/senja-fjord-2" data-target="id-senja-fjord-2" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/senja-fjord" data-target="id-senja-fjord" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-senja-fjord" style="background-image: url('/photos/tint/Senja%20fjord-65ba1d.jpg')" title="Senja fjord">
  <img class="lazyload" data-src="/photos/thumbnail/Senja%20fjord-ccf4df.jpg" src="/photos/tint/Senja%20fjord-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Senja%20fjord-686656.jpg')"></span>
  </span>
  <a class="open" href="/senja-fjord" data-target="id-senja-fjord">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/breitind" data-target="id-breitind" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/road-above-skies" data-target="id-road-above-skies" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-road-above-skies" style="background-image: url('/photos/tint/Road%20above%20skies-65ba1d.jpg')" title="Road above skies">
  <img class="lazyload" data-src="/photos/thumbnail/Road%20above%20skies-ccf4df.jpg" src="/photos/tint/Road%20above%20skies-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Road%20above%20skies-686656.jpg')"></span>
  </span>
  <a class="open" href="/road-above-skies" data-target="id-road-above-skies">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/senja-fjord" data-target="id-senja-fjord" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/store-blamann" data-target="id-store-blamann" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>8.0</li>
    </ul> -->
</li>
<li class="item " id="id-store-blamann" style="background-image: url('/photos/tint/Store%20Blamann-65ba1d.jpg')" title="Store Blamann">
  <img class="lazyload" data-src="/photos/thumbnail/Store%20Blamann-ccf4df.jpg" src="/photos/tint/Store%20Blamann-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Store%20Blamann-686656.jpg')"></span>
  </span>
  <a class="open" href="/store-blamann" data-target="id-store-blamann">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/road-above-skies" data-target="id-road-above-skies" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tinden-above-skies" data-target="id-tinden-above-skies" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/200</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
    </ul> -->
</li>
<li class="item " id="id-tinden-above-skies" style="background-image: url('/photos/tint/Tinden%20above_skies-65ba1d.jpg')" title="Tinden above_skies">
  <img class="lazyload" data-src="/photos/thumbnail/Tinden%20above_skies-ccf4df.jpg" src="/photos/tint/Tinden%20above_skies-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tinden%20above_skies-686656.jpg')"></span>
  </span>
  <a class="open" href="/tinden-above-skies" data-target="id-tinden-above-skies">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/store-blamann" data-target="id-store-blamann" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/ersfjordtraversen-above-skies" data-target="id-ersfjordtraversen-above-skies" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/640</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-ersfjordtraversen-above-skies" style="background-image: url('/photos/tint/Ersfjordtraversen%20above%20skies-65ba1d.jpg')" title="Ersfjordtraversen above skies">
  <img class="lazyload" data-src="/photos/thumbnail/Ersfjordtraversen%20above%20skies-ccf4df.jpg" src="/photos/tint/Ersfjordtraversen%20above%20skies-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Ersfjordtraversen%20above%20skies-686656.jpg')"></span>
  </span>
  <a class="open" href="/ersfjordtraversen-above-skies" data-target="id-ersfjordtraversen-above-skies">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tinden-above-skies" data-target="id-tinden-above-skies" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/buren-above-skies" data-target="id-buren-above-skies" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>10.0</li>
    </ul> -->
</li>
<li class="item " id="id-buren-above-skies" style="background-image: url('/photos/tint/Buren%20above%20skies-65ba1d.jpg')" title="Buren above skies">
  <img class="lazyload" data-src="/photos/thumbnail/Buren%20above%20skies-ccf4df.jpg" src="/photos/tint/Buren%20above%20skies-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Buren%20above%20skies-686656.jpg')"></span>
  </span>
  <a class="open" href="/buren-above-skies" data-target="id-buren-above-skies">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/ersfjordtraversen-above-skies" data-target="id-ersfjordtraversen-above-skies" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/brosmetind" data-target="id-brosmetind" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/25</li>
    <li><span class="aperture"><em>f</em>/</span>25.0</li>
    </ul> -->
</li>
<li class="item " id="id-brosmetind" style="background-image: url('/photos/tint/Brosmetind-65ba1d.jpg')" title="Brosmetind">
  <img class="lazyload" data-src="/photos/thumbnail/Brosmetind-ccf4df.jpg" src="/photos/tint/Brosmetind-65ba1d.jpg" height="2048" width="1365" />
  <span class="full">
    <span style="background-image: url('/photos/large/Brosmetind-686656.jpg')"></span>
  </span>
  <a class="open" href="/brosmetind" data-target="id-brosmetind">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/buren-above-skies" data-target="id-buren-above-skies" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/skamtind-storstolpan-panorama" data-target="id-skamtind-storstolpan-panorama" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/1250</li>
    <li><span class="aperture"><em>f</em>/</span>5.0</li>
    </ul> -->
</li>
<li class="item " id="id-skamtind-storstolpan-panorama" style="background-image: url('/photos/tint/Skamtind%20storstolpan%20panorama-65ba1d.jpg')" title="Skamtind storstolpan panorama">
  <img class="lazyload" data-src="/photos/thumbnail/Skamtind%20storstolpan%20panorama-ccf4df.jpg" src="/photos/tint/Skamtind%20storstolpan%20panorama-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Skamtind%20storstolpan%20panorama-686656.jpg')"></span>
  </span>
  <a class="open" href="/skamtind-storstolpan-panorama" data-target="id-skamtind-storstolpan-panorama">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/brosmetind" data-target="id-brosmetind" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hollendaren" data-target="id-hollendaren" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-hollendaren" style="background-image: url('/photos/tint/Hollendaren-65ba1d.jpg')" title="Hollendaren">
  <img class="lazyload" data-src="/photos/thumbnail/Hollendaren-ccf4df.jpg" src="/photos/tint/Hollendaren-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hollendaren-686656.jpg')"></span>
  </span>
  <a class="open" href="/hollendaren" data-target="id-hollendaren">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/skamtind-storstolpan-panorama" data-target="id-skamtind-storstolpan-panorama" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/malangen-bad" data-target="id-malangen-bad" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/1000</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-malangen-bad" style="background-image: url('/photos/tint/Malangen%20bad-65ba1d.jpg')" title="Malangen bad">
  <img class="lazyload" data-src="/photos/thumbnail/Malangen%20bad-ccf4df.jpg" src="/photos/tint/Malangen%20bad-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Malangen%20bad-686656.jpg')"></span>
  </span>
  <a class="open" href="/malangen-bad" data-target="id-malangen-bad">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hollendaren" data-target="id-hollendaren" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/malangen-skog-fjell" data-target="id-malangen-skog-fjell" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/4000</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-malangen-skog-fjell" style="background-image: url('/photos/tint/Malangen%20skog%20fjell-65ba1d.jpg')" title="Malangen skog fjell">
  <img class="lazyload" data-src="/photos/thumbnail/Malangen%20skog%20fjell-ccf4df.jpg" src="/photos/tint/Malangen%20skog%20fjell-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Malangen%20skog%20fjell-686656.jpg')"></span>
  </span>
  <a class="open" href="/malangen-skog-fjell" data-target="id-malangen-skog-fjell">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/malangen-bad" data-target="id-malangen-bad" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/malangen-hav-fjell" data-target="id-malangen-hav-fjell" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/320</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-malangen-hav-fjell" style="background-image: url('/photos/tint/Malangen%20hav%20fjell-65ba1d.jpg')" title="Malangen hav fjell">
  <img class="lazyload" data-src="/photos/thumbnail/Malangen%20hav%20fjell-ccf4df.jpg" src="/photos/tint/Malangen%20hav%20fjell-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Malangen%20hav%20fjell-686656.jpg')"></span>
  </span>
  <a class="open" href="/malangen-hav-fjell" data-target="id-malangen-hav-fjell">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/malangen-skog-fjell" data-target="id-malangen-skog-fjell" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sortinden-sor" data-target="id-sortinden-sor" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>29.0</li>
    </ul> -->
</li>
<li class="item " id="id-sortinden-sor" style="background-image: url('/photos/tint/Sortinden%20sor-65ba1d.jpg')" title="Sortinden sor">
  <img class="lazyload" data-src="/photos/thumbnail/Sortinden%20sor-ccf4df.jpg" src="/photos/tint/Sortinden%20sor-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sortinden%20sor-686656.jpg')"></span>
  </span>
  <a class="open" href="/sortinden-sor" data-target="id-sortinden-sor">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/malangen-hav-fjell" data-target="id-malangen-hav-fjell" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sortinden-ned" data-target="id-sortinden-ned" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>14.0</li>
    </ul> -->
</li>
<li class="item " id="id-sortinden-ned" style="background-image: url('/photos/tint/Sortinden%20ned-65ba1d.jpg')" title="Sortinden ned">
  <img class="lazyload" data-src="/photos/thumbnail/Sortinden%20ned-ccf4df.jpg" src="/photos/tint/Sortinden%20ned-65ba1d.jpg" height="3935" width="5902" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sortinden%20ned-686656.jpg')"></span>
  </span>
  <a class="open" href="/sortinden-ned" data-target="id-sortinden-ned">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sortinden-sor" data-target="id-sortinden-sor" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sortinden-nord" data-target="id-sortinden-nord" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>14.0</li>
    </ul> -->
</li>
<li class="item " id="id-sortinden-nord" style="background-image: url('/photos/tint/Sortinden%20nord-65ba1d.jpg')" title="Sortinden nord">
  <img class="lazyload" data-src="/photos/thumbnail/Sortinden%20nord-ccf4df.jpg" src="/photos/tint/Sortinden%20nord-65ba1d.jpg" height="3918" width="5877" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sortinden%20nord-686656.jpg')"></span>
  </span>
  <a class="open" href="/sortinden-nord" data-target="id-sortinden-nord">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sortinden-ned" data-target="id-sortinden-ned" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/nordfjordtind" data-target="id-nordfjordtind" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>14.0</li>
    </ul> -->
</li>
<li class="item " id="id-nordfjordtind" style="background-image: url('/photos/tint/Nordfjordtind-65ba1d.jpg')" title="Nordfjordtind">
  <img class="lazyload" data-src="/photos/thumbnail/Nordfjordtind-ccf4df.jpg" src="/photos/tint/Nordfjordtind-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Nordfjordtind-686656.jpg')"></span>
  </span>
  <a class="open" href="/nordfjordtind" data-target="id-nordfjordtind">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sortinden-nord" data-target="id-sortinden-nord" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hamperokken-view-descent" data-target="id-hamperokken-view-descent" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-hamperokken-view-descent" style="background-image: url('/photos/tint/Hamperokken%20view%20descent-65ba1d.jpg')" title="Hamperokken view descent">
  <img class="lazyload" data-src="/photos/thumbnail/Hamperokken%20view%20descent-ccf4df.jpg" src="/photos/tint/Hamperokken%20view%20descent-65ba1d.jpg" height="3814" width="5781" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hamperokken%20view%20descent-686656.jpg')"></span>
  </span>
  <a class="open" href="/hamperokken-view-descent" data-target="id-hamperokken-view-descent">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/nordfjordtind" data-target="id-nordfjordtind" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hamperokken-view-ascent" data-target="id-hamperokken-view-ascent" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/2000</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
    </ul> -->
</li>
<li class="item " id="id-hamperokken-view-ascent" style="background-image: url('/photos/tint/Hamperokken%20view%20ascent-65ba1d.jpg')" title="Hamperokken view ascent">
  <img class="lazyload" data-src="/photos/thumbnail/Hamperokken%20view%20ascent-ccf4df.jpg" src="/photos/tint/Hamperokken%20view%20ascent-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hamperokken%20view%20ascent-686656.jpg')"></span>
  </span>
  <a class="open" href="/hamperokken-view-ascent" data-target="id-hamperokken-view-ascent">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hamperokken-view-descent" data-target="id-hamperokken-view-descent" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/djeveltanna" data-target="id-djeveltanna" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/3200</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-djeveltanna" style="background-image: url('/photos/tint/Djeveltanna-65ba1d.jpg')" title="Djeveltanna">
  <img class="lazyload" data-src="/photos/thumbnail/Djeveltanna-ccf4df.jpg" src="/photos/tint/Djeveltanna-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Djeveltanna-686656.jpg')"></span>
  </span>
  <a class="open" href="/djeveltanna" data-target="id-djeveltanna">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hamperokken-view-ascent" data-target="id-hamperokken-view-ascent" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/djeveltanna-opp" data-target="id-djeveltanna-opp" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>10.0</li>
    </ul> -->
</li>
<li class="item " id="id-djeveltanna-opp" style="background-image: url('/photos/tint/Djeveltanna%20opp-65ba1d.jpg')" title="Djeveltanna opp">
  <img class="lazyload" data-src="/photos/thumbnail/Djeveltanna%20opp-ccf4df.jpg" src="/photos/tint/Djeveltanna%20opp-65ba1d.jpg" height="3823" width="5734" />
  <span class="full">
    <span style="background-image: url('/photos/large/Djeveltanna%20opp-686656.jpg')"></span>
  </span>
  <a class="open" href="/djeveltanna-opp" data-target="id-djeveltanna-opp">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/djeveltanna" data-target="id-djeveltanna" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/malangen-topside" data-target="id-malangen-topside" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/60</li>
    <li><span class="aperture"><em>f</em>/</span>25.0</li>
    </ul> -->
</li>
<li class="item " id="id-malangen-topside" style="background-image: url('/photos/tint/Malangen%20topside-65ba1d.jpg')" title="Malangen topside">
  <img class="lazyload" data-src="/photos/thumbnail/Malangen%20topside-ccf4df.jpg" src="/photos/tint/Malangen%20topside-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Malangen%20topside-686656.jpg')"></span>
  </span>
  <a class="open" href="/malangen-topside" data-target="id-malangen-topside">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/djeveltanna-opp" data-target="id-djeveltanna-opp" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/malangen-walls" data-target="id-malangen-walls" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-malangen-walls" style="background-image: url('/photos/tint/Malangen%20walls-65ba1d.jpg')" title="Malangen walls">
  <img class="lazyload" data-src="/photos/thumbnail/Malangen%20walls-ccf4df.jpg" src="/photos/tint/Malangen%20walls-65ba1d.jpg" height="5727" width="3818" />
  <span class="full">
    <span style="background-image: url('/photos/large/Malangen%20walls-686656.jpg')"></span>
  </span>
  <a class="open" href="/malangen-walls" data-target="id-malangen-walls">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/malangen-topside" data-target="id-malangen-topside" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/ramborenna" data-target="id-ramborenna" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-ramborenna" style="background-image: url('/photos/tint/Ramborenna-65ba1d.jpg')" title="Ramborenna">
  <img class="lazyload" data-src="/photos/thumbnail/Ramborenna-ccf4df.jpg" src="/photos/tint/Ramborenna-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Ramborenna-686656.jpg')"></span>
  </span>
  <a class="open" href="/ramborenna" data-target="id-ramborenna">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/malangen-walls" data-target="id-malangen-walls" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tromsdalen-pro" data-target="id-tromsdalen-pro" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-tromsdalen-pro" style="background-image: url('/photos/tint/Tromsdalen%20pro-65ba1d.jpg')" title="Tromsdalen pro">
  <img class="lazyload" data-src="/photos/thumbnail/Tromsdalen%20pro-ccf4df.jpg" src="/photos/tint/Tromsdalen%20pro-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tromsdalen%20pro-686656.jpg')"></span>
  </span>
  <a class="open" href="/tromsdalen-pro" data-target="id-tromsdalen-pro">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/ramborenna" data-target="id-ramborenna" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tromsdalen-nedsnodde-traer-himmel" data-target="id-tromsdalen-nedsnodde-traer-himmel" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/500</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-tromsdalen-nedsnodde-traer-himmel" style="background-image: url('/photos/tint/Tromsdalen%20nedsnodde%20traer%20himmel-65ba1d.jpg')" title="Tromsdalen nedsnodde traer himmel">
  <img class="lazyload" data-src="/photos/thumbnail/Tromsdalen%20nedsnodde%20traer%20himmel-ccf4df.jpg" src="/photos/tint/Tromsdalen%20nedsnodde%20traer%20himmel-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tromsdalen%20nedsnodde%20traer%20himmel-686656.jpg')"></span>
  </span>
  <a class="open" href="/tromsdalen-nedsnodde-traer-himmel" data-target="id-tromsdalen-nedsnodde-traer-himmel">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tromsdalen-pro" data-target="id-tromsdalen-pro" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tromsdalen-nedsnodde-traer" data-target="id-tromsdalen-nedsnodde-traer" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/250</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-tromsdalen-nedsnodde-traer" style="background-image: url('/photos/tint/Tromsdalen%20nedsnodde%20traer-65ba1d.jpg')" title="Tromsdalen nedsnodde traer">
  <img class="lazyload" data-src="/photos/thumbnail/Tromsdalen%20nedsnodde%20traer-ccf4df.jpg" src="/photos/tint/Tromsdalen%20nedsnodde%20traer-65ba1d.jpg" height="6000" width="4000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tromsdalen%20nedsnodde%20traer-686656.jpg')"></span>
  </span>
  <a class="open" href="/tromsdalen-nedsnodde-traer" data-target="id-tromsdalen-nedsnodde-traer">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tromsdalen-nedsnodde-traer-himmel" data-target="id-tromsdalen-nedsnodde-traer-himmel" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/fagerfjellet-sunrise-bw" data-target="id-fagerfjellet-sunrise-bw" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/160</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-fagerfjellet-sunrise-bw" style="background-image: url('/photos/tint/Fagerfjellet%20sunrise%20bw-65ba1d.jpg')" title="Fagerfjellet sunrise bw">
  <img class="lazyload" data-src="/photos/thumbnail/Fagerfjellet%20sunrise%20bw-ccf4df.jpg" src="/photos/tint/Fagerfjellet%20sunrise%20bw-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Fagerfjellet%20sunrise%20bw-686656.jpg')"></span>
  </span>
  <a class="open" href="/fagerfjellet-sunrise-bw" data-target="id-fagerfjellet-sunrise-bw">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tromsdalen-nedsnodde-traer" data-target="id-tromsdalen-nedsnodde-traer" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/fagerfjellet-sunrise-before" data-target="id-fagerfjellet-sunrise-before" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-fagerfjellet-sunrise-before" style="background-image: url('/photos/tint/Fagerfjellet%20sunrise%20before-65ba1d.jpg')" title="Fagerfjellet sunrise before">
  <img class="lazyload" data-src="/photos/thumbnail/Fagerfjellet%20sunrise%20before-ccf4df.jpg" src="/photos/tint/Fagerfjellet%20sunrise%20before-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Fagerfjellet%20sunrise%20before-686656.jpg')"></span>
  </span>
  <a class="open" href="/fagerfjellet-sunrise-before" data-target="id-fagerfjellet-sunrise-before">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/fagerfjellet-sunrise-bw" data-target="id-fagerfjellet-sunrise-bw" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hamperokken-sunrise" data-target="id-hamperokken-sunrise" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-hamperokken-sunrise" style="background-image: url('/photos/tint/Hamperokken%20sunrise-65ba1d.jpg')" title="Hamperokken sunrise">
  <img class="lazyload" data-src="/photos/thumbnail/Hamperokken%20sunrise-ccf4df.jpg" src="/photos/tint/Hamperokken%20sunrise-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hamperokken%20sunrise-686656.jpg')"></span>
  </span>
  <a class="open" href="/hamperokken-sunrise" data-target="id-hamperokken-sunrise">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/fagerfjellet-sunrise-before" data-target="id-fagerfjellet-sunrise-before" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hamperokken-sunrise-bw" data-target="id-hamperokken-sunrise-bw" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-hamperokken-sunrise-bw" style="background-image: url('/photos/tint/Hamperokken%20sunrise_bw-65ba1d.jpg')" title="Hamperokken sunrise_bw">
  <img class="lazyload" data-src="/photos/thumbnail/Hamperokken%20sunrise_bw-ccf4df.jpg" src="/photos/tint/Hamperokken%20sunrise_bw-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hamperokken%20sunrise_bw-686656.jpg')"></span>
  </span>
  <a class="open" href="/hamperokken-sunrise-bw" data-target="id-hamperokken-sunrise-bw">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hamperokken-sunrise" data-target="id-hamperokken-sunrise" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/fagerfjellet-view" data-target="id-fagerfjellet-view" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-fagerfjellet-view" style="background-image: url('/photos/tint/Fagerfjellet%20view-65ba1d.jpg')" title="Fagerfjellet view">
  <img class="lazyload" data-src="/photos/thumbnail/Fagerfjellet%20view-ccf4df.jpg" src="/photos/tint/Fagerfjellet%20view-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Fagerfjellet%20view-686656.jpg')"></span>
  </span>
  <a class="open" href="/fagerfjellet-view" data-target="id-fagerfjellet-view">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hamperokken-sunrise-bw" data-target="id-hamperokken-sunrise-bw" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tinden-front" data-target="id-tinden-front" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/100</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-tinden-front" style="background-image: url('/photos/tint/Tinden%20front-65ba1d.jpg')" title="Tinden front">
  <img class="lazyload" data-src="/photos/thumbnail/Tinden%20front-ccf4df.jpg" src="/photos/tint/Tinden%20front-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tinden%20front-686656.jpg')"></span>
  </span>
  <a class="open" href="/tinden-front" data-target="id-tinden-front">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/fagerfjellet-view" data-target="id-fagerfjellet-view" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hamperokken-valley" data-target="id-hamperokken-valley" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>6.3</li>
    </ul> -->
</li>
<li class="item " id="id-hamperokken-valley" style="background-image: url('/photos/tint/Hamperokken%20valley-65ba1d.jpg')" title="Hamperokken valley">
  <img class="lazyload" data-src="/photos/thumbnail/Hamperokken%20valley-ccf4df.jpg" src="/photos/tint/Hamperokken%20valley-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hamperokken%20valley-686656.jpg')"></span>
  </span>
  <a class="open" href="/hamperokken-valley" data-target="id-hamperokken-valley">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tinden-front" data-target="id-tinden-front" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/tinden-back" data-target="id-tinden-back" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/80</li>
    <li><span class="aperture"><em>f</em>/</span>25.0</li>
    </ul> -->
</li>
<li class="item " id="id-tinden-back" style="background-image: url('/photos/tint/Tinden%20back-65ba1d.jpg')" title="Tinden back">
  <img class="lazyload" data-src="/photos/thumbnail/Tinden%20back-ccf4df.jpg" src="/photos/tint/Tinden%20back-65ba1d.jpg" height="1365" width="2048" />
  <span class="full">
    <span style="background-image: url('/photos/large/Tinden%20back-686656.jpg')"></span>
  </span>
  <a class="open" href="/tinden-back" data-target="id-tinden-back">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hamperokken-valley" data-target="id-hamperokken-valley" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/hiortfjellet-mathias" data-target="id-hiortfjellet-mathias" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/125</li>
    <li><span class="aperture"><em>f</em>/</span>16.0</li>
    </ul> -->
</li>
<li class="item " id="id-hiortfjellet-mathias" style="background-image: url('/photos/tint/Hiortfjellet%20mathias-65ba1d.jpg')" title="Hiortfjellet mathias">
  <img class="lazyload" data-src="/photos/thumbnail/Hiortfjellet%20mathias-ccf4df.jpg" src="/photos/tint/Hiortfjellet%20mathias-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Hiortfjellet%20mathias-686656.jpg')"></span>
  </span>
  <a class="open" href="/hiortfjellet-mathias" data-target="id-hiortfjellet-mathias">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/tinden-back" data-target="id-tinden-back" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/foxfonna-pulka" data-target="id-foxfonna-pulka" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/800</li>
    <li><span class="aperture"><em>f</em>/</span>5.6</li>
    </ul> -->
</li>
<li class="item " id="id-foxfonna-pulka" style="background-image: url('/photos/tint/Foxfonna%20pulka-65ba1d.jpg')" title="Foxfonna pulka">
  <img class="lazyload" data-src="/photos/thumbnail/Foxfonna%20pulka-ccf4df.jpg" src="/photos/tint/Foxfonna%20pulka-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Foxfonna%20pulka-686656.jpg')"></span>
  </span>
  <a class="open" href="/foxfonna-pulka" data-target="id-foxfonna-pulka">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/hiortfjellet-mathias" data-target="id-hiortfjellet-mathias" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/radar-northernlight" data-target="id-radar-northernlight" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/400</li>
    <li><span class="aperture"><em>f</em>/</span>4.0</li>
    </ul> -->
</li>
<li class="item " id="id-radar-northernlight" style="background-image: url('/photos/tint/Radar%20northernlight-65ba1d.jpg')" title="Radar northernlight">
  <img class="lazyload" data-src="/photos/thumbnail/Radar%20northernlight-ccf4df.jpg" src="/photos/tint/Radar%20northernlight-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Radar%20northernlight-686656.jpg')"></span>
  </span>
  <a class="open" href="/radar-northernlight" data-target="id-radar-northernlight">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/foxfonna-pulka" data-target="id-foxfonna-pulka" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/adventfjorden-out" data-target="id-adventfjorden-out" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>8/1</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
    </ul> -->
</li>
<li class="item " id="id-adventfjorden-out" style="background-image: url('/photos/tint/Adventfjorden%20Out-65ba1d.jpg')" title="Adventfjorden Out">
  <img class="lazyload" data-src="/photos/thumbnail/Adventfjorden%20Out-ccf4df.jpg" src="/photos/tint/Adventfjorden%20Out-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Adventfjorden%20Out-686656.jpg')"></span>
  </span>
  <a class="open" href="/adventfjorden-out" data-target="id-adventfjorden-out">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/radar-northernlight" data-target="id-radar-northernlight" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/adventfjorden-in" data-target="id-adventfjorden-in" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>2/1</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
    </ul> -->
</li>
<li class="item " id="id-adventfjorden-in" style="background-image: url('/photos/tint/Adventfjorden%20In-65ba1d.jpg')" title="Adventfjorden In">
  <img class="lazyload" data-src="/photos/thumbnail/Adventfjorden%20In-ccf4df.jpg" src="/photos/tint/Adventfjorden%20In-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Adventfjorden%20In-686656.jpg')"></span>
  </span>
  <a class="open" href="/adventfjorden-in" data-target="id-adventfjorden-in">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/adventfjorden-out" data-target="id-adventfjorden-out" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/sarkofagen" data-target="id-sarkofagen" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>8/5</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
    </ul> -->
</li>
<li class="item " id="id-sarkofagen" style="background-image: url('/photos/tint/Sarkofagen-65ba1d.jpg')" title="Sarkofagen">
  <img class="lazyload" data-src="/photos/thumbnail/Sarkofagen-ccf4df.jpg" src="/photos/tint/Sarkofagen-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Sarkofagen-686656.jpg')"></span>
  </span>
  <a class="open" href="/sarkofagen" data-target="id-sarkofagen">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/adventfjorden-in" data-target="id-adventfjorden-in" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <a href="/kho-milkyway" data-target="id-kho-milkyway" class="next" title="Go to next photo">
    <span>Next</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>1/50</li>
    <li><span class="aperture"><em>f</em>/</span>13.0</li>
    </ul> -->
</li>
<li class="item " id="id-kho-milkyway" style="background-image: url('/photos/tint/Kho%20milkyway-65ba1d.jpg')" title="Kho milkyway">
  <img class="lazyload" data-src="/photos/thumbnail/Kho%20milkyway-ccf4df.jpg" src="/photos/tint/Kho%20milkyway-65ba1d.jpg" height="4000" width="6000" />
  <span class="full">
    <span style="background-image: url('/photos/large/Kho%20milkyway-686656.jpg')"></span>
  </span>
  <a class="open" href="/kho-milkyway" data-target="id-kho-milkyway">Open</a>
  <a class="close" href="/">Close</a>
  <a href="/sarkofagen" data-target="id-sarkofagen" class="previous" title="Go to previous photo">
    <span>Previous</span>
  </a>
  <!-- <ul class="meta">
    <li>Canon EOS M50</li>
    <li>13/1</li>
    <li><span class="aperture"><em>f</em>/</span>3.5</li>
    </ul> -->
</li>
`);