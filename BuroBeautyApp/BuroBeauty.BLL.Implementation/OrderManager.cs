﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.BLL;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;

namespace BuroBeauty.BLL.Implementation
{
    public class OrderManager : BLL.IOrderManager
    {
        private readonly IOrderRepository _orderRepository;

        public OrderManager(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository;
        }

        public List<OrderListItem> GetOrdersByDate(DateTime? date)
        {
            return _orderRepository.GetOrdersByDate(date);
        }

        public Order GetOrderById(int? id)
        {
            return _orderRepository.GetOrderById(id);
        }

        public OrderDetails GetOrderDetailsById(int? id)
        {
            return _orderRepository.GetOrderDetailsById(id);
        }

        public Order CreateOrder(Order order)
        {
            return _orderRepository.CreateOrder(order);
        }

        public void UpdateOrder(Order order)
        {
            _orderRepository.UpdateOrder(order);
        }
        public void DeleteOrder(int? id)
        {
           _orderRepository.DeleteOrder(id);
        }

    }
}