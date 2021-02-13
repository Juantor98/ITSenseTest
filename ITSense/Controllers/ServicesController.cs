// <copyright file="ProductController.cs" Product="PlaceholderProduct">
// Copyright (c) PlaceholderProduct. All rights reserved.
// </copyright>

namespace Controllers
{
    using ITSense.Models;
    using System.Web.Http;
    using Business;

    public class ServicesController : ApiController
    {
        [HttpGet]
        public IHttpActionResult Get()
        {
            return Json(ProductManager.Instance.GetAll());
        }

        [HttpGet]
        public IHttpActionResult Get(int id)
        {
            return Json(ProductManager.Instance.GetById(id));
        }

        [HttpGet]
        [Route("~/Api/Services/GetByCode/{code}")]
        public IHttpActionResult GetByCode(string code)
        {
            return Json(ProductManager.Instance.GetByCode(code));
        }

        [HttpPost]
        [Route("~/Api/Services/Save")]
        public IHttpActionResult Save (Product entity)
        {
            return Json(ProductManager.Instance.Add(entity));
        }

        [HttpPost]
        [Route("~/Api/Services/Edit")]
        public IHttpActionResult Edit(Product entity)
        {
            return Json(ProductManager.Instance.Update(entity));
        }

        [HttpDelete]
        [Route("~/Api/Services/Delete/{id}")]
        public IHttpActionResult Delete(int id)
        {
            return Json(ProductManager.Instance.Delete(id));
        }
    }
}
