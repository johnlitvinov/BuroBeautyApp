﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using BuroBeauty.BLL;
using BuroBeauty.BLL.Implementation;
using BuroBeauty.Repositories;
using BuroBeauty.Repositories.Implementation;
using MyTestProject.Controllers;

namespace BuroBeauty.Website.Controllers
{
    public class HomeController : Controller
    {
        private readonly IMasterManager _masterManager;

        public HomeController(IMasterManager masterManager)
        {
            _masterManager = masterManager;
            
        }


        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
             // ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            //ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}