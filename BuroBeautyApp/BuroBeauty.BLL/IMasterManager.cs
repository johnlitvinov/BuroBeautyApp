using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL
{
    public interface IMasterManager
    {
        Master GetMasterrById(int? id);
        Master CreateMaster(Master master);
        void UpdateMaster(Master master);
        void DeleteMaster(int? id);
    }
}
