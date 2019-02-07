using Autofac;
using Autofac.Extras.CommonServiceLocator;
using Autofac.Integration.Mvc;
using CommonServiceLocator;
using Microsoft.Owin;
using Owin;
using System.Reflection;
using System.Web.Http;
using System.Web.Mvc;

[assembly: OwinStartupAttribute(typeof(BuroBeauty.Website.Startup))]
namespace BuroBeauty.Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var builder = new ContainerBuilder();

            builder.RegisterAssemblyTypes(Assembly.Load("BuroBeauty.Repositories.Implementation"))
                .Where(t => t.Name.EndsWith("Repository") || t.Name.EndsWith("Provider"))
                .AsImplementedInterfaces()
                .PropertiesAutowired();

            builder.RegisterAssemblyTypes(Assembly.Load("BuroBeauty.BLL.Implementation"))
                .Where(t => t.Name.EndsWith("Manager"))
                .AsImplementedInterfaces()
                .PropertiesAutowired();

            // MVC Setup
            builder.RegisterControllers(typeof(MvcApplication).Assembly).PropertiesAutowired();
            builder.RegisterFilterProvider();

            var container = builder.Build();

            var csl = new AutofacServiceLocator(container);
            ServiceLocator.SetLocatorProvider(() => csl);

            var config = GlobalConfiguration.Configuration;
            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));

            ConfigureAuth(app);
        }
    }
}
