using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarShop.Domain.Entities
{
    [Table("tblProducts")]
    public class Products
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }      
        public  string ImageProduct { get; set; }
        public decimal Price { get; set; }

    }
}
