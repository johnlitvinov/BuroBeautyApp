using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.BLL.FakesImplementation;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using NUnit.Framework;
using Assert = NUnit.Framework.Assert;

namespace BuroBeauty.BLL.Implementation.UnitTests
{
    [TestClass]
    public class MasterIncomeManagerTests
    {
        private IMasterIncomeManager _masterIncomeManager;

        [TestInitialize]
        public void SetUp()
        {
            IOrderManager orderManager = new FakeOrderManager();
            IMasterManager masterManager = new FakeMasterManager();

            _masterIncomeManager = new MasterIncomeManager(orderManager, masterManager);
        }

        [TestMethod]
        public void GetAllMastersIncomeByDateTest()
        {
            var result = _masterIncomeManager.GetAllMastersIncomeByDate(new DateTime(2019, 1, 1));

            Assert.IsNotNull(result);
        }
    }
}
