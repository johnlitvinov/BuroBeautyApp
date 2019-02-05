using System;
using System.Configuration;
using System.Globalization;

namespace BuroBeauty.Repositories.Implementation
{
    public class RepositorySettingsProvider : IRepositorySettingsProvider
    {
        public string GetSetting(string settingName)
        {
            switch (settingName)
            {
                case "DefaultConnection":
                    //return "Data Source=ms04b.sqlserver.se;Initial Catalog=185095-burobeauty;Integrated Security=False;User ID=185095_wr73265;password=asdQWE123;Connect Timeout=300;Encrypt=False;";
                    return ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
                    break;
            }

            throw new Exception($"Setting with a key {settingName} is not found");
        }
    }
}
