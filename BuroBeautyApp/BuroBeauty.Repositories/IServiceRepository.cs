using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.Repositories
{
    public interface IServiceRepository
    {
        List<Service> GetAllservices();
        Service GetServiceById(int? id);
        Service CreateService(Service service);
        void UpdateService(Service service);
        void DeleteService(int? id);
    }
}
