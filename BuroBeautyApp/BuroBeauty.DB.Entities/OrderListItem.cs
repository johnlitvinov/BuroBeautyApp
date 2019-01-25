using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities
{
   public class OrderListItem
    {
        public int Id { get; set; }
        public string ServiceName {get; set;}
        public string MasterFullName {get; set;}
        public DateTime PurchaseDate {get; set;}
        public decimal ServiceAmount {get; set;}
    }
}
