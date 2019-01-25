using System;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories.Implementation;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BuroBeauty.Repositories.IntegrationTests
{
    [TestClass]
    public class OrderRepositoryTests
    {
        private IOrderRepository _orderRepository;

        [TestInitialize]
        public void SetUp()
        {
            _orderRepository = new OrderRepository();
        }

        [TestMethod]
        public void CreateOrderTest()
        {
            Order order = new Order();
            order.MasterId = 2;
            order.ServiceId = 6;
            order.ServiceAmount = 22;
            order.PurchaseDate = DateTime.Now;
            var resultOrder = _orderRepository.CreateOrder(order);
            Assert.IsNotNull(resultOrder);
            Assert.IsTrue(order.Id != 0);
        }

        [TestMethod]
        public void UpdateOrderTest()
        {
            Order order = _orderRepository.GetOrderById(147);
            order.ServiceAmount = 10;
            _orderRepository.UpdateOrder(order);
            var resultOrder = _orderRepository.GetOrderById(147);
            Assert.IsNotNull(resultOrder);
            Assert.IsTrue(resultOrder.ServiceAmount==10);
        }
        public void DeleteTest()
        {
            _orderRepository.DeleteOrder(3);
        }
    }
}
