using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;

namespace BuroBeauty.Repositories.Implementation
{
    public class ServiceRepository : IServiceRepository
    {
        private string _connectionString = "Persist Security Info=False;" +
                                           "Integrated Security = true; " +
                                           "Initial Catalog = BuroBeautyApp; " +
                                           @"server=localhost\SQLEXPRESS";


        public List<Service> GetAllservices()
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Service]";

            List<Service> result = new List<Service>();

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                while(dataReader.Read())
                {
                    var row = new Service();
                    row.Id = Convert.ToInt32(dataReader["Id"]);
                    row.Name = Convert.ToString(dataReader["Name"]);
                    result.Add(row);
                };
            }
            connection.Close();
            return result;
        }

        public Service GetServiceById(int? id)
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Service] where Id = " + id;

            Service result = null;

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                dataReader.Read();
                result = new Service();
                result.Id = Convert.ToInt32(dataReader["Id"]);
                result.Name = Convert.ToString(dataReader["Name"]);
            }
            connection.Close();
            return result;
        }

        public Service CreateService(Service service)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Service] (Name) Values('{0}'); " +
                                            "SELECT SCOPE_IDENTITY()",
                service.Name);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            //Execute the command to SQL Server and return the newly created ID
            var id = (decimal)command.ExecuteScalar();
            service.Id = Decimal.ToInt32(id);

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();

            // Set return value
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
    
        public void DeleteService(int? id)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = string.Format("DELETE from [dbo].[Service] where Id = {0}", id);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            // Execute the command
            int rowsDeletedCount = command.ExecuteNonQuery();
            if (rowsDeletedCount != 0)
                //    result = true;

            // Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();
        }

    }
}
