using Microsoft.Extensions.Hosting;
using System.Collections.Generic;
using Tabloid.Models;

namespace Tabloid.Repositories
{
    public interface IPostRepository
    {
        List<Post> GetAll();

        void Add(Post post);
        void Update(Post post);
        void Delete(int id);

        Post GetPost(int id);

    }

}
