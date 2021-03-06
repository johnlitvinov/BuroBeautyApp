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
using NLog;

namespace MyTestProject.Controllers
{
    [Authorize]
    public class OrderController : Controller
    {
        private BuroBeauty.BLL.IOrderManager _orderManager;
        private IServiceManager _serviceManager;
        private IMasterManager _masterManager;

        public OrderController(
            IOrderManager orderManager,
            IServiceManager serviceManager,
            IMasterManager masterManager)
        {
            _orderManager = orderManager;
            _serviceManager= serviceManager;
            _masterManager = masterManager;
        }

        // GET: SoldServices
        public ActionResult Index()
        {
            Logger log = LogManager.GetCurrentClassLogger();
            log.Trace("trace message");
            log.Debug("debug message");
            log.Info("info message");
            log.Warn("warn message");
            log.Error("error message");
            log.Fatal("fatal message");
            // Подсчет суммы 
            var selectedDate = DateTime.Now;
            var items = _orderManager.GetOrdersByDate(selectedDate);
            ViewBag.Total = items.Sum(x => x.ServiceAmount);
            ViewBag.SelectedDate = selectedDate;

            try
            {
                throw new Exception("Bad ");
                log.Info("Everything works well");
            }
            catch (Exception ex)
            {
                log.Error(ex, "Something bad happened");
            }

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

       
    }
}
