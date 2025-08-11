<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4">Mis Documentos</h1>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Documento 1</h5>
                <p class="card-text">Contrato de arrendamiento - Pendiente de firma</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge bg-warning">Pendiente</span>
                  <button class="btn btn-primary btn-sm">Firmar</button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Documento 2</h5>
                <p class="card-text">Acuerdo de confidencialidad - Completado</p>
                <div class="d-flex justify-content-between align-items-center">
                  <span class="badge bg-success">Completado</span>
                  <button class="btn btn-outline-primary btn-sm">Ver</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Página de documentos
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
  transition: box-shadow 0.2s;
}

.card:hover {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>
