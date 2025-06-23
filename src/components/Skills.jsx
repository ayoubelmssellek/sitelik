import { Brain, Settings, Palette } from 'lucide-react';

const Skills = () => {
  const teamSkills = [
    {
      name: 'Ayoub El Mssellek',
      nameAr: 'أيوب المسلك',
      icon: <Brain className="w-8 h-8" />,
      role: 'Frontend Developer',
      roleAr: 'مطور واجهات أمامية',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'JavaScript', level: 92 },
        { name: 'Responsive UI', level: 88 },
        { name: 'Framer Motion', level: 85 }
      ],
      color: 'primary'
    },
    {
      name: 'Ayoub Fekri',
      nameAr: 'أيوب فكري',
      icon: <Settings className="w-8 h-8" />,
      role: 'Backend Developer',
      roleAr: 'مطور خلفي',
      skills: [
        { name: 'Laravel', level: 93 },
        { name: 'PHP', level: 90 },
        { name: 'MySQL', level: 87 },
        { name: 'REST API', level: 91 },
        { name: 'Sanctum & Security', level: 89 }
      ],
      color: 'secondary'
    },
    {
      name: 'Mustapha Arab',
      nameAr: 'مصطفى عرب',
      icon: <Palette className="w-8 h-8" />,
      role: 'UI/UX Designer',
      roleAr: 'مصمم واجهات',
      skills: [
        { name: 'Figma', level: 94 },
        { name: 'UI/UX Prototyping', level: 91 },
        { name: 'Vue.js', level: 86 },
        { name: 'Git & GitHub', level: 88 },
        { name: 'Bootstrap', level: 85 }
      ],
      color: 'purple'
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: {
        bg: 'bg-primary-50',
        border: 'border-primary-200',
        icon: 'text-primary-600',
        progress: 'bg-primary-600',
        progressBg: 'bg-primary-100'
      },
      secondary: {
        bg: 'bg-secondary-50',
        border: 'border-secondary-200',
        icon: 'text-secondary-600',
        progress: 'bg-secondary-600',
        progressBg: 'bg-secondary-100'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        progress: 'bg-purple-600',
        progressBg: 'bg-purple-100'
      }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="font-arabic">مهاراتنا</span> / Our Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each team member brings unique expertise and specialized skills to deliver 
            comprehensive web solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {teamSkills.map((member, index) => {
            const colorClasses = getColorClasses(member.color);
            return (
              <div
                key={member.name}
                className={`${colorClasses.bg} ${colorClasses.border} border-2 rounded-2xl p-8 hover:shadow-lg transition-all duration-300`}
              >
                <div className="text-center mb-8">
                  <div className={`${colorClasses.icon} mb-4 flex justify-center`}>
                    {member.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="font-arabic text-lg text-gray-700 mb-2">{member.nameAr}</p>
                  <p className={`${colorClasses.icon} font-semibold`}>{member.role}</p>
                  <p className="font-arabic text-sm text-gray-600">{member.roleAr}</p>
                </div>

                <div className="space-y-4">
                  {member.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-800">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                      </div>
                      <div className={`w-full ${colorClasses.progressBg} rounded-full h-3`}>
                        <div
                          className={`${colorClasses.progress} h-3 rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;