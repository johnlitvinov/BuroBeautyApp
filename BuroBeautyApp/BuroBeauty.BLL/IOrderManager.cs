using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL
{
    public interface IOrderManager
    {
        List<OrderListItem> GetOrdersByDate(DateTime? date);
        Order GetOrderById(int? id);
        OrderDetails GetOrderDetailsById(int? id);
        Order CreateOrder(Order order);
        void UpdateOrder(Order order);
        void DeleteOrder(int? id);
    }
}
