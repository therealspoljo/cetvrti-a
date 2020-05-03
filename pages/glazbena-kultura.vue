<template>
  <section class="container mx-auto">
    <div class="px-8 space-y-15">
      <h1 class="font-bold text-3xl">🎶 Glazbena kultura</h1>

      <post title="SRIJEDA, 6. svibnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Poslušaj pjesmu koja je postala hit u cijelome svijetu u vrijeme koronavirusa:
            <a
              class="text-blue-600 underline"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=r-8qeJMPyfQ"
            >
              OH NA NA NA
            </a>
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 28. travnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Poslušaj glazbeni duet:
          </template>
          <template v-slot:default>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=t1q7gu-gHBY"
            >
              &#128279; <span class="underline">Meri Cetinić i Oliver Dragojević - More</span>
            </a>
          </template>
        </assignment>
      </post>

      <post title="ČETVRTAK, 16. travnja">
        <assignment>
          <template v-slot:title>
            Poslušaj pjesmu <i class='font-bold'>Planet Zemlja</i> povodom obilježavanja
            <i class='font-bold'>Dana planeta Zemlje</i>, 22. travnja.
          </template>
          <template v-slot:default>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=kOsf4t0BuIY"
            >
              &#128279; <span class="underline">Planet Zemlja</span>
            </a>
          </template>
        </assignment>
      </post>

      <post title="PONEDJELJAK, 30. ožujka">
        <assignment title="Poslušajmo">
          <template v-slot:default>
            <ul class="space-y-2">
              <li>
                <a
                  class="text-blue-600"
                  target="_blank"
                  rel="noopener"
                  href="/glazbena-kultura/divan_svijet.mpeg"
                >
                  &#128279; <span class="underline">Divan svijet</span>
                </a>
              </li>
              <li>
                <a
                  class="text-blue-600"
                  target="_blank"
                  rel="noopener"
                  href="/glazbena-kultura/do_re_mi.mpeg"
                >
                  &#128279; <span class="underline">Do re mi</span>
                </a>
              </li>
            </ul>
          </template>
        </assignment>
      </post>

      <post title="PONEDJELJAK, 23. ožujka">
        <assignment title="Poslušajmo">
          <template v-slot:default>
            <ul class="space-y-2">
              <li>
                <a
                  class="text-blue-600"
                  target="_blank"
                  rel="noopener"
                  href="https://www.youtube.com/watch?v=zT4RcfkC3lo"
                >
                  &#128279; <span class="underline">Teče, teče bistra voda</span>
                </a>
              </li>
            </ul>
          </template>
        </assignment>
      </post>

      <div>
        <h2><i><span class="font-semibold">Poveznice</span>:</i></h2>
        <ul class="space-y-2 mt-2">
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=AgSSAbY6VKU"
            >
              &#128279; <span class="underline">Stvaramo glazbu</span>
            </a>
          </li>
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.youtube.com/watch?v=l-dYNttdgl0"
            >
              &#128279; <span class="underline">A. Vivaldi - Proljeće</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
