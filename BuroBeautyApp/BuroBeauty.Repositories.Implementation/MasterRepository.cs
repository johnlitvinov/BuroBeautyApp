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
    public class MasterRepository : IMasterRepository
    {
        private readonly IRepositorySettingsProvider _repositorySettingsProvider;
        private readonly string _connectionString;

        public MasterRepository(IRepositorySettingsProvider repositorySettingsProvider)
        {
            _repositorySettingsProvider = repositorySettingsProvider;
            _connectionString = _repositorySettingsProvider.GetSetting("DefaultConnection");
        }

        public List<Master> GetAllMasters()
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Master]";

            List<Master> result = new List<Master>();

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                while (dataReader.Read())
                {
                    var row = new Master();
                    row.Id = Convert.ToInt32(dataReader["Id"]);
                    row.Name = Convert.ToString(dataReader["Name"]);
                    row.FullName = Convert.ToString(dataReader["FullName"]);
                    row.Phone = Convert.ToString(dataReader["Phone"]);
                    row.Percent = Convert.ToDecimal(dataReader["Percent"]);

                    result.Add(row);
                };
            }
            connection.Close();
            return result;
        }
    

        public Master GetMasterById(int? id)
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Master] where ID = " + id;

            Master result = null;

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                dataReader.Read();
                result = new Master();
                result.Id = Convert.ToInt32(dataReader["Id"]);
                result.Name = Convert.ToString(dataReader["Name"]);
                result.FullName = Convert.ToString(dataReader["FullName"]);
                result.Phone = Convert.ToString(dataReader["Phone"]);
                result.Percent = Convert.ToDecimal(dataReader["Percent"]);
            }
            connection.Close();
            return result;
        }

        public Master CreateMaster(Master master)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Master] " +
                                            "(Name,FullName,Phone,[Percent]) " +
                                            "Values('{0}', '{1}', '{2}', {3} ); " +
                                            "SELECT SCOPE_IDENTITY()",
                                            master.Name, 
                                            master.FullName, 
                                            master.Phone, 
                                            master.Percent);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            //Execute the command to SQL Server and return the newly created ID
            var id = (decimal)command.ExecuteScalar();
            master.Id = Decimal.ToInt32(id);

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();

            // Set return value
            return master;
        }

        public void UpdateMaster(Master master)
        {
            //Create the SQL Query for deleting an article
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

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            command.ExecuteNonQuery();

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();
        }

        public void DeleteMaster(int? id)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = String.Format("DELETE from [dbo].[Master] " +
                                            "where Id = {0}", id);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            // Execute the command
            int rowsDeletedCount = command.ExecuteNonQuery();
            if (rowsDeletedCount != 0)
              
             // Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();
        }
    }
}
