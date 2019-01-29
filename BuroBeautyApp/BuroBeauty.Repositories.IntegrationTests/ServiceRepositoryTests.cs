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
    public class ServiceRepositoryTests
    {
        private IServiceRepository _serviceRepository;

        [TestInitialize]
        public void SetUp()
        {
            _serviceRepository = new ServiceRepository();
        }

        [TestMethod]
        public void CreateServiceTest()
        {
            Service service = new Service();
            service.Name = "Otbelivanie ";
            var resultMaster = _serviceRepository.CreateService(service);
            Assert.IsNotNull(resultMaster);
            Assert.IsTrue(service.Id != 0);
        }

        [TestMethod]
        public void UpdateServiceTest()
        {
            Service service = _serviceRepository.GetServiceById(7);
            service.Name = "Microblading";
            _serviceRepository.UpdateService(service);
            var resultService = _serviceRepository.GetServiceById(7);
            Assert.IsNotNull(resultService);
            // Assert.IsTrue(resultMaster.Percent == 10);
        }

        [TestMethod]
        public void DeleteServiceTest()
        {
            _serviceRepository.DeleteService(8);
        }
    }
} 
