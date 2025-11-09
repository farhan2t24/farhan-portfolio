import { StarField } from '@/components/StarField';
import { ChatBox } from '@/components/ChatBox';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, Linkedin, Instagram, Mail, Phone, MapPin, ExternalLink, Calendar, GraduationCap, Code2, Brain, Rocket, AlertCircle } from 'lucide-react';
import cosmicHero from '@/assets/cosmic-hero.jpg';
import profilePic from '@/assets/profile.jpeg';
import mlProject from '@/assets/ml-project.jpg';
import neurofade from '@/assets/neurofade.jpg';
import cosmara from '@/assets/cosmara.jpg';
import offlineNetwork from '@/assets/offline-network.jpg';
import roadSense from '@/assets/road-sense.jpg';
import aesEncryption from '@/assets/aes-encryption.jpg';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarField />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${cosmicHero})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.4)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background z-0" />
        
        <div className="relative z-10 text-center px-4 space-y-8">
          <h1 className="text-8xl md:text-9xl font-bold text-gradient animate-in fade-in slide-in-from-bottom-4 duration-1000 floating">
            FARHAN
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            AI/ML Enthusiast & Continuous Learner
          </p>
          <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 cosmic-glow">
              <a href="https://github.com/farhan2t24" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
              <a href="https://www.linkedin.com/in/farhan-ahmed-649bb5305/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent/50 hover:bg-accent/10">
              <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 mr-2" />
                Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">About Me</h2>
          <Card className="glass-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30" />
                  <img
                    src={profilePic}
                    alt="Farhan Ahmed"
                    className="relative rounded-full w-64 h-64 object-cover border-4 border-primary/30 cosmic-glow"
                  />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am an AI/ML enthusiast and a continuous learner, exploring Python, machine learning, NLP, and AI tools like n8n, Figma, Canva, and GitHub. Though I consider myself a beginner, I am highly adaptable and eager to learn in any situation I am placed in.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My priority is constant growth, and I strive to leverage AI in every possible scenario to build practical solutions and maximize impact. I have a keen interest in Generative AI and Prompt Engineering, where I focus on experimenting, creating, and learning through real-world applications.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Beyond coding, I spend my time prototyping new ideas, tinkering with innovative tools, and exploring how technology can shape the future.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-24 px-4 md:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Education</h2>
          <div className="space-y-8">
            {[
              {
                degree: 'Bachelor of Engineering in Artificial Intelligence and Machine Learning',
                school: 'AMC Engineering College',
                period: '2023 - 2027',
                gpa: '8.5 CGPA',
                description: 'Currently pursuing specialized education in AI/ML, focusing on cutting-edge technologies like Large Language Models, Computer Vision, and Neural Networks.',
                badges: ['AI/ML', 'LLMs', 'Computer Vision', 'Neural Networks']
              },
              {
                degree: 'Pre University Course (12th Grade)',
                school: 'Jain Pre University College',
                period: '2020 - 2022',
                gpa: '65%',
                description: 'Completed higher secondary education with focus on science subjects, building strong foundation in mathematics and physics.',
                badges: ['Science Stream', 'Mathematics', 'Physics']
              },
              {
                degree: 'Secondary School (10th Grade)',
                school: 'Army Public School Bangalore',
                period: '2010 - 2020',
                gpa: '80%',
                description: 'Strong academic foundation with excellent performance in core subjects and extracurricular activities.',
                badges: ['Academic Excellence', 'Leadership', 'All-round Development']
              }
            ].map((edu, index) => (
              <Card key={index} className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 cosmic-glow">
                    <GraduationCap className="w-8 h-8 text-foreground" />
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                      <p className="text-lg text-primary">{edu.school}</p>
                    </div>
                    <p className="text-muted-foreground">{edu.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {edu.badges.map((badge, i) => (
                        <Badge key={i} variant="secondary" className="bg-primary/20 text-primary">
                          {badge}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                      <div className="flex items-center gap-2">
                        <Brain className="w-4 h-4" />
                        {edu.gpa}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Programming Languages',
                skills: ['Python', 'JavaScript', 'Java', 'C', 'C++', 'HTML', 'CSS']
              },
              {
                title: 'AI & Machine Learning',
                skills: ['TensorFlow', 'Regression', 'Classification (SVM, XGBoost, BERT)', 'Feature Engineering', 'Model Evaluation', 'NLP', 'Text Preprocessing']
              },
              {
                title: 'Full Stack Development',
                skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'SQL', 'Tailwind CSS']
              },
              {
                title: 'AI Tools & Automation',
                skills: ['ChatGPT', 'OpenAI APIs', 'MidJourney', 'DALL·E', 'Runway', 'n8n', 'Lovable', 'Prompt Engineering']
              },
              {
                title: 'Development Tools',
                skills: ['VS Code', 'Jupyter Notebook', 'Google Colab', 'GitHub', 'Version Control']
              },
              {
                title: 'Design Tools',
                skills: ['Figma', 'Canva', 'UI/UX Design']
              }
            ].map((category, index) => (
              <Card key={index} className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <Code2 className="w-6 h-6 text-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10 transition-colors">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-4 md:px-8 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 text-gradient">Projects</h2>
          
          {/* Currently Working */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-secondary" />
              Currently Working
            </h3>
            <Card className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <img src={aesEncryption} alt="AES Encryption" className="rounded-lg w-full h-48 object-cover cosmic-glow" />
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-2xl font-bold text-foreground">Advanced Encryption Algorithm Messaging WebApp</h4>
                  <p className="text-muted-foreground">Almost completed secure messaging platform with advanced AES encryption.</p>
                  <div className="flex gap-3">
                    <Button asChild size="sm" className="bg-gradient-to-r from-primary to-secondary">
                      <a href="https://farhan2t24.github.io/AES/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="https://github.com/farhan2t24/AES.git" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Completed Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Brain className="w-8 h-8 text-primary" />
              Completed Projects
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Cyberbullying Classification Model',
                  period: '06/2025 – 07/2025',
                  description: 'Built a classification model to predict cyberbullying types across social media. Categories include Age, Ethnicity, Gender, Religion, and Other Cyberbullying.',
                  image: mlProject,
                  link: 'https://github.com/farhan2t24/farhan2t24.github.io.git'
                },
                {
                  title: 'Data Scientist Salary Predictor',
                  period: '05/2025 – 06/2025',
                  description: 'Built a Regression model to predict data scientist salaries based on employee features, experience, company type, and location.',
                  image: mlProject,
                  link: 'https://github.com/farhan2t24/farhan2t24.github.io.git'
                }
              ].map((project, index) => (
                <Card key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                  <img src={project.image} alt={project.title} className="rounded-lg w-full h-40 object-cover mb-4 cosmic-glow" />
                  <h4 className="text-xl font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{project.period}</p>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <Button asChild size="sm" variant="outline">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Planned Projects */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <Rocket className="w-8 h-8 text-accent" />
              Planned / Ideation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'NEUROFADE',
                  description: 'AI-powered memory decay simulator',
                  image: neurofade
                },
                {
                  title: 'COSMARA',
                  description: 'Building a custom Large Language Model',
                  image: cosmara
                },
                {
                  title: 'Offline Network Platform',
                  description: 'Platform for internetless/networkless regions to communicate',
                  image: offlineNetwork
                }
              ].map((project, index) => (
                <Card key={index} className="glass-card p-6 hover:scale-[1.02] transition-all duration-300">
                  <img src={project.image} alt={project.title} className="rounded-lg w-full h-40 object-cover mb-4 cosmic-glow" />
                  <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Failed Projects */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
              <AlertCircle className="w-8 h-8 text-destructive" />
              Failed Projects (Learning Experiences)
            </h3>
            <Card className="glass-card p-8 hover:scale-[1.02] transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <img src={roadSense} alt="Road Sense Buddy" className="rounded-lg w-full h-48 object-cover cosmic-glow" />
                <div className="md:col-span-2 space-y-4">
                  <h4 className="text-2xl font-bold text-foreground">Road Sense Buddy</h4>
                  <p className="text-muted-foreground">
                    A project aimed to provide ADAS functions to old cars and provide driving assistance, built using vibe coding tools.
                  </p>
                  <div className="flex gap-3">
                    <Button asChild size="sm" variant="outline">
                      <a href="https://road-sense-buddy.lovable.app/" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Demo
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href="https://github.com/farhan2t24/road-sense-buddy.git" target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-8 text-gradient">Let's Connect</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            I'm always open to discussing new opportunities, creative projects, or potential collaborations.
          </p>
          <Card className="glass-card p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center cosmic-glow">
                  <Mail className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Email</h3>
                <p className="text-sm text-muted-foreground">farhan2t24@gmail.com</p>
                <p className="text-sm text-muted-foreground">1am23ai018@amceducation.in</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary to-accent flex items-center justify-center cosmic-glow">
                  <Phone className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Phone</h3>
                <p className="text-sm text-muted-foreground">+91 9740569331</p>
              </div>
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-accent to-primary flex items-center justify-center cosmic-glow">
                  <MapPin className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Location</h3>
                <p className="text-sm text-muted-foreground">Bengaluru, India</p>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-12">
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 cosmic-glow">
                <a href="https://github.com/farhan2t24" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <a href="https://www.linkedin.com/in/farhan-ahmed-649bb5305/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5 mr-2" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-4 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Farhan Ahmed. Built with passion and cosmic energy. ✨
          </p>
        </div>
      </footer>

      <ChatBox />
    </div>
  );
};

export default Index;
