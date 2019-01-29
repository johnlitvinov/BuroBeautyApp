using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.Repositories
{
    public interface IOrderRepository
    {
        Order GetOrderById(int? id);
        List<OrderListItem> GetOrdersByDate(DateTime? date);
        Order CreateOrder(Order order);
        void UpdateOrder(Order order);
        void DeleteOrder(int? id);
    }
}
