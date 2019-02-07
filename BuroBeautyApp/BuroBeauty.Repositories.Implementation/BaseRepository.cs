using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;

namespace BuroBeauty.Repositories.Implementation
{
    public abstract class BaseRepository
    {
        private readonly string _connectionString;

        public BaseRepository(IRepositorySettingsProvider repositorySettingsProvider)
        {
            _connectionString = repositorySettingsProvider.GetSetting("DefaultConnection");
        }

        protected List<T> SelectList<T>(string sqlQuery, Func<SqlDataReader, T> rowInitializer)
        {
            List<T> result = new List<T>();

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
                    var row = rowInitializer(dataReader);
                    result.Add(row);
                };
            }
            connection.Close();
            return result;
        }

        protected T SelectSingle<T>(string sqlQuery, Func<SqlDataReader, T> rowInitializer)
        {
            T result = default(T);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                dataReader.Read();
                result = rowInitializer(dataReader);
            }
            connection.Close();
            return result;
        }

        /// <summary>Creates the specified new entity.</summary>
        /// <typeparam name="T">Main entity type</typeparam>
        /// <typeparam name="RType">  Returned type</typeparam>
        /// <param name="newEntity">The new entity.</param>
        /// <returns>new row Id</returns>
        protected RType Create<T, RType>(T newEntity, string query)
        {
            query += " ;SELECT SCOPE_IDENTITY()";

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(query, connection);

            //Execute the command to SQL Server and return the newly created ID
            var id = (RType)command.ExecuteScalar();

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();

            return id;
        }

        protected void Update<T>(T updatedEntity, string query)
        {
            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(query, connection);

            command.ExecuteNonQuery();

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();
        }

        protected void Delete(string sqlDeleteQuery)
        {
            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlDeleteQuery, connection);

            command.ExecuteNonQuery();

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();
        }
       
        protected T SelectSingleDeteils<T>(string sqlQuery, Func<SqlDataReader, T> rowInitializer)
        {
            T result = default(T);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
           connection.Open();

           SqlCommand command = new SqlCommand(sqlQuery, connection);

           SqlDataReader dataReader = command.ExecuteReader();
           if (dataReader.HasRows)
           {
               dataReader.Read();
               result = rowInitializer(dataReader);
           }
           connection.Close();
           return result;
        }
    }
}
