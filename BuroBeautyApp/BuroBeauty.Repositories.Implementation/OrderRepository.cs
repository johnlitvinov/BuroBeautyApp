using System;
using System.CodeDom;
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
    public class OrderRepository : BaseRepository, IOrderRepository
    {
        public OrderRepository(IRepositorySettingsProvider repositorySettingsProvider)
            : base(repositorySettingsProvider)
        { }
        
        public Order GetOrderById(int? id)
        {
            string sqlQuery = "SELECT * from [dbo].[Order] where ID = " + id;

            return SelectSingle<Order>(sqlQuery, (dataReader) =>
            {
                var result = new Order();
                result.Id = Convert.ToInt32(dataReader["id"]);
                result.ServiceId = Convert.ToInt32(dataReader["ServiceId"]);
                result.MasterId = dataReader["MasterId"] is DBNull
                    ? null
                    : (int?) Convert.ToInt32(dataReader["MasterId"]);
                result.PurchaseDate = Convert.ToDateTime(dataReader["PurchaseDate"]);
                result.ServiceAmount = Convert.ToDecimal(dataReader["ServiceAmount"]);
                return result;
            });
        }

        public OrderDetails GetOrderDetailsById(int? id)
        {
            string sqlQuery = @"SELECT 
                                  o.ID as OrderId,
                                  s.Id as ServiceId,
                                  m.Id as MasterId,
                                  s.Name as ServiceName,
                                  o.PurchaseDate,
                                  o.ServiceAmount,
                                  m.FullName as MasterFullName
                                  FROM [dbo].[Order] as o
                                  LEFT JOIN [dbo].[Master] as m ON o.[MasterId] = m.[Id]
                                  INNER JOIN [dbo].[Service] as s ON  o.[ServiceId] = s.[Id]
                                  where o.ID = " + id;

            return SelectSingle<OrderDetails>(sqlQuery, (dataReader) =>
            {
                var result = new OrderDetails();
                result.Id = Convert.ToInt32(dataReader["OrderId"]);
                result.ServiceId = Convert.ToInt32(dataReader["ServiceId"]);
                result.MasterId = dataReader["MasterId"] is DBNull
                    ? null
                    : (int?) Convert.ToInt32(dataReader["MasterId"]);
                result.PurchaseDate = Convert.ToDateTime(dataReader["PurchaseDate"]);
                result.ServiceAmount = Convert.ToDecimal(dataReader["ServiceAmount"]);
                result.ServiceName = dataReader["ServiceName"].ToString();
                result.MasterFullName = dataReader["MasterFullName"] is DBNull
                    ? null
                    : dataReader["MasterFullName"].ToString();
                return result;
            });
        }

        public List<OrderListItem> GetOrdersByDate(DateTime? date)
        {
            string sqlQuery = @"SELECT 
                                  o.ID as OrderId,
                                  s.Name as ServiceName,
                                  o.PurchaseDate,
                                  o.ServiceAmount,
                                  m.FullName as MasterFullName,
                                  m.Id as MasterId
                                  FROM [dbo].[Order] as o
                                  LEFT JOIN [dbo].[Master] as m ON o.[MasterId] = m.[Id]
                                  INNER JOIN [dbo].[Service] as s ON  o.[ServiceId] = s.[Id]";
            if (date != null)
            {
                var startDateStr = date.Value.ToString("MM/dd/yyyy") + " 00:00:00";
                var endDateStr = date.Value.ToString("MM/dd/yyyy") + " 23:59:59";
                sqlQuery += string.Format(" where PurchaseDate between '{0}' AND '{1}'", startDateStr, endDateStr);
            }

            return base.SelectList<OrderListItem>(sqlQuery,(dataReader) =>
            {
                var row = new OrderListItem();
                row.Id = Convert.ToInt32(dataReader["OrderId"]);
                row.ServiceName = dataReader["ServiceName"].ToString();
                row.MasterFullName = dataReader["MasterFullName"] is DBNull
                    ? null
                    : dataReader["MasterFullName"].ToString();
                row.MasterId = dataReader["MasterId"] is DBNull
                    ? (int?) null
                    : Convert.ToInt32(dataReader["MasterId"]);
                row.PurchaseDate = Convert.ToDateTime(dataReader["PurchaseDate"]);
                row.ServiceAmount = Convert.ToDecimal(dataReader["ServiceAmount"]);
                return row;
            });
        }
            
        public Order CreateOrder(Order order)
        {
            string sqlQuery = String.Format("Insert into [dbo].[Order] (ServiceId,MasterId,PurchaseDate,ServiceAmount) Values({0}, {1}, '{2}', {3} )",
                order.ServiceId,
                order.MasterId == null ? "NULL" : order.MasterId.ToString(),
                order.PurchaseDate.ToString("MM/dd/yyyy"),
                order.ServiceAmount);

            var id = base.Create<Order, decimal>(order, sqlQuery);
            order.Id = Decimal.ToInt32(id);
            return order;
        }
        
        public void UpdateOrder(Order order)
        {
            string sqlQuery = String.Format("Update [dbo].[Order] SET " +
                                            "MasterId = {0}, " +
                                            "ServiceId = {1}, " +
                                            "PurchaseDate = '{2}', " +
                                            "ServiceAmount = {3} " +
                                            "where ID = {4}",
                                            order.MasterId == null ? "NULL" : order.MasterId.ToString(),
                                            order.ServiceId,
                                            order.PurchaseDate.ToString("MM/dd/yyyy"),
                                            order.ServiceAmount, 
                                            order.Id);

            base.Update<Order>(order, sqlQuery);
        }

        public void DeleteOrder(int? id)
        {
            string sqlQuery = String.Format("DELETE from [dbo].[Order] where Id = '{0}'", id);

            base.Delete(sqlQuery);
        }
    }
}
