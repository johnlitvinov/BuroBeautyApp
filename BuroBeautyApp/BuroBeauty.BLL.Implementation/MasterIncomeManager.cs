using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.DB.Entities.Dto.Master;
using BuroBeauty.Repositories;


namespace BuroBeauty.BLL.Implementation
{
    public class MasterIncomeManager : IMasterIncomeManager
    {
        private readonly IOrderManager _orderManager;
        private readonly IMasterManager _masterManager;

        public MasterIncomeManager(
            IOrderManager orderManager,
            IMasterManager masterManager)
        {
            _orderManager = orderManager;
            _masterManager = masterManager;
        }

        public List<MasterDayIncomeSummaryDto> GetAllMastersIncomeByDate(DateTime? date)
        {
            var orders = _orderManager.GetOrdersByDate(date);
            orders = orders.Where(o => o.MasterId != null).ToList();
            var masterDict = new Dictionary<int, Master>();
            var mastersIds = orders.Select(s => s.MasterId).Distinct().ToList();

            // gathering info about masters
            for (int i = 0; i < mastersIds.Count; i++)
            {
                var masterId = mastersIds[i];
                var master = _masterManager.GetMasterById(masterId);
                masterDict.Add((int)masterId, master);
            }

            return masterDict
                .Select(m => new MasterDayIncomeSummaryDto()
                {
                    Id = m.Key,
                    MasterFullName = m.Value.FullName,
                    Percent = m.Value.Percent,
                    TotalAmount = orders.Where(o=>o.MasterId == m.Key).Sum(s=>s.ServiceAmount),
                    AmountIncome = orders.Where(o => o.MasterId == m.Key).Sum(s => s.ServiceAmount * m.Value.Percent / 100)
                }).ToList();
        }
        
    }
}
