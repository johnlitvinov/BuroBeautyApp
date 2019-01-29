using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities
{
   public class Order
    {
        public int Id { get; set; }
        public int? MasterId { get; set; }
        public int ServiceId { get; set; }
        public decimal ServiceAmount { get; set; }
        public DateTime PurchaseDate { get; set; }
    }
}
