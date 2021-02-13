using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ITSense.Models
{
    public class Product
    {
        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
        public bool State { get; set; }
        public int Quantity { get; set; }
    }
}