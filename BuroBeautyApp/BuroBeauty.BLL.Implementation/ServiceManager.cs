using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.BLL;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;

namespace BuroBeauty.BLL.Implementation
{
   public class ServiceManager : IServiceManager
    {
        private readonly IServiceRepository _serviceRepository;

        public ServiceManager(IServiceRepository serviceRepository)
        {
            _serviceRepository = serviceRepository;
        }

        public Service CreateServicer(Service service)
        {
            return _serviceRepository.CreateService(service);
        }

        public Service GetServiceById(int? id)
        {
            return _serviceRepository.GetServiceById(id);
        }

        public void UpdateService(Service service)
        {
           _serviceRepository.UpdateService(service);
        }

        public void DeleteService(int? id)
        {
            _serviceRepository.DeleteService(id);
        }
    }
}
