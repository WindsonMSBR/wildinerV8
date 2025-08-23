import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Paintbrush, Wrench, Car, Shield, Zap, Settings } from "lucide-react";

const services = [
  {
    icon: Paintbrush,
    title: "Pintura Automotiva",
    description: "Pintura completa e retoque com tintas de alta qualidade. Cabine de pintura climatizada para acabamento perfeito.",
    features: ["Pintura completa", "Retoque localizado", "Verniz UV protection", "Garantia 2 anos"]
  },
  {
    icon: Wrench,
    title: "Lanternagem",
    description: "Reparos em lataria, funilaria e estrutura veicular. Técnicas modernas para restaurar a forma original.",
    features: ["Desamassamento", "Solda especializada", "Alinhamento", "Estrutura veicular"]
  },
  {
    icon: Car,
    title: "Restauração Completa",
    description: "Restauração completa de veículos clássicos e especiais. Resgatamos a originalidade do seu carro.",
    features: ["Desmontagem total", "Restauro de peças", "Pintura original", "Montagem final"]
  },
  {
    icon: Shield,
    title: "Proteção Veicular",
    description: "Aplicação de películas protetivas, enceramento e tratamentos para proteger a pintura.",
    features: ["Película PPF", "Enceramento", "Vitrificação", "Proteção UV"]
  },
  {
    icon: Zap,
    title: "Reparo Rápido",
    description: "Serviços express para pequenos reparos e retoques. Qualidade WL Motors em tempo reduzido.",
    features: ["Riscos superficiais", "Pequenos amassados", "Retoque de tinta", "Polimento"]
  },
  {
    icon: Settings,
    title: "Personalização",
    description: "Customização e tuning visual. Transforme seu veículo com o estilo que você deseja.",
    features: ["Faixas esportivas", "Mudança de cor", "Adesivação", "Aerografia"]
  }
];

export const Services = () => {
  return (
    <section id="servicos" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl lg:text-5xl mb-4">
            Nossos <span className="text-primary">Serviços</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada serviço é executado com a precisão de um motor V8, 
            garantindo qualidade e durabilidade para o seu veículo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-rajdhani font-semibold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary">
                  Solicitar Orçamento
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="font-orbitron font-bold text-2xl lg:text-3xl mb-4">
              Garantia <span className="text-primary">WL Motors</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Todos os nossos serviços possuem garantia de qualidade. 
              Sua satisfação é nossa prioridade.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2 Anos</div>
                <div className="text-sm text-muted-foreground">Garantia Pintura</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">1 Ano</div>
                <div className="text-sm text-muted-foreground">Garantia Lanternagem</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Satisfação Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};