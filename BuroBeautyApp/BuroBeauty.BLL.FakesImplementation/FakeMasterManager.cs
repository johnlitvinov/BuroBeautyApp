using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL.FakesImplementation
{
    public class FakeMasterManager : IMasterManager
    {
        public Master CreateMaster(Master master)
        {
            throw new NotImplementedException();
        }

        public void DeleteMaster(int? id)
        {
            throw new NotImplementedException();
        }

        public List<Master> GetAllMasters()
        {
            throw new NotImplementedException();
        }

        public Master GetMasterById(int? id)
        {
            throw new NotImplementedException();
        }

        public void UpdateMaster(Master master)
        {
            throw new NotImplementedException();
        }
    }
}
