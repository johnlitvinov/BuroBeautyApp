using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL
{
    public interface IServiceManager
    {
        List<Service> GetAllservices();
        Service GetServiceById(int? id);
        Service CreateServicer(Service service);
        void UpdateService(Service service);
        void DeleteService(int? id);
    }
}
