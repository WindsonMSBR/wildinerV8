import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MapPin, Clock, Mail, MessageCircle } from "lucide-react";
export const Contact = () => {
  return <section id="contato" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl lg:text-5xl mb-4">
            Entre em <span className="text-primary">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pronto para transformar seu veículo? Entre em contato conosco e 
            solicite um orçamento personalizado.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-rajdhani font-semibold text-2xl mb-6">
                Informações de Contato
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(31) 9 7341-1640</p>
                    <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua Malaquias, 461<br />
                      Bairro São José - Santana do Paraíso, MG<br />
                      CEP: 35179-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-muted-foreground">
                      Das 8h às 18h<br />
                      Segunda a Sexta-feira
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-muted-foreground">contato@wlmotors.com.br</p>
                    <p className="text-sm text-muted-foreground">Resposta em até 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <h4 className="font-rajdhani font-semibold text-lg">Contato Rápido</h4>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button variant="racing" className="flex-1">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="outline" className="flex-1">
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardContent className="p-8">
              <h3 className="font-rajdhani font-semibold text-2xl mb-6">
                Solicite seu Orçamento
              </h3>
              
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome</label>
                    <Input placeholder="Seu nome completo" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(11) 9 9999-9999" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="seu@email.com" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Veículo</label>
                  <Input placeholder="Marca, modelo e ano do veículo" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Serviço de Interesse</label>
                  <select className="w-full p-3 rounded-md border border-input bg-background">
                    <option>Selecione o serviço</option>
                    <option>Pintura Completa</option>
                    <option>Lanternagem</option>
                    <option>Restauração</option>
                    <option>Reparo Rápido</option>
                    <option>Personalização</option>
                    <option>Outro</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea placeholder="Descreva o serviço que você precisa..." className="min-h-[120px]" />
                </div>
                
                <Button variant="racing" size="lg" className="w-full">
                  Enviar Solicitação
                </Button>
                
                <p className="text-sm text-muted-foreground text-center">
                  Retornaremos seu contato em até 24 horas
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>;
};