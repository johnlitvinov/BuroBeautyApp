using System;
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
        public void GetAllOrdersTest()
        {
            var result =  _orderRepository.GetAllOrders();

            Assert.IsNotNull(result);
            Assert.IsTrue(result.Length > 0);
        }


        [TestMethod]
        public void DeleteTest()
        {
            _orderRepository.DeleteOrder(2);
        }


    }
}
