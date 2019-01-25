using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BuroBeauty.Website.Startup))]
namespace BuroBeauty.Website
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
