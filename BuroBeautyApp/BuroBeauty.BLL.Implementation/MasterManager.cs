using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.Repositories;
using BuroBeauty.BLL;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.BLL.Implementation
{
    public class MasterManager: IMasterManager
    {
        private readonly IMasterRepository _masterRepository;

        public MasterManager(IMasterRepository masterRepository)
        {
            _masterRepository = masterRepository;
        }

        public List<Master> GetAllMasters()
        {
            return _masterRepository.GetAllMasters();
        }

        public Master CreateMaster(Master master)
        {
            return _masterRepository.CreateMaster(master);
        }

        public Master GetMasterrById(int? id)
        {
            return _masterRepository.GetMasterById(id);
        }

        public void UpdateMaster(Master master)
        {
            _masterRepository.UpdateMaster(master);
        }

        public void DeleteMaster(int? id)
        {
           _masterRepository.DeleteMaster(id);
        }
    }
}
