<template>
  <div class="bg-white py-3" id="header">
    <div class="container">
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src="/src/assets/img/logo-notarynet.webp" alt="NotaryNet" class="img-fluid" style="width: 100px;">
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link me-3" :class="{ active: $route.path === '/' }" to="/">Como funciona</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link me-3" :class="{ active: $route.path === '/documentos' }" to="/documentos">Documentos</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link me-3" :class="{ active: $route.path === '/firma' }" to="/firma">Firma</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link me-3" :class="{ active: $route.path === '/cuenta' }" to="/cuenta">Mi Cuenta</router-link>
              </li>
            </ul>
            <div class="d-flex">
              <a class="btn me-2" href="/cuenta">
                <font-awesome-icon :icon="['far', 'user']" style="margin-left:10px;" />
              </a>
              <a class="btn btn-primary" href="/documentos">Ver documentos</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
// No necesitamos lógica adicional por ahora
</script>

<style scoped>
#header {
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.08);
}
</style>
