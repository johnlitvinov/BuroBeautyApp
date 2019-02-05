using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories.Implementation;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace BuroBeauty.Repositories.IntegrationTests
{
    [TestClass]
    public class MasterRepositoryTests
    {
        private IMasterRepository _masterRepository;

        [TestInitialize]
        public void SetUp()
        {
            IRepositorySettingsProvider settingsProvider = new RepositorySettingsProvider();
            _masterRepository = new MasterRepository(settingsProvider);
        }

        [TestMethod]
        public void CreateMasterTest()
        {
            Master master= new Master();
            master.Name = "SASHA";
            master.FullName = "DKDDM";
            master.Phone = "+37529 4438439";
            master.Percent = 70;
            var resultMaster = _masterRepository.CreateMaster(master);
            Assert.IsNotNull(resultMaster);
            Assert.IsTrue(master.Id != 0);
        }

        [TestMethod]
        public void UpdateMasterTest()
        {
            Master master = _masterRepository.GetMasterById(8);
            master.Percent = 80;
            _masterRepository.UpdateMaster(master);
            var resultMaster = _masterRepository.GetMasterById(8);
            Assert.IsNotNull(resultMaster);
           // Assert.IsTrue(resultMaster.Percent == 10);
        }

        [TestMethod]
        public void DeleteTest()
        {
            _masterRepository.DeleteMaster(15);
        }
    }
}
