import React from 'react'

const Formulario = () => {
  return (
    <div>
        <div class="row mb-2">
                      <div class="col">
                      <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Apellido" aria-label="Apellido" />
                      </div>
                    </div>
                    <div class="row mb-3">
                      <div class="col">
                      <input type="email" class="form-control" placeholder="Email" aria-label="Email" />
                      </div>
                      <div class="col">
                        <input type="text" class="form-control" placeholder="Teléfono" aria-label="Telefono" />
                      </div>
                    </div>
    </div>
  )
}

export default Formulario