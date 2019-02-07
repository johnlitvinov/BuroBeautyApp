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


namespace MyTestProject.Controllers
{
    [Authorize]
    public class OrderController : Controller
    {
        private BuroBeauty.BLL.IOrderManager _orderManager;
        private IServiceManager _serviceManager;
        private IMasterManager _masterManager;

        public OrderController()
        {
            IRepositorySettingsProvider settingsProvider = new RepositorySettingsProvider();
            IOrderRepository orderRepository = new OrderRepository(settingsProvider);
            _orderManager = new OrderManager(orderRepository);

            IServiceRepository serviceRepository = new ServiceRepository(settingsProvider);
            _serviceManager= new ServiceManager(serviceRepository);

            IMasterRepository masterRepository = new MasterRepository(settingsProvider);
            _masterManager = new MasterManager(masterRepository);
        }

        // GET: SoldServices
        public ActionResult Index()
        {
            // Подсчет суммы 
            var selectedDate = DateTime.Now;
            var items = _orderManager.GetOrdersByDate(selectedDate);
            ViewBag.Total = items.Sum(x => x.ServiceAmount);
            ViewBag.SelectedDate = selectedDate;


         return View(items );
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
            ViewBag.SelectedDate = date;
            return View(items);
        }
       
        // GET: SoldServices/Details/5
        public ActionResult Details(int id)
        {
            var order = _orderManager.GetOrderDetailsById(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        // GET: SoldServices/Create
        public ActionResult Create()
        {
            ViewBag.Services = _serviceManager.GetAllservices();
            ViewBag.Masters = _masterManager.GetAllMasters();
            
            return View(new Order()
            {
                PurchaseDate = DateTime.Now
            });
        }

        // POST: SoldServices/Create
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "id,MasterId,ServiceId,ServiceAmount,PurchaseDate")] Order order)
        {
            if (ModelState.IsValid)
            {
                
                 order.PurchaseDate = DateTime.Now;
                _orderManager.CreateOrder(order);

                return RedirectToAction("Index");
            }

            ViewBag.Services = _serviceManager.GetAllservices();
            ViewBag.Masters = _masterManager.GetAllMasters();

            return View(order);
        }
        
        // GET: SoldServices/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var order = _orderManager.GetOrderById(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            ViewBag.Services = _serviceManager.GetAllservices();
            ViewBag.Masters = _masterManager.GetAllMasters();

            return View(order);
        }

        // POST: SoldServices/Edit/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for 
        // more details see https://go.microsoft.com/fwlink/?LinkId=317598.



        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "id,MasterId,ServiceId,ServiceAmount,PurchaseDate")] Order order)
        { 
            if (ModelState.IsValid)
            {
                _orderManager.UpdateOrder(order);

                return RedirectToAction("Index");
            }
            ViewBag.Services = _serviceManager.GetAllservices();
            ViewBag.Masters = _masterManager.GetAllMasters();

            return View(order);
        }  

       
        // GET: SoldServices/Delete/5
        public ActionResult Delete(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            var order = _orderManager.GetOrderDetailsById(id);
            if (order == null)
            {
                return HttpNotFound();
            }
            return View(order);
        }

        // POST: SoldServices/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(int id)
        {
            _orderManager.DeleteOrder(id);
            
            return RedirectToAction("Index");
        }

       // protected override void Dispose(bool disposing)
       // {
       //    if (disposing)
       //    {
       //       db.Dispose();
       //    }
       //    base.Dispose(disposing);
       //}
    }
}
