using System;
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

        public CalculationOfMastersController()
        {
            IRepositorySettingsProvider settingsProvider = new RepositorySettingsProvider();
            IOrderRepository orderRepository = new OrderRepository(settingsProvider);
            _orderManager = new OrderManager(orderRepository);

            IServiceRepository serviceRepository = new ServiceRepository(settingsProvider);
            _serviceManager = new ServiceManager(serviceRepository);

            IMasterRepository masterRepository = new MasterRepository(settingsProvider);
            _masterManager = new MasterManager(masterRepository);
        }

        // GET: CalculationOfMasters
        public ActionResult Index()
        {
            // Подсчет суммы на опр.дату
            var selectedDate = DateTime.Now;

            var items = _orderManager.GetOrdersByDate(selectedDate);
            ViewBag.Total = items.Sum(x => x.ServiceAmount);
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

            var items = _orderManager.GetOrdersByDate(date);
            ViewBag.Total = items.Sum(x => x.ServiceAmount);
            date = DateTime.Now;
            ViewBag.SelectedDate = date;
            return View(items);
        }
    }
}