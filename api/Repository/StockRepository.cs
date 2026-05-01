using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Data;
using api.Dtos.Stock;
using api.Interfaces;
using api.Models;
using Microsoft.EntityFrameworkCore;

namespace api.Repository
{
    public class StockRepository : IStockRepository
    {
        private readonly ApplicationDBContext _context;
        public StockRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public Task<Stock> CreateAsync(Stock stockModel)
        {
            throw new NotImplementedException();
        }

        public Task<Stock?> DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<List<Stock>> GetAllAsync()
        {
            return _context.Stocks.ToListAsync();
        }

        public Task<Stock?> GetByIdAsync(int id)
        {
            throw new NotImplementedException();
        }

        public Task<Stock?> UpdateAsync(int id, UpdateStockRequestDto stockDto)
        {
            throw new NotImplementedException();
        }
    }
}