let courses = [  
    { id: 1, title: "ReactJS Tutorial", rating: 4.2 },  
    { id: 2, title: "Angular Tutorial", rating: 2.5 },  
    { id: 3, title: "VueJS Tutorial", rating: 3.8 },  
    { id: 4, title: "Java Tutorial", rating: 4 },  
    { id: 5, title: "JavaScript Tutorial", rating: 3.5 }  
];  

// Lọc và xuất tiêu đề các khóa học có rating >= 4  
let filteredCourses = courses  
    .filter(course => course.rating >= 4) // Lọc khóa học  
    .map(course => course.title); // Lấy tiêu đề  

// Xuất kết quả  
filteredCourses.forEach(title => console.log(title));