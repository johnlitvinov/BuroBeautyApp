﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BuroBeauty.Repositories
{
    public interface IRepositorySettingsProvider
    {
        string GetSetting(string settingName);
    }
}
