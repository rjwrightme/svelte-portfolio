<script>
  import Header from "./lib/Header.svelte";
  import Brain from "./assets/Brain.svelte";
</script>

<main>
  <Header />
  <div class="bg-gradient-radial from-cyan-900 via-slate-900 to-slate-900">
    <h1 class="text-3xl font-bold text-center text-white py-10">
      Developer by Design.
    </h1>
    <Brain />
  </div>
  <div>
    <h2>About Me</h2>
    <h2>Skills</h2>
    <h2>Work History</h2>
    <h2>Projects</h2>
  </div>
</main>
