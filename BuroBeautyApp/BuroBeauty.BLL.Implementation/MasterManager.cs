using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.BLL;
using BuroBeauty.Repositories;

namespace BuroBeauty.BLL.Implementation
{
    public class MasterManager: IMasterManager
    {
        private readonly IMasterRepository _masterRepository;

        public MasterManager(IMasterRepository masterRepository)
        {
            _masterRepository = masterRepository;
        }

    }
}
