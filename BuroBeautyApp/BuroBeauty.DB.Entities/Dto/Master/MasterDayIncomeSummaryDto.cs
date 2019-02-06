using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.DB.Entities.Dto.Master
{
    public class MasterDayIncomeSummaryDto
    {
        public class MasterIncomeSummaryListItem
        {
            public int Id { get; set; }
            public string MasterFullName { get; set; }
            public DateTime PurchaseDate { get; set; }
            public decimal TotalAmount { get; set; }
            public decimal Percent { get; set; }
            public decimal AmountIncome { get; set; }
        }
    }
}
