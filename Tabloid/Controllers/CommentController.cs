using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Tabloid.Models;
using Tabloid.Repositories;

namespace Tabloid.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ICommentRepository _commentRepository;

        public CommentController(ICommentRepository commentRepository)
        {
            _commentRepository = commentRepository;
        }

        [HttpGet("{postId}")]
        public IActionResult GetCommentsByPostId(int postId)
        {
            var comments = _commentRepository.GetCommentsByPostId(postId);
            return Ok(comments);
        }

        [HttpPost]
        public IActionResult AddComment(Comment newComment)
        {
            _commentRepository.AddComment(newComment);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteComment(int id)
        {
            _commentRepository.DeleteComment(id);
            return Ok();
        }

    }
}
