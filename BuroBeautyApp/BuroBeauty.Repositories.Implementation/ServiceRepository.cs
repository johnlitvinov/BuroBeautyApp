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
    public class ServiceRepository : BaseRepository, IServiceRepository
    {
        public ServiceRepository(IRepositorySettingsProvider repositorySettingsProvider)
            : base(repositorySettingsProvider)
        { }

        public List<Service> GetAllservices()
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Service]";
            return base.SelectList<Service>(sqlQuery, (dataReader) =>
            {
                var row = new Service();
                row.Id = Convert.ToInt32(dataReader["Id"]);
                row.Name = Convert.ToString(dataReader["Name"]);
                return row;
            });
        }
        
        public Service GetServiceById(int? id)
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Service] where Id = " + id;
            return SelectSingle<Service>(sqlQuery, (dataReader) =>
            {
                var row = new Service();
                row.Id = Convert.ToInt32(dataReader["Id"]);
                row.Name = Convert.ToString(dataReader["Name"]);
                return row;
            });
        }

        public Service CreateService(Service service)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Service] (Name) Values('{0}')",
                service.Name);

            var id = base.Create<Service, decimal>(service, sqlQuery);
            service.Id = Decimal.ToInt32(id);
            return service;
        }

        public void UpdateService(Service service)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = String.Format("Update [dbo].[Service] SET " +
                                            "Name = '{0}' " +
                                            "Where ID = {1}",
                                             service.Name,
                                             service.Id);

            base.Update<Service>(service, sqlQuery);
        }
    
        public void DeleteService(int? id)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = string.Format("DELETE from [dbo].[Service] where Id = {0}", id);

            base.Delete(sqlQuery);
        }
    }
}
