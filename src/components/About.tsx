import { Button } from "@/components/ui/button";
import { Award, Users, Clock, Target } from "lucide-react";
import workshopInterior from "@/assets/workshop-interior.jpg";

const stats = [
  { icon: Clock, label: "Anos de Experiência", value: "15+" },
  { icon: Users, label: "Clientes Atendidos", value: "200+" },
  { icon: Award, label: "Projetos Concluídos", value: "500+" },
  { icon: Target, label: "Satisfação Cliente", value: "100%" }
];

export const About = () => {
  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img 
              src={workshopInterior} 
              alt="Oficina WL Motors - Interior"
              className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent rounded-2xl"></div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="font-orbitron font-bold text-2xl">15+</div>
                <div className="text-sm opacity-90">Anos</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-orbitron font-bold text-4xl lg:text-5xl">
                Sobre <span className="text-primary">Wildiner Lucio</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Há mais de 15 anos transformando veículos com a paixão de quem entende que 
                cada carro tem sua própria história. Wildiner Lucio dos Santos é um especialista 
                em lanternagem e pintura automotiva, conhecido pela precisão e dedicação em cada projeto.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                A WL Motors nasceu da paixão por carros clássicos, especialmente pelos muscle cars 
                americanos dos anos 70. Nosso símbolo, o motor V8, representa a força e a potência 
                que colocamos em cada trabalho realizado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-xl border border-border">
                  <stat.icon className="h-8 w-8 text-primary mb-3" />
                  <div className="font-orbitron font-bold text-2xl text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="font-rajdhani font-semibold text-xl">Nossa Missão</h3>
              <p className="text-muted-foreground">
                Restaurar não apenas a aparência, mas a alma de cada veículo que passa por nossas mãos. 
                Cada projeto é único e recebe atenção personalizada, garantindo resultados que superam expectativas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="racing" size="lg">
                Conheça Nossa Oficina
              </Button>
              <Button variant="outline" size="lg">
                Ver Certificações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};