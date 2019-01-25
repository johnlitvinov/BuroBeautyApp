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
        OrderListItem[] GetAllOrders();


        void DeleteOrder(int? id);
        Order GetOrderById(int? id);
        Order GreateOrder(Order order);
        Order UpdateOrder(Order order);
        List<Order> GetOrderDate(DateTime? date);
        
    }
}
