using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities.Dto.Master;

namespace BuroBeauty.BLL
{
   public interface IMasterIncomeManager
    {
        List<MasterDayIncomeSummaryDto> GetAllMastersIncomeByDate(DateTime? date);
    }
}
