<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12">
        <h1 class="mb-4">Mi Cuenta</h1>
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Información Personal</h5>
                <div class="mb-3">
                  <label class="form-label">Nombre completo</label>
                  <input type="text" class="form-control" value="Juan Pérez" readonly>
                </div>
                <div class="mb-3">
                  <label class="form-label">Email</label>
                  <input type="email" class="form-control" value="juan.perez@email.com" readonly>
                </div>
                <div class="mb-3">
                  <label class="form-label">Teléfono</label>
                  <input type="tel" class="form-control" value="+34 600 123 456" readonly>
                </div>
                <button class="btn btn-primary">Editar Perfil</button>
              </div>
            </div>
          </div>
          <div class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Configuración de Seguridad</h5>
                <div class="mb-3">
                  <label class="form-label">Cambiar PIN</label>
                  <button class="btn btn-outline-primary btn-sm ms-2">Cambiar</button>
                </div>
                <div class="mb-3">
                  <label class="form-label">Autenticación de dos factores</label>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="twoFactor" checked>
                    <label class="form-check-label" for="twoFactor">Activado</label>
                  </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Notificaciones</label>
                  <div class="form-check form-switch">
                    <input class="form-check-input" type="checkbox" id="notifications" checked>
                    <label class="form-check-label" for="notifications">Activadas</label>
                  </div>
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
// Página de cuenta
</script>

<style scoped>
.card {
  border: 1px solid #dee2e6;
}
</style>
