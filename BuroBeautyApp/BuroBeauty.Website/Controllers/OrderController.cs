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
    public class OrderController : Controller
    {
        private IOrderManager _orderManager;

        public OrderController()
        {
            IOrderRepository orderRepository = new OrderRepository();
            _orderManager = new OrderManager(orderRepository);
        }

        // GET: SoldServices
        public ActionResult Index()
        {
        // Подсчет суммы 
            var items = _orderManager.GetOrdersByDate(null);
            ViewBag.Total = items.Sum(x => x.ServiceAmount);
            ViewBag.SelectedDate = DateTime.Now;
            
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
            return View();
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
            return View(order);
        }
        
        // GET: SoldServices/Edit/5
        public ActionResult Edit(int? id)
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
                // db.SaveChanges();
                return RedirectToAction("Index");
            }
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
