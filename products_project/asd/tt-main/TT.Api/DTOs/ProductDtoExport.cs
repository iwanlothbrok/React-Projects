using System.Collections.Generic;

public class ProductDtoExport
{
    public string Key { get; set; }
    public int Id { get; set; }
    public string Name { get; set; }
    public List<ProductPropertyDtoExport> Properties { get; set; }
}