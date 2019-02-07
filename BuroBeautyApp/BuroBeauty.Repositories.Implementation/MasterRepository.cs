using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;
using System.Data.SqlClient;

namespace BuroBeauty.Repositories.Implementation
{
    public class MasterRepository : BaseRepository, IMasterRepository
    {
        public MasterRepository(IRepositorySettingsProvider repositorySettingsProvider) 
            : base(repositorySettingsProvider)
        {}

        public List<Master> GetAllMasters()
        {
            string sqlQuery = "SELECT * from [dbo].[Master]";
            return base.SelectList<Master>(sqlQuery, (dataReader) =>
            {
                var row = new Master();
                row.Id = Convert.ToInt32(dataReader["Id"]);
                row.Name = Convert.ToString(dataReader["Name"]);
                row.FullName = Convert.ToString(dataReader["FullName"]);
                row.Phone = Convert.ToString(dataReader["Phone"]);
                row.Percent = Convert.ToDecimal(dataReader["Percent"]);
                return row;
            });
        }
    
        public Master GetMasterById(int? id)
        {
            string sqlQuery = "SELECT * from [dbo].[Master] where ID = " + id;

            return SelectSingle<Master>(sqlQuery, (dataReader) =>
            {
                var row = new Master();
                row.Id = Convert.ToInt32(dataReader["Id"]);
                row.Name = Convert.ToString(dataReader["Name"]);
                row.FullName = Convert.ToString(dataReader["FullName"]);
                row.Phone = Convert.ToString(dataReader["Phone"]);
                row.Percent = Convert.ToDecimal(dataReader["Percent"]);
                return row;
            });
        }

        public Master CreateMaster(Master master)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Master] " +
                                            "(Name,FullName,Phone,[Percent]) " +
                                            "Values('{0}', '{1}', '{2}', {3} )",
                                            master.Name,
                                            master.FullName,
                                            master.Phone,
                                            master.Percent);

            var id = base.Create<Master, decimal>(master, sqlQuery);
            master.Id = Decimal.ToInt32(id);
            return master;
        }

        public void UpdateMaster(Master master)
        { 
            string sqlQuery = String.Format("Update [dbo].[Master] SET " +
                                            "Name = '{0}', " +
                                            "FullName = '{1}', " +
                                            "Phone = '{2}', " +
                                            "[Percent] = {3} " +
                                            "where ID = {4}",
                                            master.Name,
                                            master.FullName,
                                            master.Phone,
                                            master.Percent,
                                            master.Id);

            base.Update<Master>(master, sqlQuery);
        }

        public void DeleteMaster(int? id)
        {
            string sqlQuery = String.Format("DELETE from [dbo].[Master] " +
                                            "where Id = {0}", id);
            base.Delete(sqlQuery);
        }
    }
}
