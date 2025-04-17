import dashhome from './assets/dashhome.svg';
import profile from './assets/profile.svg';
import categories from './assets/categories.svg';
import courses from './assets/courses.svg';
import enrollment from './assets/enrollment.svg';
import quiz from './assets/quiz.svg';
import lectures from './assets/lectures.svg';
import progress from './assets/progress.svg';
import settings from './assets/settings.svg';
import logout from './assets/logout.svg';

export const routes = [
  {
    title: 'لوحة التحكم',
    path: '/instructor-dashboard',
    icon: dashhome,
  },
  {
    title: 'الملف الشخصي',
    path: 'profile',
    icon: profile,
  },
  {
    title: 'الفئات',
    path: 'categories',
    icon: categories,
  },
  {
    title: 'الدورات',
    path: 'courses',
    icon: courses,
  },
  {
    title: 'التسجيل',
    path: 'enrollment',
    icon: enrollment,
  },
  {
    title: 'الإختبارات',
    path: 'exams',
    icon: quiz,
  },
  {
    title: 'المحاضرات',
    path: 'lectures',
    icon: lectures,
  },
  {
    title: 'التقدم',
    path: 'progress',
    icon: progress,
  },
  {
    title: 'الإعدادات',
    path: 'settings',
    icon: settings,
  },
  {
    title: 'تسجيل الخروج',
    path: 'logout',
    icon: logout,
    logout: true,
  },
];
