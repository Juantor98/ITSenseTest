using ITSense.Models;
using System.Data.Entity;

namespace Data
{
    public partial class ITSenseModel : DbContext
    {   
        public ITSenseModel()
            : base("name=ITSenseModel")
        {
        }
        
        public virtual DbSet<Product> Product { get; set; }
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
        }
    }
}
