﻿using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using BuroBeauty.BLL;
using BuroBeauty.BLL.Implementation;
using BuroBeauty.DB.Entities;
using BuroBeauty.Repositories;
using BuroBeauty.Repositories.Implementation;
using Microsoft.Ajax.Utilities;
namespace BuroBeauty.Website.Controllers
{
    public class CalculationOfMastersController : Controller
    {
        private IOrderManager _orderManager;
        private IServiceManager _serviceManager;
        private IMasterManager _masterManager;
        private IMasterIncomeManager _masterIncomeManager;

        public CalculationOfMastersController()
        {
            IRepositorySettingsProvider settingsProvider = new RepositorySettingsProvider();
            IOrderRepository orderRepository = new OrderRepository(settingsProvider);
            _orderManager = new OrderManager(orderRepository);

            IServiceRepository serviceRepository = new ServiceRepository(settingsProvider);
            _serviceManager = new ServiceManager(serviceRepository);

            IMasterRepository masterRepository = new MasterRepository(settingsProvider);
            _masterManager = new MasterManager(masterRepository);

            _masterIncomeManager = new MasterIncomeManager(_orderManager, _masterManager);
        }

        // GET: CalculationOfMasters
        public ActionResult Index()
        {
            // Подсчет суммы на опр.дату
            var selectedDate = DateTime.Now;

            var items = _masterIncomeManager.GetAllMastersIncomeByDate(selectedDate);
            ViewBag.Total = items.Sum(x => x.TotalAmount);
            ViewBag.MastersTotal = items.Sum(x => x.AmountIncome);
            ViewBag.BuroTotal = ViewBag.Total - ViewBag.MastersTotal;
            ViewBag.SelectedDate = selectedDate;
            return View(items);
        }

        [HttpPost]
        public ActionResult Index(DateTime? date)
        {
            if (date == null)
            {
                return Index();
            }

            var items = _masterIncomeManager.GetAllMastersIncomeByDate(date);
            ViewBag.Total = items.Sum(x => x.TotalAmount);
            ViewBag.MastersTotal = items.Sum(x => x.AmountIncome);
            ViewBag.BuroTotal = ViewBag.Total - ViewBag.MastersTotal;
            date = DateTime.Now;
            ViewBag.SelectedDate = date;
            return View(items);
        }
    }
}