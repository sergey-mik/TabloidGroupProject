using System.ComponentModel.DataAnnotations;
using System.Data;

namespace Tabloid.Models
{
    public class Tag
    {
        public int Id { get; set; }
        [Required]
        [MaxLength(50)]
        public string Name { get; set; }
    }
}
