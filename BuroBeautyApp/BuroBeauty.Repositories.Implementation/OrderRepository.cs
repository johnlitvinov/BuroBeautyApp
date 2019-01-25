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
    public class OrderRepository : IOrderRepository
    {
        private string _connectionString = "Persist Security Info=False;" +
                                           "Integrated Security = true; " +
                                           "Initial Catalog = BuroBeautyApp; " +
                                           @"server=localhost\SQLEXPRESS";
        
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

        

        public Order GetOrderById(int? id)
        {
            throw new NotImplementedException();
        }

        public List<Order> GetOrderDate(DateTime? date)
        {
            throw new NotImplementedException();
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
            var id = (decimal)command.ExecuteScalar();
           
            order.Id = Decimal.ToInt32(id);

            //Close and dispose
            command.Dispose();
            connection.Close();
            connection.Dispose();

            // Set return value
            return order;
        }
        
        public Order UpdateOrder(Order order)
        {
            throw new NotImplementedException();
        }

        OrderListItem[] IOrderRepository.GetAllOrders()
        {
            throw new NotImplementedException();
        }
    }
}
