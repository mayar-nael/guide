function searchCourses() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let courses = document.querySelectorAll('.course-card');
    let found = 0;
  
    courses.forEach(course => {
      let title = course.getAttribute('data-title').toLowerCase();
      let desc = course.getAttribute('data-desc').toLowerCase();
  
      if (title.includes(input) || desc.includes(input)) {
        course.style.display = 'flex';
        found++;
      } else {
        course.style.display = 'none';
      }
    });
  
    document.getElementById('searchResultText').textContent =
      input === '' ? 'اختر المساق الذي تريد دراسته واكتشف أفضل المصادر التعليمية المتاحة'
                   : `عدد النتائج: ${found}`;
  }
  
  // عداد المساقات والمصادر
  window.onload = () => {
    let courseCount = document.querySelectorAll('.course-card').length;
    let resourceCount = 0;
    document.querySelectorAll('.badge-outline').forEach(b => {
      resourceCount += parseInt(b.textContent);
    });
    document.getElementById('courseCount').textContent = courseCount;
    document.getElementById('resourceCount').textContent = resourceCount;
  };
  