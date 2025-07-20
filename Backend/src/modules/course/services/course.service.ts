import Course, { ICourse } from "../models/course.model";

export async function createCourse(courseData: Partial<ICourse>) {
  return await Course.create(courseData);
}

export async function getAllCourses() {
  return await Course.find()
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");
}

export async function getCourseById(id: string) {
  return await Course.findById(id)
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");
}

export async function getCourseByIdWithEnrollmentStatus(id: string, userId?: string) {
  const course = await Course.findById(id)
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");

  if (!course) {
    return null;
  }

  // Kiểm tra xem user hiện tại đã tham gia khóa học hay chưa
  let isEnrolled = false;
  if (userId && course.users) {
    // Kiểm tra trong mảng users đã populate
    isEnrolled = course.users.some((user: any) => {
      // Nếu user đã được populate thì có _id, nếu chưa thì chính nó là ObjectId
      const userIdToCheck = user._id || user;
      return userIdToCheck.toString() === userId;
    });
  }

  return {
    ...course.toObject(),
    isEnrolled
  };
}

export async function updateCourse(id: string, updateData: Partial<ICourse>) {
  return await Course.findByIdAndUpdate(id, updateData, { new: true });
}

export async function deleteCourse(id: string) {
  return await Course.findByIdAndDelete(id);
}

export async function getPopularCoursesSortedByReviews() {
  return await Course.find()
    .sort({ reviews: -1 })
    .limit(10)
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");
}

interface GetPopularCoursesOptions {
  limit?: number;
  page?: number;
  sortBy?: "users" | "reviews";
}

export async function getPopularCourses(
  options: GetPopularCoursesOptions = {}
) {
  const { limit = 10, page = 1, sortBy = "reviews" } = options;

  const skip = (page - 1) * limit;

  // Tạo sort object dựa trên sortBy
  let sortObject: any;
  if (sortBy === "users") {
    sortObject = { users: -1 };
  } else {
    sortObject = { reviews: -1 };
  }

  // Đếm tổng số courses để tính pagination
  const totalCourses = await Course.countDocuments();
  const totalPages = Math.ceil(totalCourses / limit);

  const courses = await Course.find()
    .sort(sortObject)
    .skip(skip)
    .limit(limit)
    .populate("instructorId")
    .populate("lessons")
    .populate("reviews")
    .populate("users");

  return {
    courses,
    pagination: {
      currentPage: page,
      totalPages,
      totalCourses,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  };
}
