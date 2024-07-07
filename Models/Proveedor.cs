using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace ReactVentas.Models
{
    [Table("Proveedor")]
    public partial class Proveedor
    {
        public int IdProveedor { get; set; }
        public string? Nombre { get; set; }
        public string? Correo { get; set; }
        public string? Telefono { get; set; }
        public DateTime FechaRegistro { get; set; }
    }
}
