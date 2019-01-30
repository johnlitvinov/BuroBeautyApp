using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities
{
    public class OrderDetails : Order
    {
        public string ServiceName { get; set; }
        public string MasterFullName { get; set; }
    }
}
