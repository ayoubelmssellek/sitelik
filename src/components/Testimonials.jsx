import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'أحمد محمد',
      nameEn: 'Ahmed Mohammed',
      role: 'صاحب مطعم الأصالة',
      roleEn: 'Owner of Al-Asala Restaurant',
      content: 'فريق ممتاز جداً! طوروا لنا موقع إلكتروني رائع لمطعمنا مع نظام طلبات أونلاين. زادت مبيعاتنا بنسبة 40% خلال شهرين فقط.',
      contentEn: 'Excellent team! They developed an amazing website for our restaurant with online ordering system. Our sales increased by 40% in just two months.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'فاطمة الزهراء',
      nameEn: 'Fatima Al-Zahra',
      role: 'مديرة معهد النور التعليمي',
      roleEn: 'Director of Al-Noor Educational Institute',
      content: 'منصة التعلم الإلكتروني التي طوروها لمعهدنا تجاوزت كل توقعاتنا. سهلة الاستخدام ومليئة بالميزات المفيدة للطلاب والمعلمين.',
      contentEn: 'The e-learning platform they developed for our institute exceeded all our expectations. Easy to use and full of useful features for students and teachers.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'خالد العمري',
      nameEn: 'Khalid Al-Omari',
      role: 'مؤسس شركة التجارة الذكية',
      roleEn: 'Founder of Smart Commerce Company',
      content: 'متجرنا الإلكتروني أصبح أكثر احترافية وسرعة. الفريق فهم احتياجاتنا بدقة وسلم المشروع في الوقت المحدد.',
      contentEn: 'Our online store became more professional and faster. The team understood our needs precisely and delivered the project on time.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.nameEn}
              className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <div className="absolute top-4 right-4 text-primary-200">
                <Quote className="w-8 h-8" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.nameEn}
                  className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                />
                <div className="ml-4">
                  <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600 mb-1">{testimonial.nameEn}</p>
                  <p className="text-primary-600 font-semibold text-sm font-arabic">{testimonial.role}</p>
                  <p className="text-gray-500 text-xs">{testimonial.roleEn}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <blockquote className="text-gray-700 leading-relaxed mb-4 font-arabic text-right">
                "{testimonial.content}"
              </blockquote>
              
              <p className="text-gray-600 text-sm italic">
                "{testimonial.contentEn}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;