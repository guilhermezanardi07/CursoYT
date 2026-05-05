// using System;
// using System.Collections.Generic;
// using System.Linq;
// using System.Threading.Tasks;
// using api.Dtos.Stock;
// using api.Interfaces;
// using api.Mappers;
// using api.Models;
// using Microsoft.CodeAnalysis;
// using Newtonsoft.Json;

// namespace api.Service
// {
//     public class FMPService : IFMPService
//     {
//         private HttpClient _httpClient;
//         private IConfiguration _config;
//         public FMPService(HttpClient httpClient, IConfiguration config)
//         {
//             _httpClient = httpClient;
//             _config = config;
//         }
//         public async Task<Stock> FindStockBySymbolAsync(string symbol)
//         {
//             try
//             {
//                 var result = await _httpClient.GetAsync($"https://finnhub.io/api/v1/stock/profile2?symbol={symbol}&token={_config["FMPKey"]}");
//                 if (result.IsSuccessStatusCode)
//                 {
//                     var content = await result.Content.ReadAsStringAsync();
//                     var tasks = JsonConvert.DeserializeObject<FMPStock[]>(content);
//                     var stock = tasks[0];
//                     if (stock != null)
//                     {
//                         return stock.ToStockFromFMP();
//                     }
//                     return null;
//                 }
//                 return null;
//             } catch (Exception e)
//             {
//                 Console.WriteLine(e);
//                 return null;
//             }
//         }
//     }
// }
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Stock;
using api.Interfaces;
using api.Mappers;
using api.Models;
using Newtonsoft.Json;

namespace api.Service
{
    public class FMPService : IFMPService
    {
        private HttpClient _httpClient;
        private IConfiguration _config;
        public FMPService(HttpClient httpClient, IConfiguration config)
        {
            _httpClient = httpClient;
            _config = config;
        }
        public async Task<Stock> FindStockBySymbolAsync(string symbol)
        {
            try
            {
                var result = await _httpClient.GetAsync($"https://finnhub.io/api/v1/stock/profile2?symbol={symbol}&token={_config["FMPKey"]}");
                if (result.IsSuccessStatusCode)
                {
                    var content = await result.Content.ReadAsStringAsync();
                    var stock = JsonConvert.DeserializeObject<FMPStock>(content);
                    if (stock != null && !string.IsNullOrEmpty(stock.ticker))
                    {
                        return stock.ToStockFromFMP();
                    }
                    return null;
                }
                return null;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}