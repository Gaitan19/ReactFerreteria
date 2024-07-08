import React from 'react';
import '../views/css/Ticket.css';

const Ticket = React.forwardRef(({ detalleVenta }, ref) => {
  console.log('detalleVenta :>> ', detalleVenta);

  return (
    <div ref={ref} className="ticket">
      <div className="ticket__header">
        <h4 className="ticket__title">Ferretería la Unión</h4>
        <p className="ticket__address">
          Carretera Muelle 38, 37531 Ávila, Ávila
        </p>
        <hr className="ticket__separator" />
      </div>
      <div className="ticket__body">
        <p className="ticket__info">
          <strong>Pago:</strong> Contado
        </p>
        <p className="ticket__info">
          <strong>Fecha Registro:</strong> {detalleVenta.fechaRegistro}
        </p>
        <p className="ticket__info">
          <strong>Numero Venta:</strong> {detalleVenta.numeroDocumento}
        </p>
        <p className="ticket__info">
          <strong>Vendedor:</strong> {detalleVenta.usuarioRegistro}
        </p>
        <hr className="ticket__separator" />
        <table className="ticket__table">
          <thead>
            <tr>
              <th className="ticket__table-header ticket__table-header--left">
                Producto
              </th>
              <th className="ticket__table-header ticket__table-header--center">
                Cant.
              </th>
              <th className="ticket__table-header ticket__table-header--center">
                Precio
              </th>
              <th className="ticket__table-header ticket__table-header--right">
                Total
              </th>
            </tr>
          </thead>
          <tbody>
            {detalleVenta.detalle && detalleVenta.detalle.length > 0 ? (
              detalleVenta.detalle.map((item, index) => (
                <tr key={index} className="ticket__table-row">
                  <td className="ticket__table-cell">{item.producto}</td>
                  <td className="ticket__table-cell ticket__table-cell--center">
                    {item.cantidad}
                  </td>
                  <td className="ticket__table-cell ticket__table-cell--center">
                    C${item.precio}
                  </td>
                  <td className="ticket__table-cell ticket__table-cell--right">
                    C${item.total}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan="4"
                  className="ticket__table-cell ticket__table-cell--center"
                >
                  Sin resultados
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <hr className="ticket__separator" />
        <p className="ticket__info">
          <strong>Total:</strong> C${detalleVenta.total}
        </p>
      </div>
      <div className="ticket__footer">
        <p className="ticket__footer-title">
          <strong>Datos del Cliente:</strong>
        </p>
        <p className="ticket__info">
          <strong>Nombre Cliente:</strong> {detalleVenta.nombreCliente}
        </p>
      </div>
    </div>
  );
});

export default Ticket;
