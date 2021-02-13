// <copyright file="ProductManager.cs" company="PlaceholderCompany">
// Copyright (c) PlaceholderCompany. All rights reserved.
// </copyright>

namespace Business
{
    using System;
    using System.Collections.Generic;
    using Data;
    using ITSense.Models;

    public class ProductManager
    {
        private static ProductManager instance;

        public static ProductManager Instance
        {
            get { return instance ?? (instance = new ProductManager()); }
        }
        public List<Product> GetAll()
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                return (List<Product>)repo.GetAll();
            }
        }

        public Product GetByCode(string code)
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                return repo.Single(model => model.Code == code);
            }
        }

        public Product GetById(int id)
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                return repo.Single(model => model.Id == id);
            }
        }

        public Product Add(Product entity)
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                Product response = repo.Add(entity);
                return repo.SaveChanges() > 0 ? response : null;
            }
        }

        public bool Update (Product entity)
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                repo.Edit(entity);
                return repo.SaveChanges() > 0;
            }
        }


        public bool Delete(Product entity)
        {
            using (Repository<Product> repo = new Repository<Product>())
            {
                repo.Delete(entity);
                return repo.SaveChanges() > 0;
            }
        }
    }
}