namespace TT.Api.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using TT.Lib.DataAccess;
    using TT.Lib.Entities;
    using TT.Lib.Mvc;

    [Route("api/[controller]")]
    [ApiController]
    public class ExportController : ReadWriteController<Brand, int>
    {

        private readonly IBrandService mainService;

        public ExportController(IBrandService mainService) : base((IReadWriteService<Brand>)mainService)
        {
            this.mainService = mainService;
        }

        [HttpGet]
        [Route("brand")]
        public async Task<IActionResult> GetWithObjects()
        {
            var brandsQuery = await (await this.mainService.Query())
                .Include(b => b.Products)
                .ThenInclude(p => p.Properties)
                .ThenInclude(pp => pp.Property)
                .ToListAsync();

            var brandDtoList = brandsQuery.SelectMany(brand => brand.Products.Select(p => new BrandDtoExport
            {
                Name = brand.Name,
                Products = new List<ProductDtoExport>
                {
                      new ProductDtoExport
                      {
                         Key = p.Key,
                         Id = p.Id,
                         Name = p.Name,
                         Properties = p.Properties.Select(pp => new ProductPropertyDtoExport
                             {
                                Name = pp.Property.Name,
                                Value = pp.Value
                             }).ToList()
                      }
                }
            })).ToList();


            return Ok(brandDtoList);
        }
    }

}
