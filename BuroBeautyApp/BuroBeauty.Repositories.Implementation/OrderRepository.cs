﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;

namespace BuroBeauty.Repositories.Implementation
{
    public class OrderRepository : IOrderRepository
    {
        private string _connectionString = "Persist Security Info=False;" +
                                           "Integrated Security = true; " +
                                           "Initial Catalog = BuroBeautyApp; " +
                                           @"server=localhost\SQLEXPRESS";
        
        public Order GetOrderById(int? id)
        {
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Order] where ID = " + id;

            Order result = null;

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            SqlCommand command = new SqlCommand(sqlQuery, connection);

            SqlDataReader dataReader = command.ExecuteReader();

            //load into the result object the returned row from the database
            if (dataReader.HasRows)
            {
                dataReader.Read();
                result = new Order();
                result.Id = Convert.ToInt32(dataReader["id"]);
                result.ServiceId = Convert.ToInt32(dataReader["ServiceId"]);
                result.MasterId = Convert.ToInt32(dataReader["MasterId"]);
                result.PurchaseDate = Convert.ToDateTime(dataReader["PurchaseDate"]);
                result.ServiceAmount = Convert.ToDecimal(dataReader["ServiceAmount"]);
            }
            connection.Close();
            return result;
        }

        public List<Order> GetOrdersByDate(DateTime? date)
        {
            var result = new List<Order>();
            //Create the SQL Query for returning an article category based on its primary key
            string sqlQuery = "SELECT * from [dbo].[Order] ";

            if (date != null)
            {
                sqlQuery += string.Format(" where PurchaseDate between '{0}' AND '{1}'", date.Value.ToString("yyyy-MM-dd"), date.Value.AddDays(1).ToString("yyyy-MM-dd"));
            }

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
                    var row = new Order();
                    row.Id = Convert.ToInt32(dataReader["id"]);
                    row.ServiceId = Convert.ToInt32(dataReader["ServiceId"]);
                    row.MasterId = Convert.ToInt32(dataReader["MasterId"]);
                    row.PurchaseDate = Convert.ToDateTime(dataReader["PurchaseDate"]);
                    row.ServiceAmount = Convert.ToDecimal(dataReader["ServiceAmount"]);
                    result.Add(row);
                }
            }
            connection.Close();
            return result;
        }

        public Order CreateOrder(Order order)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Order] (ServiceId,MasterId,PurchaseDate,ServiceAmount) Values('{0}', '{1}', '{2}', {3} ); " +
                                            "SELECT SCOPE_IDENTITY()",
                order.ServiceId, order.MasterId, order.PurchaseDate.ToString("yyyy-MM-dd hh:mm:ss"), order.ServiceAmount);

            //Create and open a connection to SQL Server 
            SqlConnection connection = new SqlConnection(_connectionString);
            connection.Open();

            //Create a Command object
            SqlCommand command = new SqlCommand(sqlQuery, connection);

            //Execute the command to SQL Server and return the newly created ID
            var id = (decimal) command.ExecuteScalar();
            order.Id = Decimal.ToInt32(id);

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();

            // Set return value
            return order;
        }
        
        public void UpdateOrder(Order order)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = String.Format("Update [dbo].[Order] SET " +
                                            "MasterId = {0}, " +
                                            "ServiceId = {1}," +
                                            " PurchaseDate = '{2}', " +
                                            " ServiceAmount = {3} " +
                                            "where ID = {4}",
                                            order.MasterId,
                                            order.ServiceId,
                                            order.PurchaseDate.ToString("yyyy-MM-dd hh:mm:ss"),
                                             order.ServiceAmount, 
                                            order.Id);

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

        public void DeleteOrder(int? id)
        {
            //Create the SQL Query for deleting an article
            string sqlQuery = String.Format("DELETE from [dbo].[Order] where Id = '{0}'", id);

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
