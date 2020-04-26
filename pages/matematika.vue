<template>
  <section class="container mx-auto">
    <div class="px-8 space-y-15">
      <h1 class="font-bold text-3xl">➗ Matematika</h1>

      <post title="SRIJEDA, 29. travnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Riješi 1., 2. i 5. zadatak na 78. stranici udžbenika. Pazi na redoslijed izvođenja računskih radnji!
          </template>
        </assignment>
      </post>

      <post title="PONEDJELJAK, 27. travnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Riješi listić:
            <a
              class="text-blue-600 underline"
              target="_blank"
              rel="noopener"
              href="/matematika/pisano_dijeljenje_dvoznamenkastim_brojem.pdf"
            >
              Pisano dijeljenje dvoznamenkastim brojem
            </a>
          </template>
          <template v-slot:default>
            * Emily i Filipe, riješite samo 3. i 4. zadatak na 74. stranici udžbenika.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 21. travnja">
        <assignment title="Zadatak 1">
          <template v-slot:title>
            Podijeli na dulji način i rezultat provjeri množenjem.
          </template>
          <template v-slot:default>
            <p class="max-w-xs">
              <span>448 : 13 =</span>
              <span class="float-right">912 : 38 =</span>
            </p>
            <p class="max-w-xs">
              <span>360 : 14 =</span>
              <span class="float-right">705 : 47 =</span>
            </p>
            <p class="max-w-xs">
              <span>768 : 23 =</span>
              <span class="float-right">570 : 15 =</span>
            </p>
            <p class="max-w-xs">
              <span>3960 : 13 =</span>
              <span class="float-right">7630 : 74 =</span>
            </p>
            <p class="max-w-xs">
              <span>4328 : 16 =</span>
              <span class="float-right">9567 : 34 =</span>
            </p>
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:title>
            Izračunaj pazeći na računske radnje 1. i 2. stupnja. Pazi kako računaš zadatak sa zagradom.
          </template>
          <template v-slot:default>
            <p>348 • 25 + 19878 – 1232 : 22 =</p>
            <p>(585 : 15) • 13 + 3872 =</p>
          </template>
        </assignment>
      </post>

      <post title="SRIJEDA, 15. travnja">
        <assignment title="Uoči">
          <template v-slot:default>
            6 : 2 = 3 <br/>
            60 : 20 = 3 <br/>
            240 : 80 = 3
          </template>
        </assignment>

        <assignment title="Promotri">
          <template v-slot:default>
            <div class="pl-2 leading-5">
              <p><strong>86</strong>0 : 20 = 43</p>
              <p class="underline"><span class="-ml-2">-</span> <span class="-ml-px">80</span></p>
              <p><span class="ml-2"></span> 60</p>
              <p class="underline"><span class="-ml-px">-</span> 60</p>
              <p class="ml-4">0</p>
            </div>
            <div class="flex mt-2">
              <div class="pl-2 leading-5 mr-4">
                <p><strong>86</strong>2 : 20 = 43</p>
                <p class="underline"><span class="-ml-2">-</span> <span class="-ml-px">80</span></p>
                <p><span class="ml-2"></span> 62</p>
                <p class="underline"><span class="-ml-px">-</span> 60</p>
                <p class="ml-4">2 <small>ostatak</small></p>
              </div>
              <div class="pl-2 leading-5">
                <p>Provjera:</p>
                <p class="mt-1 underline">43 • 20</p>
                <p>860</p>
                <p class="inline -ml-2 border-b border-gray-700">+ <span class="ml-3 pl-px">2</span></p>
                <p>862</p>
              </div>
            </div>
          </template>
        </assignment>

        <assignment title="Zadatak">
          <template v-slot:title>
            Riješi 1. i 3. zadatak na 68. stranici, 2. i 5. zadatak na 72. stranici u RB te množenjem provjeri točnost
            dijeljenja.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 14. travnja">
        <assignment title="Zadatak">
          <template v-slot:title>
            Odaberi jednu životnu zajednicu (šumu, travnjak ili more), biljku i životinju koja živi u njoj te sastavi
            svoju matematičku priču. Izračunaj.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 7. travnja">
        <assignment title="Zadatak 1">
          <template v-slot:title>
            Izračunaj. Pazi na redoslijed izvođenja računskih radnji! (Najprije množimo i dijelimo potom zbrajamo i
            oduzimamo. Ako se u zadatku pojavi zagrada, najprije se nje rješavamo zatim računamo slijeva udesno.)
          </template>
          <template v-slot:default>
            32 + 56 : 8 =<br>
            (32 + 56) : 8 =<br>
            120 - 100 : 20 + 5 =<br>
            18 + 3 • 5 – (15 - 5) : 2 =<br>
            18 + 15 – 10 : 2 =<br>
            230 + 200 : 20 - 10 =<br>
            20 - (14 - 4) : 2 + 3 • 4 =
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:title>
            Podijeli pisanim postupkom i rezultat provjeri množenjem.
          </template>
          <template v-slot:default>
            657 : 2 =<br>
            57321 : 7 =<br>
            8712 : 4 =
          </template>
        </assignment>
      </post>

      <post title="PETAK, 3. travnja">
        <assignment title="Zadatak 1">
          <template v-slot:default>
            <p class="underline">a = 6 cm</p>
            O = ?<br>
            P = ?
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:default>
            a = 5 cm
            <p class="underline">b = 7 cm</p>
            O = ?<br>
            P = ?
          </template>
        </assignment>

        <assignment title="Zadatak 3">
          <template v-slot:default>
            <p class="underline">O = 24 cm</p>
            a = ?<br>
            a = O : 4
          </template>
        </assignment>

        <assignment title="Zadatak 4">
          <template v-slot:title>
            Riješite u radnoj bilježnici 4. zadatak na 62. stranici i 4. zadatak na 63. stranici.
          </template>
          <template v-slot:default>
            * Emily i Filipe, riješite <i>zadatak 1</i> i <i>zadatak 2</i>.
          </template>
        </assignment>
      </post>

      <post title="SRIJEDA, 1. travnja">
        <assignment hide-title="true">
          <template v-slot:default>
            <div class="grid grid-cols-2 gap-10">
              <div>
                <p>KVADRAT</p>
                <p class="mt-2">O = 4 • a</p>
                <p>P = a • a</p>
                <p class="mt-2">npr.</p>
                <p class="underline">a = 2 cm</p>
                <p>O = 4 • 2 cm = 8 cm</p>
                <p>P = 2 cm • 2 cm = 4 cm<sup>2</sup></p>
              </div>
              <div>
                <p>PRAVOKUTNIK</p>
                <p class="mt-2">O = 2 • a + 2 • b = 2 • (a + b)</p>
                <p>P = a • b</p>
                <p class="mt-2">npr.</p>
                <p>a = 3 cm</p>
                <p class="underline">b = 4 cm</p>
                <p>O = 2 • 3 cm + 2 • 4 cm = 6 cm + 8 cm = 14 cm</p>
                <p>P = 3 cm • 4 cm = 12 cm<sup>2</sup></p>
              </div>
            </div>
          </template>
        </assignment>

        <assignment title="Zadatak 1">
          <template v-slot:title>
            Nacrtaj geometrijski lik ABCD čija duljina stranice AB iznosi 6cm, a duljina stranice BC je dva puta manja.
            <ul>
              <li>a) Koji si geometrijski lik nacrtala/nacrtao?</li>
              <li>b) Izračunaj opseg toga lika.</li>
              <li>c) Izračunaj površinu toga lika.</li>
            </ul>
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:title>
            Riješite 2. i 3. zadatak na 60. stranici i 1. zadatak na 63. stranici u radnoj bilježnici.
          </template>
          <template v-slot:default>
            * Emily i Filipe, riješite samo 2. i 3. zadatak na 60. stranici i 1. zadatak na 63. stranici u radnoj
            bilježnici.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 24. ožujka">
        <assignment title="Ponovimo">
          <template v-slot:default>
            <p>Opseg - zbroj duljina stranica</p>
            <div class="sm:flex mb-5 sm:mb-0">
              <div class="flex-shrink-0">
                <div class="relative inline-block px-6 py-10">
                  <p class="px-5 py-3 border text-center">
                    Opseg <br/>
                    pravokutnika
                  </p>
                  <div class="absolute inset-0 flex items-center">
                    <span class="text-left ml-2">a</span>
                    <span class="text-right ml-auto mr-2">a</span>
                  </div>
                  <span class="absolute top-0 inset-x-0 text-center mt-4">b</span>
                  <span class="absolute bottom-0 inset-x-0 text-center mb-4">b</span>
                </div>
              </div>
              <div class="w-full flex-shrink-0 flex items-center">
                <span class="sm:ml-5">
                  <span class="font-semibold">O</span>
                  = a + a + b + b
                  <span class="font-semibold"> = 2 • (a + b)</span>
                </span>
              </div>
            </div>

            <div class="sm:flex">
              <div class="flex-shrink-0">
                <div class="relative inline-block px-6 py-10">
                  <div class="w-24 h-24 border flex items-center justify-center text-center">
                    Opseg <br/>
                    kvadrata
                  </div>
                  <div class="absolute inset-0 flex items-center">
                    <span class="text-left ml-2">a</span>
                    <span class="text-right ml-auto mr-2">a</span>
                  </div>
                  <span class="absolute top-0 inset-x-0 text-center mt-4">a</span>
                  <span class="absolute bottom-0 inset-x-0 text-center mb-4">a</span>
                </div>
              </div>
              <div class="w-full flex-shrink-0 flex items-center">
                <span class="sm:ml-5">
                  <span class="font-semibold">O</span>
                  = a + a + a + a
                  <span class="font-semibold"> = 4 • a</span>
                </span>
              </div>
            </div>
          </template>
        </assignment>

        <assignment title="Zadatak">
          <template v-slot:title>
            Riješite 1. zadatak u radnoj bilježnici na 60. stranici.
          </template>
        </assignment>
      </post>

      <post title="PONEDJELJAK, 23. ožujka">
        <assignment title="Zadatak 1">
          <template v-slot:title>
            Kućanstvo jedne obitelji dnevno potroši 200 litara vode. Koliko litara vode potroši to kućanstvo za 4 dana?
          </template>
          <template v-slot:default>
            Račun: <br/>
            Odgovor:
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:title>
            Učenici 4.a razreda popiju 10 litara vode dnevno tijekom nastave. Izračunaj koliko će vode popiti za tjedan
            dana.
          </template>
          <template v-slot:default>
            Račun: <br/>
            Odgovor:
          </template>
        </assignment>

        <assignment title="Zadatak 3">
          <template v-slot:title>
            U Jadranskome moru živi 3 540 biljnih i životinjskih vrsta. Ako ih je jednako mnogo, izračunaj koliko je
            biljnih, a koliko životinjskih vrsta.
          </template>
          <template v-slot:default>
            Račun: <br/>
            Odgovor:
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
              href="https://youtu.be/rMyImeiAJqo"
            >
              &#128279; <span class="underline">Dijeljenje dvoznamenkastim brojem - Youtube</span>
            </a>
          </li>
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.artrea.com.hr/matematika4raz.html"
            >
              &#128279; <span class="underline">Matematika za 4. razred - Artrea</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
