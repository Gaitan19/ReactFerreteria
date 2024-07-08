import React from 'react';

const Ticket = React.forwardRef(({ detalleVenta }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        width: '80mm', // Ajusta el ancho al estándar de una impresora térmica
        padding: '5mm', // Añade un poco de padding
        fontSize: '10px', // Ajusta el tamaño de la fuente para una mejor legibilidad en un ticket pequeño
        fontFamily: 'Arial, sans-serif',
        boxSizing: 'border-box',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <h4>Ferretería la Unión</h4>
        <p>Carretera Muelle 38, 37531 Ávila, Ávila</p>
        <hr />
      </div>
      <div style={{ marginBottom: '5mm' }}>
        <p>
          <strong>Fecha Registro:</strong> {detalleVenta.fechaRegistro}
        </p>
        <p>
          <strong>Numero Venta:</strong> {detalleVenta.numeroDocumento}
        </p>
        <p>
          <strong>Tipo Documento:</strong> {detalleVenta.tipoDocumento}
        </p>
        <p>
          <strong>Documento Cliente:</strong>
        </p>
        <p>
          <strong>Nombre Cliente:</strong> {detalleVenta.nombreCliente}
        </p>
        <hr />
        <table
          style={{
            width: '100%',
            fontSize: '10px',
            borderCollapse: 'collapse',
          }}
        >
          <thead>
            <tr>
              <th style={{ textAlign: 'left', borderBottom: '1px solid #000' }}>
                Producto
              </th>
              <th
                style={{ textAlign: 'center', borderBottom: '1px solid #000' }}
              >
                Cant.
              </th>
              <th
                style={{ textAlign: 'center', borderBottom: '1px solid #000' }}
              >
                Precio
              </th>
              <th
                style={{ textAlign: 'right', borderBottom: '1px solid #000' }}
              >
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {detalleVenta.detalle && detalleVenta.detalle.length > 0 ? (
              detalleVenta.detalle.map((item, index) => (
                <tr key={index}>
                  <td>{item.producto}</td>
                  <td style={{ textAlign: 'center' }}>{item.cantidad}</td>
                  <td style={{ textAlign: 'center' }}>{item.precio}</td>
                  <td style={{ textAlign: 'right' }}>{item.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: 'center' }}>
                  Sin resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr />
        {/* <p>
          <strong>Sub Total:</strong> {detalleVenta.subTotal}
        </p>
        <p>
          <strong>IGV (15%):</strong> {detalleVenta.igv}
        </p> */}
        <p>
          <strong>Total:</strong> {detalleVenta.total}
        </p>
      </div>
      {/* <div style={{ textAlign: 'center', marginTop: '5mm' }}>
        <p>
          <strong>Condiciones y forma de pago:</strong>
        </p>
        <p>El pago se realizará en un plazo de 15 días</p>
        <p>Banco Santander</p>
        <p>IBAN: ES12 3456 7891</p>
        <p>SWIFT/BIC: ABCDESM1XXX</p>
      </div> */}
    </div>
  );
});

export default Ticket;
