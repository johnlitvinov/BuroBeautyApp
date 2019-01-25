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
        Service[] GetAllServices();
    }
}
