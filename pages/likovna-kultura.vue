<template>
  <section class="container mx-auto">
    <div class="px-8 space-y-15">
      <h1 class="font-bold text-3xl">🎨 Likovna kultura</h1>

      <post title="ČETVRTAK, 30. travnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Izradi čudnovatu ribu od kartonske ambalaže, kamenčića, naplavina, plutenih čepova i sl.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 14. travnja">
        <assignment>
          <template v-slot:title>
            Nacrtaj šumu koja sudjeluje na natjecanju ljepote.
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
              href="/likovna-kultura/kompozicija_i_nijanse_boja.pdf"
            >
              &#128279; <span class="underline">Kompozicija i nijanse boja</span>
            </a>
          </li>
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="/likovna-kultura/kontrast_toplih_i_hladnih_boja_cudesna_suma.pdf"
            >
              &#128279; <span class="underline">Kontrast toplih i hladnih boja</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
