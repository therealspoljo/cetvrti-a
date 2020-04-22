<template>
  <section class="container mx-auto">
    <div class="px-8 space-y-15">
      <h1 class="font-bold text-3xl">🌳 Priroda i društvo</h1>

      <post title="PETAK, 17. travnja">
        <assignment>
          <template v-slot:title>
            Izaberi jednu zaštićenu biljku ili životinju Republike Hrvatske i izradi o njoj plakat služeći se <i>Dječjom
            enciklopedijom</i> ili internetom. <br/>
            <strong>* OVAJ ĆE ZADATAK BITI OCIJENJEN 24. TRAVNJA! *</strong>
          </template>
          <template v-slot:default>
            <p class="mt-2">Npr. velebitska degenija; nacrtaj ju i zapiši:</p>
            <ul class="list-disc list-inside">
              <li>gdje raste</li>
              <li>na kojoj nadmorskoj visini</li>
              <li>tko i kada ju je otkrio</li>
              <li>koje je godine zaštićena</li>
              <li>na kojoj se kovanici nalazi</li>
            </ul>
          </template>
        </assignment>
      </post>

      <post title="SRIJEDA, 15. travnja">
        <assignment title="Zadatak 1">
          <template v-slot:title>
            Otkrij imena životinja koje žive u životnim zajednicama šume, travnjaka i mora. Rješenja napiši u
            odgovarajuće krugove.
          </template>
          <template v-slot:default>
            <p>
              ACISIL, KAR, LENJE, RITPEL, PINDU, CAKRTI, VACSKAKA, UKV, VASO, DEJVDEM, IRBA, KNUA, RIVJECAVE, BOHOTNICA,
              ELAPČ, ZANAFA, AVMR, LICAPREPE
            </p>
            <div class="mt-4 flex flex-wrap justify-around">
              <div class="inline-block w-32 sm:w-48">
                <p class="text-center mb-2">travnjak</p>
                <span class="block w-32 sm:w-48 h-32 sm:h-48 rounded-full border border-red-500"></span>
              </div>
              <div class="inline-block w-32 sm:w-48">
                <p class="text-center mb-2">more</p>
                <span class="block w-32 sm:w-48 h-32 sm:h-48 rounded-full border border-blue-500"></span>
              </div>
              <div class="inline-block w-32 sm:w-48">
                <p class="text-center mb-2">šuma</p>
                <span class="block w-32 sm:w-48 h-32 sm:h-48 rounded-full border border-green-500"></span>
              </div>
            </div>
          </template>
        </assignment>
        <assignment title="Zadatak 2">
          <template v-slot:title>
            Nacionalne parkove u Hrvatskoj pravilno zapiši i njihova imena poredaj abecednim redom.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 7. travnja">
        <assignment>
          <template v-slot:title>
            Istraži o lastinom repu i maslačku te napiši nekoliko podataka o njima.
          </template>
        </assignment>
      </post>

      <post title="UTORAK, 31. ožujka">
        <assignment title="Zadatak 1">
          <template v-slot:title>
            U neobičnim riječima pronađi glavne dijelove biljke. Čitaj slijeva nadesno i zdesna nalijevo. Pronađene
            pojmove zaokruži.
          </template>
          <template v-slot:default>
            <span>LATICACVIJETMED</span> <span class="ml-20">JENKORIJENCENTI</span> <br/>
            <span>DOLPDINAEMINAA</span> <span class="ml-20">KISTLISTRUNOLIST</span> <br/>
            <span>AKILJBATSSTABLO</span>
          </template>
        </assignment>

        <assignment title="Zadatak 2">
          <template v-slot:title>
            U bilježnicu nacrtaj biljku i označi njezine glavne dijelove.
          </template>
        </assignment>

        <assignment title="Zadatak 3">
          <template v-slot:title>
            Uzgojite novu biljku od ostataka voća i povrća.
          </template>
          <template v-slot:default>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.agroportal.hr/ekoloska-poljoprivreda/28344"
            >
              &#128279; <span class="underline">Kako uzgojiti nove biljke od ostataka voća i povrća</span>
            </a>
          </template>
        </assignment>
      </post>

      <post
        title="SRIJEDA, 25. ožujka"
        :links="[
          { title:'Vučedolska kultura - Enciklopedija.hr', url:'https://www.enciklopedija.hr/natuknica.aspx?ID=65567' },
          { title:'Vinkovačke jeseni', url:'http://vinkovackejeseni.hr/o-nama' },
        ]"
      >
        <assignment>
          <template v-slot:title>
            Istražite i napišite po tri natuknice o VUČEDOLSKOJ GOLUBICI (JAREBICI) i VINKOVAČKIM JESENIMA.
          </template>
        </assignment>
      </post>

      <post title="SRIJEDA, 25. ožujka">
        <assignment hide-title="true">
          <template v-slot:title>
            Većina vode koju crpimo iz jezera, rijeka i bunara potroši se uludo! Najviše vode baca se u kućanstvima.
          </template>
          <template v-slot:default>
            <p class="mb-1">
              91% kućanstvo<br/>
              88% tvornice<br/>
              31% gospodarstvo
            </p>
            <p>
              (*izvor: <i>Mali koraci – jednostavne zamisli koje mijenjaju planet Zemlju</i>, Glenn Murphy, Mozaik
              knjiga)
            </p>
          </template>
        </assignment>

        <assignment>
          <template v-slot:title>
            Napiši svojih pet ideja za pokretanje promjena u vezi s trošenjem vode u kućanstvima.
          </template>
        </assignment>

        <assignment title="Ponovimo">
          <template v-slot:title>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://wordwall.net/hr/resource/304322/kru%C5%BEenje-vode-u-prirodi"
            >
              &#128279; <span class="underline">Kruženje vode u prirodi - Wordwall</span>
            </a>
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
              href="/priroda-i-drustvo/strip.jpeg"
            >
              &#128279; <span class="underline">Zanimljivosti o Zemlji i životu na njoj</span>
            </a>
          </li>
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://wordwall.net/hr-hr/community/priroda-i-drustvo-4-razred"
            >
              &#128279; <span class="underline">Priroda i društvo za 4. razred - Wordwall</span>
            </a>
          </li>
          <li>
            <a
              class="text-blue-600"
              target="_blank"
              rel="noopener"
              href="https://www.nakladabombon.hr/proizvodi/bombon-igraonica/zadaci-krizaljke-i-osmosmjerke-86"
            >
              &#128279; <span class="underline">Križaljke i osmosmjerke</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
