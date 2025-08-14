import { courses } from "./data";
import { Detail } from "./detail";




const Courses = () => {
  return (
    <section className="bg-gradient-to-br from-[#270f71] to-[#270f71] py-16 px-4 md:px-20">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold text-white mb-12">
        Our Courses
      </h2>

      <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
        {courses.map((course, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-lg bg-white hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Left Section */}
            <div className="bg-[#1e1b4b] text-white p-6 w-full md:w-1/3 flex flex-col justify-between">
              <div>
                <p className="uppercase text-xs tracking-widest opacity-70">
                  Course
                </p>
                <h3 className="text-lg font-semibold mt-1">{course.title}</h3>
              </div>
              <button className="text-sm mt-4 opacity-80 hover:opacity-100 transition">
                <Detail button={"View all modules → "} name={course.title} module={course.module}/>
              </button>
            </div>

            {/* Right Section */}
            <div className="bg-white p-6 w-full md:w-2/3 flex flex-col justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-gray-500">
                  {course.currentModule}
                </p>
                <p className="text-lg font-semibold mt-1">
                  {course.modules} Modules • {course.duration}
                </p>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div
                      className="h-2 bg-[#1e1b4b] rounded-full"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {course.progress}% Completed
                  </p>
                </div>
              </div>

              {/* Continue Button */}
              <button className="bg-[#1e1b4b] text-white px-4 py-2 rounded-full mt-4 self-start hover:bg-[#292461] transition">
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>


      
    </section>
  );
};

export default Courses;
