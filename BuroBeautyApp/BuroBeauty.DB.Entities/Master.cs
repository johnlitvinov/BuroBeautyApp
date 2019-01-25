using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities
{
    public class Master
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public decimal Percent { get; set; }
    }
}
