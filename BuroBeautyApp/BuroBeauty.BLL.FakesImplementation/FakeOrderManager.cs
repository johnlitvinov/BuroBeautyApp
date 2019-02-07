using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL.FakesImplementation
{
    public class FakeOrderManager : IOrderManager
    {
        public Order CreateOrder(Order order)
        {
            throw new NotImplementedException();
        }

        public void DeleteOrder(int? id)
        {
            throw new NotImplementedException();
        }

        public Order GetOrderById(int? id)
        {
            throw new NotImplementedException();
        }

        public OrderDetails GetOrderDetailsById(int? id)
        {
            throw new NotImplementedException();
        }

        public List<OrderListItem> GetOrdersByDate(DateTime? date)
        {
            return new List<OrderListItem>()
            {
                new OrderListItem()
                {
                    Id = 1,
                    ServiceName = "Manikur",
                    MasterId = 1,
                    MasterFullName = "Vasya",
                    PurchaseDate = new DateTime(2019,1,1),
                    ServiceAmount = 20
                },
                new OrderListItem()
                {
                    Id = 2,
                    ServiceName = "Manikur",
                    MasterId = 1,
                    MasterFullName = "Vasya",
                    PurchaseDate = new DateTime(2019,1,1),
                    ServiceAmount = 25
                }
            };
        }

        public void UpdateOrder(Order order)
        {
            throw new NotImplementedException();
        }
    }
}
