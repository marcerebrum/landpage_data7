<template>
  <div class="relative">
    <!-- Header do arquivo -->
    <div class="flex items-center justify-between bg-[#1E1E1E] text-tertiary/70 p-3 rounded-t-lg border-b border-tertiary/10">
      <div class="flex items-center gap-2">
        <span>App.vue</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-red-500">12 erros</span>
        <span class="text-yellow-500">8 avisos</span>
      </div>
    </div>

    <!-- Código com erros -->
    <div class="bg-[#1E1E1E] font-mono text-sm">
      <div class="flex">
        <!-- Linha números -->
        <div class="py-3 px-4 text-tertiary/30 select-none border-r border-tertiary/10 bg-[#1A1A1A]">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
          <div>11</div>
          <div>12</div>
          <div>13</div>
          <div>14</div>
          <div>15</div>
          <div>16</div>
        </div>

        <!-- Código -->
        <div class="py-3 px-4 text-tertiary/80 relative w-full">
          <div><span class="text-cyan-400">&lt;template&gt;</span></div>
          <div class="bg-red-500/10"><span class="text-red-400">&lt;div class="contaner"&gt;</span></div>
          <div><span class="text-yellow-500">&lt;h1&gt;</span>Meu App<span class="text-yellow-500">&lt;/h1&gt;</span></div>
          <div class="bg-yellow-500/10"><span class="text-yellow-500">&lt;button onclick="handleClick()"&gt;</span>Clique<span class="text-yellow-500">&lt;/button&gt;</span></div>
          <div><span class="text-yellow-500">&lt;/div&gt;</span></div>
          <div><span class="text-cyan-400">&lt;/template&gt;</span></div>
          <div></div>
          <div><span class="text-cyan-400">&lt;script&gt;</span></div>
          <div class="bg-red-500/10">exportdefault {</div>
          <div class="text-[#e5eef3]">data() {</div>
          <div class="bg-red-500/10">  return {title: "New App" }</div>
          <div class="text-[#e5eef3]">},</div>
          <div class="bg-yellow-500/10 text-[#4ec9b0]">methods: {</div>
          <div>  handleClick() {</div>
          <div class="bg-red-500/10">    console.log("clicked")</div>
          <div class="text-[#e5eef3]">  }</div>
        </div>

        <!-- Indicadores de erro -->
        <div class="absolute right-0 top-0 bottom-0 w-1">
          <div class="w-full h-6 bg-red-500 my-[9.5px]"></div>
          <div class="w-full h-6 bg-yellow-500 my-[9.5px]"></div>
          <div class="w-full h-6 bg-red-500 my-[9.5px]"></div>
          <div class="w-full h-6 bg-yellow-500 my-[9.5px]"></div>
          <div class="w-full h-6 bg-red-500 my-[9.5px]"></div>
        </div>
      </div>

      <!-- Error Messages -->
      <div class="border-t border-tertiary/10 bg-[#1A1A1A] p-4 text-sm">
        <div class="text-red-500 flex items-center gap-2">
          <span class="text-lg">•</span>
          <span>Erro: Classe CSS 'contaner' não encontrada</span>
        </div>
        <div class="text-red-500 flex items-center gap-2">
          <span class="text-lg">•</span>
          <span>Erro: Sintaxe Vue.js incorreta</span>
        </div>
        <div class="text-yellow-500 flex items-center gap-2">
          <span class="text-lg">•</span>
          <span>Aviso: Uso de console.log em produção</span>
        </div>
      </div>
    </div>
  </div>
</template>