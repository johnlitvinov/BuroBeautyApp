﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;

namespace BuroBeauty.Repositories.Implementation
{
    public class OrderRepository : IOrderRepository
    {
        OrderListItem[] IOrderRepository.GetAllOrders()
        {
            throw new NotImplementedException();
        }
    }
}
