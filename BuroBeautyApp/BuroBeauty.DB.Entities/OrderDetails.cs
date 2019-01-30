using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities
{
    public class OrderDetails : Order
    {
        //[Display(Name = "Wild and Crazy")]
        public string ServiceName { get; set; }
        public string MasterFullName { get; set; }
    }
}
