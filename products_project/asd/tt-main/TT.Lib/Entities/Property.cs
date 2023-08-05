using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace TT.Lib.Entities
{
    public class Property : BaseName
    {
        public int ParentId { get; set; }

        /// <summary>
        /// if it's necessary
        /// </summary>
        /// [Required]
        [StringLength(50)]
        public string Type { get; set; }
    }
}
