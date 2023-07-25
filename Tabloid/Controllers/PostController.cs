using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Tabloid.Models;
using System.Threading.Tasks;
using Tabloid.Repositories;
using System.Security.Claims;
using System;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PostController : ControllerBase
    {
        private readonly IPostRepository _postRepository;
        private readonly IUserProfileRepository _userProfileRepository;

        public PostController(IPostRepository postRepository, IUserProfileRepository userProfileRepository)
        {
            _postRepository = postRepository;
            _userProfileRepository = userProfileRepository;
        }

        [HttpGet]
        public IActionResult Get()
        {
            var posts = _postRepository.GetAll();
            return Ok(posts);
        }

        // POST/CREATE api/<PostController>
        //add method
        [HttpPost]
        public IActionResult Post(Post post)
        {
            UserProfile user = GetCurrentUserProfile();
            post.UserProfileId = user.Id;
            post.PublishDateTime = DateTime.Now;
            _postRepository.Add(post);
            return CreatedAtAction("Get", new { id = post.Id }, post);        
        }


        //    update method
        //    PUT api/<PostController>/5
        //    [HttpPut("{id}")]
        //    public IActionResult Put(int id, [FromBody] string value)
        //    {
        //    }

        //    DELETE api/<PostController>/5
        //    [HttpDelete("{id}")]
        //    public IActionResult Delete(int id)
        //    {
        //    }
        //    */
        [HttpGet("{id}")]
        public IActionResult GetPost(int id)
        {
            var post = _postRepository.GetPost(id);
            if (post == null)
            {
                return NotFound();
            }

            return Ok(post);
        } 

        private UserProfile GetCurrentUserProfile()
        {
            var firebaseUserId = User.FindFirst(ClaimTypes.NameIdentifier).Value;
            return _userProfileRepository.GetByFirebaseUserId(firebaseUserId);
        }
    }
}