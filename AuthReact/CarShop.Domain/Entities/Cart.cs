using CarShop.Domain.Entities.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarShop.Domain.Entities
{
    [Table("tblCart")]
    public class Cart
    {     
        [Key]
        public int Id { get; set; }
        public int Quantity { get; set; }       
        [ForeignKey("User")]
        public long UserId { get; set; }       
        [ForeignKey("Product")]
        public int ProductId { get; set; }
        public virtual AppUser User { get; set; }
        public virtual Products Product { get; set; }
    }
}
